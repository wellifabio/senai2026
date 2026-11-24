-- Iniciaremos com uma QUEST / MISSÃO
-- O cliente Walter Paulo Costenaro quer 1 pizza de Atum e 2 napolitanas.
-- cliente_id 98
-- pizza_id 5, valor 32.29
-- pizza_id 28, valor 33.41
SELECT valor FROM pizzas WHERE pizza_id = 5;
SELECT valor FROM pizzas WHERE pizza_id = 28;

INSERT INTO pedidos VALUES
(default, 98, CURDATE(), NOW(), null);

SELECT * FROM pedidos ORDER BY pedido_id DESC LIMIT 1;
SELECT LAST_INSERT_ID();
-- pedido_id 27

INSERT INTO itens_pedido VALUES
(27,5,1,(SELECT valor FROM pizzas WHERE pizza_id = 5)),
(27,28,2,(SELECT valor FROM pizzas WHERE pizza_id = 28));

SELECT * FROM itens_pedido WHERE pedido_id = 27;

-- Calcular o valor do pedido e atualizar
SELECT sum(valor * quantidade) FROM itens_pedido WHERE pedido_id = 27;

UPDATE pedidos
    SET valor = (SELECT sum(valor * quantidade) FROM itens_pedido WHERE pedido_id = 27)
    WHERE pedido_id = 27;

SELECT * FROM pedidos WHERE pedido_id = 27;

-- Vamos criar uma PROCEDURE que calcule o valor total do pedido
DELIMITER $
CREATE PROCEDURE atulizaValorPedido(id int)
    BEGIN
        UPDATE pedidos
        SET valor = (SELECT sum(valor * quantidade) FROM itens_pedido WHERE pedido_id = id)
        WHERE pedido_id = id;
    END $
DELIMITER ;

-- Excluir e criar denovo a mesma PROCEDURE sem alterar os delimitadores
DROP PROCEDURE IF EXISTS atulizaValorPedido;
CREATE PROCEDURE atulizaValorPedido(id int)
UPDATE pedidos
    SET valor = (SELECT sum(valor * quantidade) FROM itens_pedido WHERE pedido_id = id)
    WHERE pedido_id = id;

-- Para testar
SELECT * FROM pedidos WHERE pedido_id = 27;
-- Alterar o valor para nulo
UPDATE pedidos SET valor = null WHERE pedido_id = 27;
SELECT * FROM pedidos WHERE pedido_id = 27;
-- Utilizar o Procedimento para alterar
CALL atulizaValorPedido(27);
SELECT * FROM pedidos WHERE pedido_id = 27;

-- Para ver quais procedimentos um Banco de dados possui armazenado.
SHOW PROCEDURE STATUS;
-- Missão 2: A Cliente Sara Luzia de Melo quer 2 pizzas Napolitanas
-- Registre este pedido:
SELECT * FROM clientes;
SELECT * FROM pizzas;
INSERT INTO pedidos VALUES (default, 91, CURDATE(), NOW(), null);
INSERT INTO itens_pedido VALUES (28,28, 2,(SELECT valor FROM pizzas WHERE pizza_id = 28));
SELECT * FROM pedidos WHERE pedido_id = 28;
CALL atulizaValorPedido(28);
SELECT * FROM pedidos WHERE pedido_id = 28;

-- Procedimento armazenado pedido de um item
DROP PROCEDURE IF EXISTS pedidoDeUmItem;
DELIMITER //
CREATE PROCEDURE pedidoDeUmItem(_cliente_id INT, _pizza_id INT, _qtd INT)
BEGIN
    DECLARE _pedido_id INT;
    INSERT INTO pedidos (cliente_id, data, hora, valor)
    VALUES (_cliente_id, CURDATE(), CURTIME(), NULL);
    SET _pedido_id = LAST_INSERT_ID();
    INSERT INTO itens_pedido (pedido_id, pizza_id, quantidade, valor)
    VALUES (_pedido_id, _pizza_id, _qtd, (SELECT valor FROM pizzas WHERE pizza_id = _pizza_id));
    UPDATE pedidos
    SET valor = (SELECT SUM(valor * quantidade) FROM itens_pedido WHERE pedido_id = _pedido_id)
    WHERE pedido_id = _pedido_id;
END //
DELIMITER ;
SHOW PROCEDURE STATUS;

-- Inserindo pedidos de um item testando a procedure
CALL pedidoDeUmItem(96,41,2);
