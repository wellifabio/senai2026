DROP DATABASE IF EXISTS amparo_taxi;
CREATE DATABASE amparo_taxi;
USE amparo_taxi;

CREATE TABLE motorista(
    id int not null primary key auto_increment,
    nome varchar(100) not null,
    cpf varchar(15) not null unique,
    cnh varchar(20) not null unique,
    celular varchar(15) not null unique,
    email varchar(100) not null unique,
    obs text,
    status enum('ATIVO','INATIVO')
);

CREATE TABLE veiculo(
    placa varchar(10) not null primary key,
    modelo varchar(20) not null,
    marca varchar(20) not null,
    cor varchar(20) not null,
    ano int not null,
    motorista_id int not null
);

CREATE TABLE passageiro(
    id int not null primary key auto_increment,
    nome varchar(100) not null,
    cpf varchar(15) not null unique,
    celular varchar(15) not null unique,
    email varchar(100) not null unique,
    obs text,
    status enum('ATIVO','BANIDO')
);

CREATE TABLE viagem(
    id int not null primary key auto_increment,
    passageiro_id int not null,
    placa varchar(10) not null,
    valor decimal(10,2) not null,
    origem varchar(50) not null,
    hora_partida datetime not null default(curtime()),
    destino varchar(50) not null,
    hora_chegada datetime,
    avaliacao_motorista int,
    avaliacao_passageiro int
);

ALTER TABLE veiculo ADD constraint fk_dirige foreign key (motorista_id) references motorista(id);
ALTER TABLE viagem ADD constraint fk_utiliza foreign key (placa) references veiculo(placa);
ALTER TABLE viagem ADD constraint fk_viaja foreign key (passageiro_id) references passageiro(id);

SHOW TABLES;
DESCRIBE motorista;
DESCRIBE veiculo;
DESCRIBE passageiro;
DESCRIBE viagem;