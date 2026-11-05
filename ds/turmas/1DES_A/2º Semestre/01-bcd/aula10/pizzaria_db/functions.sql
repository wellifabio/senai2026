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