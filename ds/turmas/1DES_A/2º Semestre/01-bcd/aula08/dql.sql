-- -----------------------------------------------------------------------------------------------------------------------------------
-- Atividade 01
-- -----------------------------------------------------------------------------------------------------------------------------------
USE gestao_pedidos;
-- 1 Junte os pedidos com seus respectivos produtos
SELECT * FROM pedido p INNER JOIN produto pr ON p.id_produto = pr.id;
-- 2 Junte os clientes com seus respectivos pedidos
SELECT * FROM cliente c INNER JOIN pedido p ON c.id = p.id_cliente;
-- 3 Mostre somente os pedidos junto com o cliente número 1
SELECT * FROM cliente c INNER JOIN pedido p ON c.id = p.id_cliente WHERE p.id_cliente = 1;
-- 4 Mostre somente os ultimos 2 pedidos e seus respectivos produtos
SELECT * FROM pedido p INNER JOIN produto pr ON p.id_produto = pr.id ORDER BY p.id DESC LIMIT 2;
-- -----------------------------------------------------------------------------------------------------------------------------------


USE gestao_pedidos;
-- -----------------------------------------------------------------------------------------------------------------------------------
-- Atividade 02
-- -----------------------------------------------------------------------------------------------------------------------------------
-- 1 Listando produtos
-- Liste todos os produtos cadastrados, mostrando apenas o id e o nome.
-- Ordene os produtos pelo nome em ordem alfabética.
SELECT id, nome FROM produto ORDER BY nome;
-- 2 Produtos mais recentes
-- Mostre os 5 últimos produtos cadastrados, considerando o maior id como o mais recente.
SELECT * FROM produto ORDER BY id DESC LIMIT 5;
-- 3 Maiores pedidos
-- Liste os pedidos mostrando id, quantidade e valor_unitario, ordenando pelos pedidos de maior valor unitário para o menor.
SELECT id, quantidade, valor_unitario FROM pedido ORDER BY valor_unitario DESC;
-- 4 Primeiros pedidos
-- Mostre somente os 10 últimos pedidos cadastrados.
SELECT * FROM pedido ORDER BY id DESC LIMIT 10;
-- 5 Pedidos com nomes dos clientes
-- Liste todos os pedidos mostrando:
-- ID do pedido
-- Nome do cliente
-- Quantidade
-- Valor unitário
-- Use JOIN entre as tabelas pedido e cliente.
SELECT p.id, c.nome, p.quantidade, p.valor_unitario FROM pedido p JOIN cliente c ON p.id_cliente = c.id;
-- 6 Pedidos com nome do produto
-- Liste os pedidos mostrando:
-- ID do pedido
-- Nome do produto
-- Quantidade
-- Valor unitário
-- Relacione pedido e produto.
SELECT p.id, pr.nome, p.quantidade, p.valor_unitario FROM pedido p JOIN produto pr ON p.id_produto = pr.id;
-- 7 Pedidos completos
-- Mostre uma lista contendo:
-- ID do pedido
-- Nome do cliente
-- Nome do produto
-- Quantidade
-- Valor unitário
-- Subtotal
-- Utilize as três tabelas: pedido, cliente e produto.
SELECT p.id, c.nome, pr.nome, p.quantidade, p.valor_unitario, p.subtotal FROM pedido p JOIN cliente c ON p.id_cliente = c.id JOIN produto pr ON p.id_produto = pr.id;
-- 8 Os 5 pedidos de maior valor
-- Mostre os 5 pedidos com maior subtotal, exibindo o nome do cliente, o produto e o subtotal.
-- Comandos principais: JOIN, ORDER BY, LIMIT
SELECT p.id, c.nome, pr.nome, p.subtotal FROM pedido p JOIN cliente c ON p.id_cliente = c.id JOIN produto pr ON p.id_produto = pr.id ORDER BY p.subtotal DESC LIMIT 5;
-- 9 Quantidade de clientes
-- Crie uma query que descubra quantos clientes estão cadastrados na tabela cliente.
-- Comando principal: COUNT
SELECT COUNT(id) FROM cliente;
-- 10 Quantidade de produtos
-- Crie uma query que descubra quantos produtos existem cadastrados.
-- Comando principal: COUNT
SELECT COUNT(id) FROM produto;
-- 11 Quantidade de pedidos por cliente
-- Mostre o nome de cada cliente e a quantidade de pedidos realizados por ele.
-- Comandos principais: JOIN, COUNT, GROUP BY
SELECT c.nome, COUNT(p.id) as pedidos FROM pedido p JOIN cliente c ON p.id_cliente = c.id GROUP BY c.id;
-- 12 Quantidade de pedidos por produto
-- Mostre o nome de cada produto e quantas vezes ele aparece nos pedidos.
-- Comandos principais: JOIN, COUNT, GROUP BY, ORDER BY
SELECT pr.nome, COUNT(p.id) as pedidos FROM pedido p JOIN produto pr ON p.id_produto = pr.id GROUP BY pr.id ORDER BY pr.nome;
-- 13 Valor total dos pedidos
-- Calcule o valor total de todos os pedidos utilizando o campo subtotal.
-- Comando principal: SUM
SELECT SUM(subtotal) as valor_total FROM pedido;
-- 14 Quantidade média por pedido
-- Calcule a quantidade média de produtos por pedido.
-- Comando principal: AVG
SELECT AVG(quantidade) as quantidade_media FROM pedido;
-- 15 Total vendido por produto
-- Mostre o nome de cada produto e o valor total vendido de cada um, somando os subtotais dos pedidos.
-- Ordene do produto que teve maior valor vendido para o menor.
-- Comandos principais: JOIN, SUM, GROUP BY, ORDER BY
SELECT pr.nome, SUM(p.subtotal) as total_vendido FROM pedido p JOIN produto pr ON p.id_produto = pr.id GROUP BY pr.id ORDER BY total_vendido DESC;
