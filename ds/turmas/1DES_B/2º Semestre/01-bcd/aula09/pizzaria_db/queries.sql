-- 1. Quantas tabelas o banco de dados possui?
USE pizzaria;
SHOW tables;
-- 2. Quantos Clientes cadastrados?
SELECT * FROM clientes;
-- ou
SELECT COUNT(*) FROM clientes;
-- ou melhor
SELECT COUNT(*) as `total de clientes` FROM clientes;
-- 3. Quantas pizzas Cadastradas?
SELECT * FROM pizzas;
-- ou
SELECT COUNT(*) FROM pizzas;
-- ou melhor
SELECT COUNT(*) as `total de pizzas` FROM pizzas;
-- 4. Quantas pizzas o pedido nº 3 possui
SELECT * FROM pizzas;
SELECT * FROM pedidos;
SELECT * FROM itens_pedido;
SELECT * FROM itens_pedido WHERE pedido_id = 3;
SELECT count(quantidade) FROM itens_pedido WHERE pedido_id = 3;
SELECT sum(quantidade) FROM itens_pedido WHERE pedido_id = 3;