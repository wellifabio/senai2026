USE amparo_taxi;
INSERT INTO 
    motorista(nome, cpf, cnh, email, status)
VALUES
("Passos Dias Aguiar","127.330.356-30", "123456789", "19 99999-99990", "passos@email.com", "ATIVO"),
("Juliana Aguiar","979.957.353-08", "987654321","19 99999-99991","juliana@email.com", "ATIVO"),
("Ernesto Lakombi","334.595.611-06", "123123123","19 99999-99992","ernesto@email.com", "INATIVO");

INSERT INTO
    veiculo(placa, modelo, marca, ano, cor, motorista_id)
VALUES
    ("AAA1A11","Yaris","Toyota",2025,"Branco",1),
    ("BBB1B11","Ecort","Ford",2010,"Branco",2),
    ("CCC1C11","Fiesta","Ford",2012,"Prata",3);