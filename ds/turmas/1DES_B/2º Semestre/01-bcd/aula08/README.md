# Aula08 - QUERY
- Consultas
- DQL (Data Query Language)
## Banco de dados de [Pedidos](https://github.com/wellifabio/sesi_bcd_aula03_mer_der_dd_dados_2026.git)
- Ative o XAMPP (Se estiver utilizando)
- Acesse o MySQL Workbecnk
- Execute os scripts DDL e DML do Banco de dados de Pedidos do repositório

## Para testar as queries
- 1 Acrescente mais 10 clientes no banco de dados, estão listados abaixo:

|Nome|CEP|Número|Complemento|Telefones|
|-|-|-|-|-|
|Timóteo Matos|13905-714|27|Ap44 BL01|"celular", "19-90952-7709, "residencial", "19-86960-6613|
|Xeila Teixeira de Souza|13907-100||Fundos|"celular", "19-59052-5910, "residencial", "19-70278-3889|
|Raul Bispo Filho|13907-100|100||"celular", "19-95184-7473|
|Hugo Souza|13904-906|9090|Fundos|"celular", "19-18092-0669|
|Brito Bispo Martim|13904-906|1313|BL19 AP44|"celular", "19-19025-8194
|Hugo Silva Alves|13904-452|1010|BL10 AP14|"celular", "19-54195-3946, "residencial", "19-09467-9337|
|Valter Martins|13904-071|1245||"celular", "19-85553-5217|
|Antônio Martins|13905-520|2345||"celular", "19-76827-0808|
|Zélia Júnior|13901-329|13||"celular", "19-03094-9372, "residencial", "19-87797-0571, "comercial", "19-06019-6601|
|Evandro Martins de Oliveira|13905-682|17|BL12 AP44|"celular", "19-53922-8414|



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
- 1 Mostrar apenas os primeiros 10 clientes;
```sql
SELECT * FROM cliente LIMIT 10;
```
- 2 Organizar por
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
- 4 Mostrar somente as colunas nome e cep dos clientes que tenham "Silva" no sobrenome
```sql
select nome, cep from cliente where id = 1;
select nome, cep from cliente where id = 1 or id = 9;
select nome, cep from cliente where nome = "Ana Maria Silva";
select nome, cep from cliente where nome = "ana maria silva";
select nome, cep from cliente where nome = "ana maria silva" or nome = "hugo silva alves";
select nome, cep from cliente where nome like "%silva%";
```



