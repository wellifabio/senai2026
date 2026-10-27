# Aula11 - TCL (transaction control language)
- É um conjunto de declarações SQL como uma única operação

# Propriedades (ACID)
- <b>Atomicidade</b> – cada transação é tratada como uma única unidade, que é totalmente bem-sucedida ou que falha completamente. Por exemplo, uma transação que envolve o débito de fundos de uma conta e o crédito do mesmo valor em outra conta deve concluir ambas as ações. Se uma das ações não puder ser concluída, a outra ação deverá falhar.
- <b>Consistência</b> – as transações só podem conduzir os dados do banco de dados de um estado válido para outro estado válido. Para continuar com o exemplo de débito e crédito acima, o estado concluído da transação deve refletir na transferência de fundos de uma conta para outra.
- <b>Isolamento</b> – as transações simultâneas não podem interferir entre si e devem resultar em um estado consistente do banco de dados. Por exemplo, enquanto a transação para transferir fundos de uma conta para outra está em processo, outra transação que verifica o saldo dessas contas deve retornar resultados consistentes – a transação de verificação de saldo não pode recuperar um valor para uma conta que reflita o saldo antes da transferência e um valor para a outra conta que reflita o saldo após a transferência.
- <b>Durabilidade</b> – quando uma transação tiver sido confirmada, ela permanecerá confirmada. Depois que a transação de transferência entre contas for concluída, os saldos de conta revisados serão persistidos para que, mesmo que o sistema do banco de dados seja desligado, a transação confirmada seja refletida quando ele for ligado novamente.

# Controle de Transações no SGBD
- START TRANSACTION (Iniciar uma transação)- <b>início</b>
- COMMIT (Usamos para salvar transações no banco de dados) - <b>fim</b>
- ROLLBACK (Usamos para desfazer alterações no banco de dados) - <b>fim</b>
- SAVEPOINT (Usamos para criar um ponto de restauração para, se necessário, utilizar o rollback no banco de dados)
- Vídeo aula sobre transações https://www.youtube.com/watch?v=jfvnHWVJz-E

```sql
-- Transações
-- Utilizaremos o banco de dados "pizzaria" estudado em aulas anteriores para esta demonstração
use pizzaria;
show tables;

-- MySQL por padrão a propriedade/metadado @@autocommit é definido como true/1
select @@autocommit;
set @@autocommit = off;
select @@autocommit;

-- Vamos criar uma nova tabela apenas para teste
create table dados_clientes
select cliente_id, nome, logradouro
from clientes;

-- Visualizar o conteúdo da nova tabela
select * from dados_clientes;
describe dados_clientes;

-- Configurar o cliente_id como chave primária (alter table {add, drop ou modify})
alter table dados_clientes modify cliente_id integer not null primary key auto_increment;

-- Conferir se a alteração se efetivou
describe dados_clientes;

-- Exemplo de Transação com rollback
start transaction;
	delete from dados_clientes;
	insert into dados_clientes values
		(101,"Joaquin da silva","Rua doa Alecrins"),
		(102,"Susana Aguiar","Praça Machado de Assis");
	select * from dados_clientes;
rollback;
-- Ver se realmente as altereções não foram efetivamente aplicadas
select * from dados_clientes;

-- Exemplo de Transação com Commit
start transaction;
	delete from dados_clientes;
	insert into dados_clientes values
		(101,"Joaquin da silva","Rua doa Alecrins"),
		(102,"Susana Aguiar","Praça Machado de Assis");
	select * from dados_clientes;
commit;
-- Ver se realmente as altereções foram efetivamente aplicadas
select * from dados_clientes;

-- Exemplo de uma transação com commit ou rollback em um procedimento armazenado
drop procedure if exists insere_dados;
delimiter //
create procedure insere_dados()
	begin
	declare erro_sql tinyint default false;
	declare continue handler for sqlexception set erro_sql = true;
	start transaction;
		insert into dados_clientes values (103, "Mariana Oliveira", "Av. Getulio Vargas");
		insert into dados_clientes values (104, "Paola Gimenes", "Av. Getulio Vargas");
		insert into dados_clientes values (104, "Mariana Martins", "Av. Getulio Vargas");
		insert into dados_clientes values (105, "Paloma Vieira", "Av. Getulio Vargas");
		if erro_sql = false then
			commit;
			select 'Transação efetivada com sucesso' as Resultado;
		else
			rollback;
			select 'Erro na transação' as Resultado;
		end if;
end//
delimiter ;

-- Chamar o procedimento armazenado
call insere_dados();
-- Verificar se houve altarações;
select * from dados_clientes;

-- Corrigindo o erro no procedimento armazenado e executando novamente
drop procedure if exists insere_dados;
delimiter //
create procedure insere_dados()
	begin
	declare erro_sql tinyint default false;
	declare continue handler for sqlexception set erro_sql = true;
	start transaction;
		insert into dados_clientes values (103, "Mariana Oliveira", "Av. Getulio Vargas");
		insert into dados_clientes values (104, "Paola Gimenes", "Av. Getulio Vargas");
		insert into dados_clientes values (105, "Mariana Martins", "Av. Getulio Vargas");
		insert into dados_clientes values (106, "Paloma Vieira", "Av. Getulio Vargas");
		if erro_sql = false then
			commit;
			select 'Transação efetivada com sucesso' as Resultado;
		else
			rollback;
			select 'Erro na transação' as Resultado;
		end if;
end//
delimiter ;

-- Chamar o procedimento armazenado
call insere_dados();
-- Verificar se houve altarações;
select * from dados_clientes;
```

# Atividades (Transações)
- Ainda no banco de dados "pizzaria.sql"
	- Crie um procedimento armazenado que registre um pedido com três ítens conforme exemplo visto em aula (exemplo.sql linhas 76 a 95)
	- Crie a Procedure colocando um erro e sem erro para testar tanto o commit quanto o rollback.