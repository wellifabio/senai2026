-- A Quantas tabelas o banco de dados possui?
show tables;
-- B Quantos Clientes cadastrados?
select * from clientes;
select count(*) from clientes;
select count(*) as `total de clientes` from clientes;
 -- C Quantas pizzas Cadastradas?
select count(*) as `total de pizzas` from pizzas;
-- D Quantas pizzas o pedido nº 3 possui?
select * from pedidos;
select * from itens_pedido;
select * from itens_pedido where pedido_id = 3;
select sum(quantidade) from itens_pedido where pedido_id = 3;
select sum(quantidade) as `total de pizzas` from itens_pedido where pedido_id = 3;
-- E Qual nome do cliente que fez o pedido nº 3?
select * from pedidos;
select * from clientes;
select c.nome from pedidos p join clientes c on c.cliente_id = p.cliente_id where p.pedido_id = 3;
-- F Quais os nomes das pizzas do pedido nº 3?
select * from itens_pedido where pedido_id = 3;
select p.nome from itens_pedido i join pizzas p on i.pizza_id = p.pizza_id where pedido_id = 3;