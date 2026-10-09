drop database if exists registros_climaticos;
create database registros_climaticos;
use registros_climaticos;
-- DDL Criação das tabelas
create table usuario (
    id int not null auto_increment primary key,
    nome varchar(100) not null,
    email varchar(100) not null unique,
    senha varchar(100) not null
);
create table evento (
    id int not null auto_increment primary key,
    usuarioId int not null,
    cidade varchar(100) not null,
    tipoEvento varchar(100) not null,
    temperaturaMaxima decimal(10,2) not null,
    data Date default(curdate()) not null,
    nivelImpacto enum('Baixo', 'Médio', 'Alto') default('Médio') not null
);
alter table evento add constraint fk_registra
foreign key (usuarioId) references usuario(id);

-- DML para inserir dados de exemplo nas tabelas
insert into usuario (nome, email, senha) values
('Maria Oliveira', 'maria.oliveira@email.com', password('senha123')),
('Joao Silva', 'joao.silva@email.com', password('senha123')),
('Ana Souza', 'ana.souza@email.com', password('senha123'));

insert into evento (usuarioId, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto) values
(1, 'Campinas', 'Onda de calor', 38.7, '2026-09-23', 'Alto'),
(2, 'Sao Paulo', 'Chuva intensa', 25.3, '2026-09-24', 'Médio'),
(1, 'Rio de Janeiro', 'Tempestade', 30.1, '2026-09-25', 'Alto'),
(2, 'Belo Horizonte', 'Seca prolongada', 35.0, '2026-09-26', 'Alto'),
(3, 'Porto Alegre', 'Nevasca', -2.5, '2026-09-27', 'Médio');

select * from usuario;
select * from evento;
