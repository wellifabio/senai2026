
## Subconsultas e alias (apelido)
- Juntar cliente com telefone
```sql
select *, (
    select t.numero from telefone t
    where t.id_cliente = c.id limit 1)
from cliente c;

select c.nome, c.cep, (
    select t.numero from telefone t
    where t.id_cliente = c.id limit 1)
from cliente c;
```

## JOIN (Juntar)
- Vamos juntar cliente com telefone
```sql
select * from cliente join telefone;
```
- O comando acima seria um full join, todas as combinações possíveis
- left join, rigth join ou inner join
```sql
select * from cliente inner join telefone;
select * from cliente left join telefone on cliente.id = telefone.id_cliente;
select * from cliente c left join telefone t on c.id = t.id_cliente;
select * from cliente c right join telefone t on c.id = t.id_cliente;
select * from cliente c inner join telefone t on c.id = t.id_cliente;
```

## Atividades 01
- 1 Junte os pedidos com seus respectivos produtos
- 2 Junte os clientes com seus respectivos pedidos
- 3 Mostre somente os pedidos junto com o cliente número 1
- 4 Mostre somente os ultimos 2 pedidos e seus respectivos produtos

## Atividades 02
- Execute este **[script](https://github.com/wellifabio/sesi_bcd_aula03_mer_der_dd_dados_2026/blob/main/ddldml.sql)** que vai recriar o banco de dados de pedidos com mais dados nas tabelas
- Crie um arquivo chamado `dql.sql` e nele coloque todas as queries criadas para solucionar as solicitações a seguir.
#### 1 Listando produtos
- Liste todos os produtos cadastrados, mostrando apenas o id e o nome.
- Ordene os produtos pelo nome em ordem alfabética.
#### 2 Produtos mais recentes
- Mostre os 5 últimos produtos cadastrados, considerando o maior id como o mais recente.

#### 3 Maiores pedidos
- Liste os pedidos mostrando id, quantidade e valor_unitario,
- ordenando pelos pedidos de maior valor unitário para o menor.

#### 4 Primeiros pedidos
- Mostre somente os 10 últimos pedidos cadastrados.

#### 5 Pedidos com nomes dos clientes
- Liste todos os pedidos mostrando:
    - ID do pedido
    - Nome do cliente
    - Quantidade
    - Valor unitário
- Use JOIN entre as tabelas pedido e cliente.

#### 6 Pedidos com nome do produto
- Liste os pedidos mostrando:
    - ID do pedido
    - Nome do produto
    - Quantidade
    - Valor unitário

- Relacione pedido e produto.

#### 7 Pedidos completos
- Mostre uma lista contendo:
    - ID do pedido
    - Nome do cliente
    - Nome do produto
    - Quantidade
    - Valor unitário
    - Subtotal
- Utilize as três tabelas: pedido, cliente e produto.

#### 8 Os 5 pedidos de maior valor
- Mostre os 5 pedidos com maior subtotal, exibindo o nome do cliente, o produto e o subtotal.
- Comandos principais: JOIN, ORDER BY, LIMIT

#### 9 Quantidade de clientes
- Crie uma query que descubra quantos clientes estão cadastrados na tabela cliente.
- Comando principal: COUNT

#### 10 Quantidade de produtos
- Crie uma query que descubra quantos produtos existem cadastrados.
- Comando principal: COUNT

#### 11 Quantidade de pedidos por cliente
- Mostre o nome de cada cliente e a quantidade de pedidos realizados por ele.
- Comandos principais: JOIN, COUNT, GROUP BY

#### 12 Quantidade de pedidos por produto
- Mostre o nome de cada produto e quantas vezes ele aparece nos pedidos.
- Comandos principais: JOIN, COUNT, GROUP BY, ORDER BY

#### 13 Valor total dos pedidos
- Calcule o valor total de todos os pedidos utilizando o campo subtotal.
- Comando principal: SUM

#### 14 Quantidade média por pedido
- Calcule a quantidade média de produtos por pedido.
- Comando principal: AVG

#### 15 Total vendido por produto
- Mostre o nome de cada produto e o valor total vendido de cada um, somando os subtotais dos pedidos.
- Ordene do produto que teve maior valor vendido para o menor.
- Comandos principais: JOIN, SUM, GROUP BY, ORDER BY

