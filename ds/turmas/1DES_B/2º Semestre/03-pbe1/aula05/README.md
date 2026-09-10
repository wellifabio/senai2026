# Aula 05
## Situação Desafiadora
## Contextualização

Uma empresa precisa desenvolver uma pequena aplicação para auxiliar no controle de seu inventário de patrimônio. Atualmente, os registros dos itens são mantidos de forma manual, dificultando a inclusão, consulta, alteração e exclusão das informações.

Para solucionar esse problema, a equipe de desenvolvimento decidiu criar um backend simples de gerenciamento de inventário, responsável por disponibilizar operações de CRUD (Create, Read, Update e Delete).

Nesta primeira versão do sistema, não será necessário utilizar um banco de dados. Os dados deverão ser armazenados temporariamente em um arquivo JSON, simulando uma base de dados.

O backend deverá disponibilizar uma API capaz de receber requisições HTTP e realizar as operações necessárias sobre os registros de inventário.

## Desafio

Desenvolva um backend RESTful de controle de inventário, utilizando um arquivo JSON como fonte de dados.

Cada item do inventário deverá possuir os seguintes atributos:

- **id**: identificador único do registro;
- **item**: nome ou descrição do item;
- **local**: local onde o item está armazenado ou instalado;
- **dataRegistro**: data em que o item foi registrado;
- **valor**: valor do item;
- **patrimonio**: número de patrimônio associado ao item.

O sistema deverá implementar as quatro operações básicas de um CRUD:

1. Criar um item

Criar uma rota que permita cadastrar um novo item no inventário.

Método: POST

Exemplo de rota:
/inventario

Exemplo de dados enviados:

{
  "item": "Notebook Dell",
  "local": "Laboratório 01",
  "dataRegistro": "2026-09-10",
  "valor": 3500.00,
  "patrimonio": "PAT-00125"
}


O sistema deverá gerar um id para o novo registro.

2. Listar os itens

Criar uma rota que permita consultar todos os itens cadastrados.

Método: GET

Exemplo de rota:
/inventario

A resposta deverá apresentar os registros armazenados no arquivo JSON.

3. Consultar um item específico

Criar uma rota que permita buscar um item utilizando seu id.

Método: GET

Exemplo de rota:
/inventario/1

Caso o item não exista, a API deverá retornar uma resposta HTTP adequada, como 404 Not Found.

4. Atualizar um item

Criar uma rota que permita alterar os dados de um item existente.

Método: PUT

Exemplo de rota:
/inventario/1

O aluno deverá permitir a alteração dos dados do registro, mantendo o mesmo id.

5. Excluir um item

Criar uma rota que permita remover um item do inventário.

Método: DELETE

Exemplo de rota:
/inventario/1

Após a exclusão, o registro não deverá mais aparecer na listagem.

Requisitos

O backend deverá:

Utilizar uma API HTTP/REST;
Utilizar um arquivo .json para armazenar os dados;
Implementar as operações POST, GET, PUT e DELETE;
Utilizar os campos id, item, local, dataRegistro, valor e patrimonio;
Retornar respostas em formato JSON;
Utilizar códigos HTTP adequados para sucesso e erro;
Validar os dados recebidos nas requisições;
Informar ao cliente quando um registro não for encontrado;
Manter os dados durante a execução da aplicação por meio do arquivo JSON;
Organizar o projeto de forma que as responsabilidades do código estejam separadas adequadamente.
Estrutura sugerida para o arquivo JSON

O arquivo inventario.json poderá iniciar com alguns registros para testes:

[
  {
    "id": 1,
    "item": "Notebook Dell",
    "local": "Laboratório 01",
    "dataRegistro": "2026-09-01",
    "valor": 3500.00,
    "patrimonio": "PAT-00125"
  },
  {
    "id": 2,
    "item": "Projetor Epson",
    "local": "Sala 03",
    "dataRegistro": "2026-09-03",
    "valor": 2800.00,
    "patrimonio": "PAT-00126"
  }
]

Entrega

O aluno deverá entregar:

Código-fonte completo do backend;
Arquivo inventario.json contendo os dados utilizados nos testes;
Arquivo README.md contendo:
descrição do projeto;
instruções para instalação e execução;
tecnologias utilizadas;
lista das rotas disponíveis;
exemplos de requisições;
exemplos de respostas;
Evidências dos testes realizados nas rotas da API.
Critérios de avaliação

A atividade poderá ser avaliada considerando:

CRUD funcionando corretamente: 40%;
Organização e qualidade do código: 20%;
Validação e tratamento de erros: 15%;
Utilização correta dos métodos HTTP e códigos de status: 15%;
Documentação e evidências dos testes: 10%.
Desafio extra

Para os alunos que concluírem a atividade antes do prazo, implementar funcionalidades adicionais, como:

Buscar itens pelo nome;
Filtrar itens por local;
Listar itens acima de determinado valor;
Verificar se um número de patrimônio já está cadastrado;
Criar uma rota para retornar o valor total dos itens do inventário.