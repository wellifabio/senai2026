-- A. Quantas tabelas o banco de dados possui?
USE pizzaria;
SHOW tables;
-- B. Quantos Clientes cadastrados?
SELECT * FROM clientes;
-- ou
SELECT COUNT(*) FROM clientes;
-- ou melhor
SELECT COUNT(*) as `total de clientes` FROM clientes;
-- C. Quantas pizzas Cadastradas?
SELECT * FROM pizzas;
-- ou
SELECT COUNT(*) FROM pizzas;
-- ou melhor
SELECT COUNT(*) as `total de pizzas` FROM pizzas;
-- D. Quantas pizzas o pedido nº 3 possui?
SELECT * FROM pizzas;
SELECT * FROM pedidos;
SELECT * FROM itens_pedido;
SELECT * FROM itens_pedido WHERE pedido_id = 3;
SELECT count(quantidade) FROM itens_pedido WHERE pedido_id = 3;
SELECT count(quantidade) as `total de sabores` FROM itens_pedido WHERE pedido_id = 3;
SELECT sum(quantidade) FROM itens_pedido WHERE pedido_id = 3;
SELECT sum(quantidade) as `total de pizzas` FROM itens_pedido WHERE pedido_id = 3;
-- E. Qual nome do cliente que fez o pedido nº 3?
DESCRIBE pedidos;
DESCRIBE clientes;
SELECT * FROM pedidos WHERE pedido_id = 3;
SELECT * FROM clientes WHERE cliente_id = 2;
-- JOIN juntando as tabelas e mostrando o nome do cliente
SELECT c.nome as cliente, p.pedido_id FROM pedidos p INNER JOIN clientes c
ON c.cliente_id = p.cliente_id
WHERE p.pedido_id = 3;
-- F. Quais os nomes das pizzas do pedido nº 3?
SELECT * FROM itens_pedido WHERE pedido_id = 3;
SELECT pizza_id FROM itens_pedido WHERE pedido_id = 3;
SELECT * FROM pizzas WHERE pizza_id IN (7,5,8,9,3,10,16);
-- Com SubConsulta
SELECT * FROM pizzas WHERE pizza_id
    IN (SELECT pizza_id FROM itens_pedido WHERE pedido_id = 3);
SELECT nome FROM pizzas WHERE pizza_id
    IN (SELECT pizza_id FROM itens_pedido WHERE pedido_id = 3);
-- Com INNER JOIN
SELECT p.nome FROM itens_pedido i INNER JOIN pizzas p
ON i.pizza_id = p.pizza_id
WHERE i.pedido_id = 3;
-- Com INNER JOIN e mostrando todos o ítens do pedido
SELECT i.*, p.nome FROM itens_pedido i INNER JOIN pizzas p
ON i.pizza_id = p.pizza_id
WHERE i.pedido_id = 3;