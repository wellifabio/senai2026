# Aula10 - Programação
- FUNCTIONS
- PROCEDURE
- TRIGGER

## Capacidades Técnicas
- 11 Utilizar funções nativas do banco de dados
- 12 Aplicar programação em banco de dados utilizando functions, stored procedures, triggers e eventos
- 13  Executar importação e exportação da base de dados

## Conhecimentos
- 2.4  DDL (Data Definition Language)
- 2.6  DML (Data Manipulation Language)
- 2.15 STORED PROCEDURE
- 2.16 FUNCTION
- 2.17 TRIGGERS

## Functions (Funções)
- Funções servem para:
	- Fazer cálculos
	- Formatar valores
	- Entre outras soluções de programação em banco de dados
### Praticando
Instale o banco de dados **Pizzaria** que trabalhamos na aula anterior via **Shell** (mysql -u root) ou **PhpMyAdmin** ou **Workbanch**
- Abra o repositório localmente com o **VsCode** e crie mais um arquivo chamado `functions.sql` e vamos estudar o script a seguir:
```sql
-- Criando Funções (Exemplo de uma função que formata valores como moeda)
-- Vamos utilizar o banco de dados Pizzaria da aula anterior
use pizzaria;
-- Versão 1
drop function if exists moeda;

create function moeda(v float) returns text
return concat("R$ ",v);
-- testando
select moeda(4.9);
-- Versão 2
drop function if exists moeda;
delimiter //
create function moeda(v float) returns text
Begin
    return concat("R$ ",v);
end//
delimiter ;
-- testando
select moeda(5.99);
-- Para excluir uma função
drop function if exists moeda;
-- Criar a função novamente modificada com declaração de variáveis
delimiter //
create function moeda(v float) returns text
begin
    declare x varchar(20);
    set x = format(v,2,'de_DE');
    return concat("R$ ",x);
end//
delimiter ;
-- testando em uma consulta da tabela de pizzas
select pizza_id, nome, moeda(valor) as 'preço' from pizzas;
```
## Procedimentos armazenados (Demonstração)
Instale o banco de dados **Pizzaria** que trabalhamos na aula anterior via **Shell** (mysql -u root) ou **PhpMyAdmin** ou **Workbanch**
- Abra o repositório localmente com o **VsCode** e crie mais um arquivo chamado `procedures.sql` e vamos estudar o script a seguir:
```sql
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
```

## Trigger / Gatilhos
Semelhantes a funções ou precedimentos
- É um procedimento que é executado sempre antes ou depois de uma alteração no banco de dados INSERT, UPDATE ou DELETE.

### Desafio
Crie um Procedimento Armazenado que receba três parâmetros (cliente_id, pizza_id e quantidade) e registre um pedido de um item calculando o total ex: pedidoDeUmItem(cli_id int, piz_id int, qtd int)
- Cadastre os seguintes pedidos para testar:
    - "Thamires de Campos Luz" quer uma pizza "Vienense"
    - "Everton Jose de Souza" que duas "Toscana"
    - "Silvia Roberta de Jesus Garcia" que uma "Canadense" e 2 "Cubanas"