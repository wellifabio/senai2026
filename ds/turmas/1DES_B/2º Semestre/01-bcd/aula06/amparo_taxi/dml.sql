USE amparo_taxi;
INSERT INTO 
    motorista(nome, cpf, cnh, celular, email, status)
VALUES
("Passos Dias Aguiar","127.330.356-30", "123456789", "19 99999-9990", "passos@email.com", "ATIVO"),
("Juliana Aguiar","979.957.353-08", "987654321","19 99999-9991","juliana@email.com", "ATIVO"),
("Ernesto Lakombi","334.595.611-06", "123123123","19 99999-9992","ernesto@email.com", "INATIVO");

INSERT INTO
    veiculo(placa, modelo, marca, ano, cor, motorista_id)
VALUES
    ("AAA1A11","Yaris","Toyota",2025,"Branco",1),
    ("BBB1B11","Ecort","Ford",2010,"Branco",2),
    ("CCC1C11","Fiesta","Ford",2012,"Prata",3);

INSERT INTO
    passageiro
VALUES
(null,"Luciana do Passeio","333.116.387-27", "19 99999-0000","luciana@email.com","Só motorista mulher","ATIVO"),
(null,"Viajando Henrique Cardoso","443.281.824-71", "19 99999-1111","viajando@email.com",null,"ATIVO"),
(null,"Luis Messias","598.979.702-82", "19 99999-2222","luis@email.com",null,"INATIVO"),
(null,"Flavio Marçal","470.510.453-69", "19 99999-3333","flavio@email.com",null,"ATIVO");

INSERT INTO viagem
VALUES
(null, 1, "AAA1A11",8.49,"@-22.7142963,-46.8078886",CURTIME(),"@-22.7335338,-46.8713871",DATE_ADD(CURTIME(), INTERVAL 10 MINUTE),5,5),
(null, 2, "AAA1A11",10.49,"@-22.7335338,-46.8713871",CURTIME(),"@-22.7079362,-46.9719265",DATE_ADD(CURTIME(), INTERVAL 8 MINUTE),4,5),
(null, 4, "AAA1A11",7.29,"@-22.7079362,-46.9719265",CURTIME(),"@-22.6826759,-47.0010771",DATE_ADD(CURTIME(), INTERVAL 5 MINUTE),5,3),
(null, 1, "BBB1B11",15.49,"@-22.7335338,-46.8713871",CURTIME(),"@-22.7079362,-46.9719265",DATE_ADD(CURTIME(), INTERVAL 16 MINUTE),5,5),
(null, 2, "BBB1B11",9.49,"@-22.6826759,-47.0010771",CURTIME(),"@-22.7142963,-46.8078886",DATE_ADD(CURTIME(), INTERVAL 11 MINUTE),2,2),
(null, 4, "BBB1B11",18.29,"@-22.7079362,-46.9719265",CURTIME(),"@-22.7335338,-46.8713871",DATE_ADD(CURTIME(), INTERVAL 14 MINUTE),5,3);


