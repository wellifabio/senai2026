
```sql
insert into cliente (nome, cep, numero, complemento) values
('Timóteo Matos','13905-714','27','Ap44 bl01'),
('Xeila Teixeira de Souza','13907-100',null,'Fundos'),
('Raul Bispo Filho','13907-100','100',null),
('Hugo Souza','13904-906','9090','Fundos'),
('Brito Bispo Martim','13904-906','1313',null),
('Hugo Silva Alves','13904-452','1010',null),
('Valter Martins','13904-071','1245',null),
('Antônio Martins','13905-520','2345',null),
('Zélia Júnior','13901-329','13',null),
('Evandro Martins de Oliveira','13905-682','17','BL12 AP44');
SELECT * FROM cliente;
```
```sql
insert into Telefone (id_cliente, tipo, numero) values
(4, "celular", "19-90952-7709"),
(4, "residencial", "19-86960-6613"),
(5, "celular", "19-59052-5910"),
(5, "residencial", "19-70278-3889"),
(6, "celular", "19-95184-7473"),
(7, "celular", "19-18092-0669"),
(8, "celular", "19-19025-8194"),
(9, "celular", "19-54195-3946"),
(9, "residencial", "19-09467-9337"),
(10, "celular", "19-85553-5217"),
(11, "celular", "19-76827-0808"),
(12, "celular", "19-03094-9372"),
(12, "residencial", "19-87797-0571"),
(12, "comercial", "19-06019-6601"),
(13, "celular", "19-53922-8414");
select * from telefone;
```

## Queries
- 1 Mostrar apenas os primeiros 10 clientes // **limit**;
```sql
SELECT * FROM cliente LIMIT 10;
```
- 2 Organizar por // **order by** com ou sen **desc**
```sql
SELECT * FROM cliente ORDER BY id;
SELECT * FROM cliente ORDER BY id desc;
SELECT * FROM cliente ORDER BY nome;
SELECT * FROM cliente ORDER BY nome desc;
```
- 3 Mostrar somente os ultimos 10 clientes;
```sql
select * from cliente order by id desc limit 10;
```
- 4 Mostrar somente as colunas nome e cep de todos os clientes;
```sql
select nome, cep from cliente;
```
- 5 Mostrar somente as colunas nome e cep dos clientes que tenham "Silva" no sobrenome // **where** permite **or** (ou), **and** (e)
```sql
select nome, cep from cliente where id = 1;
select nome, cep from cliente where id = 1 or id = 9;
select nome, cep from cliente where nome = "Ana Maria Silva";
select nome, cep from cliente where nome = "ana maria silva";
select nome, cep from cliente where nome = "ana maria silva" or nome = "hugo silva alves";
-- termina com silva
select nome, cep from cliente where nome like "%silva";
-- inicia com silva
select nome, cep from cliente where nome like "silva%";
-- possui silva em qualquer lugar
select nome, cep from cliente where nome like "%silva%";
```
- 6 Todos os clientes que não possuem "silva" no nome // **not**
```sql
select * from cliente where nome not like "%silva%";
```

## Funções nativas
- curdate(), curtime(), now()
```sql
select curdate();
select curtime();
select now();
```
### formulas
- Operadores aritméticos e lógicos
```sql
select 10 + 10;
select 10 + 10 as soma;
select 10 * 10 as "multiplicação";
select 10 - 10 as "subtração";
select 10 / 10 as "divisão";
select 10 > 10 as Booleano;
select 10 > 9 as Booleano;
```
### Outras funções
- datediff() diferença de datas em dias
```sql
select datediff("2026-10-06","2026-10-03");
select datediff(now(),"1980-09-08");
select truncate(datediff(now(),"1980-09-08") / 365, 0);
select floor(datediff(now(),"1980-09-08") / 365);
select round(datediff(now(),"1980-09-08") / 365,1);
```
- date_add() date_sub
```sql
select date_add(now(),interval 10 day);
select date_add(now(),interval 72 hour);
select date_sub(now(),interval 10 day);
select date_sub(now(),interval 72 hour);
```
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

