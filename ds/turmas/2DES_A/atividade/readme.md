# Atividade
## Situação de aprendizagem desafiadora

## Objetivo

O objetivo desta aula é desenvolver um sistema web full-stack para gerenciamento de **quartos** e **reservas** de um hotel.

---

## Contextualização

O controle eficiente dos quartos e das reservas é fundamental para o funcionamento de hotéis, pousadas e hospedagens em geral. Muitas empresas ainda utilizam planilhas ou registros manuais para controlar informações dos hóspedes e dos quartos, o que dificulta a organização e a consulta dos dados.

Para solucionar esse problema, será desenvolvido um sistema web capaz de cadastrar quartos, visualizar informações dos quartos cadastrados, registrar reservas e consultar os dados armazenados em banco de dados.

---

## Desafio

Você foi desafiado a desenvolver um sistema web ou desktop que permita ao usuário:

- Cadastrar quartos;
- Visualizar quartos cadastrados;
- Excluir quartos;
- Visualizar reservas associadas aos quartos;
- Cadastrar reservas;
- Excluir reservas.

O sistema deverá possuir integração entre front-end, back-end e banco de dados.

---

## 1. Back-end com a criação e conexão com o banco de dados

Você deverá desenvolver o back-end contendo a criação e conexão com o banco de dados **hotel_db**.

O banco deverá possuir tabelas relacionadas aos quartos e reservas do hotel.

Para teste deverão ser cadastrados pelo menos **três registros** em cada tabela criada.

O script SQL ou exportação das requisições do Insomnia deverá ser salvo na pasta **./docs**.

---

## 2. Tela principal do sistema

Você deverá desenvolver uma tela principal contendo:

- Nome do sistema;
- Botão para cadastrar um novo quarto;
- Listagem dos quartos cadastrados;
- Botão para visualizar reservas;
- Botão para excluir quarto.


---

## 3. Cadastro de quarto

Você deverá desenvolver uma tela contendo:

- Campo para informar o número do quarto;
- Campo para informar o tipo do quarto;
- Botão "Cadastrar".

Os dados deverão ser armazenados no banco de dados através da API desenvolvida.


---

## 4. Listagem de quartos

Na tela principal deverão ser exibidos os quartos cadastrados no banco de dados contendo:

- Número do quarto;
- Tipo do quarto;
- Botão para visualizar reservas;
- Botão para excluir.

---

## 5. Exclusão de quarto

Na listagem de quartos deverá existir um botão de exclusão.

Ao clicar, uma confirmação deverá ser apresentada ao usuário.



---

## 6. Tela de reservas do quarto

Ao selecionar um quarto, deverá ser apresentada uma tela contendo:

- Número do quarto;
- Tipo do quarto;
- Botão para cadastrar reserva;
- Listagem de reservas associadas ao quarto.


---

## 7. Listagem de reservas

A listagem deverá apresentar:

- Código da reserva;
- Nome do hóspede;
- Data de entrada;
- Data de saída;
- Botão para excluir reserva.

Os dados deverão ser carregados diretamente do banco de dados através da API.

---

## 8. Cadastro de reserva

Você deverá criar uma tela contendo:

- Nome do hóspede;
- Data de entrada;
- Data de saída;
- Botão "Cadastrar Reserva".

A reserva deverá ser associada ao quarto selecionado.



---

## 9. Exclusão de reserva

Na listagem de reservas deverá existir um botão para exclusão.

Ao clicar, deverá ser exibida uma confirmação para o usuário.


---

## 10. Lista de requisitos de infraestrutura (README)

Você deverá documentar:

- IDE utilizada;
- SGBD e versão;
- Servidor de aplicação e versão;
- Linguagens utilizadas;
- Prints das telas;
- Passo a passo de execução do projeto.

---

# Modelo de Banco de Dados

## Tabela: quartos

| Campo | Tipo |
|---------|---------|
| id | INT |
| numero | VARCHAR(10) |
| tipo | VARCHAR(50) |

## Tabela: reservas

| Campo | Tipo |
|---------|---------|
| id | INT |
| hospede | VARCHAR(100) |
| data_entrada | DATE |
| data_saida | DATE |
| quarto_id | INT |

---

# Relacionamento

- Um quarto pode possuir várias reservas..
- Uma reserva pertence a apenas um quarto.

---

# Protótipo da Interface

A imagem abaixo apresenta uma proposta visual para o sistema e pode ser utilizada como referência para o desenvolvimento das telas.

<div align = "center">
<img src = "telas.png">
</div>

---

# Entregas

Você deverá efetuar as entregas no seguinte formato:

- Um repositório público no GitHub chamado **hotelreservas**, contendo:
  - Pasta **./api** com os arquivos do back-end;
  - Pasta **./web** com os arquivos do front-end;
  - Pasta **./docs** contendo o banco de dados ou exportação das requisições;
  - Pasta **./wireframes** contendo as imagens utilizadas como referência;
  - Arquivo **README.md** com a documentação do projeto.

---

## Avaliação

| Nº | Nome da entrega | Pontos | Pontos obtidos |
|----|-----------------|:------:|:--------------:|
| 1 | Back-end com conexão com banco de dados | 25 | |
| 2 | Tela principal do sistema | 10 | |
| 3 | Cadastro de quarto | 10 | |
| 4 | Listagem de quartos | 10 | |
| 5 | Exclusão de quarto | 10 | |
| 6 | Tela de reservas do quarto | 10 | |
| 7 | Listagem de reservas | 10 | |
| 8 | Cadastro de reserva | 10 | |
| 9 | Exclusão de reserva | 5 | |
| 10 | Lista de requisitos de infraestrutura | 10 | |
| **Total** | | **100** | **0** |
