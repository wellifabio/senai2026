# Lista de Requisitos Funcionais

- [RF001] O sistema deve permitir autenticação por usuário cadastrado.
    - [RF001.1] O usuário deve possuir os campos email, senha e nome completo.
    - [RF001.2] O sistema deve validar o email e senha no momento do login.
    - [RF001.3] O sistema deve fazer o logout do usuário autenticado.
- [RF002] O sistema deve permitir o cadastro de produtos.
    - [RF002.1] O produto deve possuir os campos nome, descrição, peso, dimensões, imagem e estoque mínimo.
    - [RF002.2] Ao listar os produtos, o sistema deve exibir o nome, descrição, imagem e estoque disponível, caso esteja abaixo do estoque mínimo deve exibir um alerta visual.
    - [RF002.3] O sistema deve permitir a atualização e exclusão de produtos cadastrados.
    - [RF002.4] A interface deve permitir a busca de produtos digitando em um campo.
- [RF003] O sistema deve permitir que o usuário registre a movimentação do produto no **estoque** em `Entradas` e `Saídas`.
    - [RF003.1] A movimentação deve possuir os campos produto, quantidade, tipo de movimentação (entrada ou saída), data da movimentação e qual o usuário que realizou a movimentação.
    - [RF003.2] O sistema deve atualizar o estoque do produto conforme a movimentação registrada.
    - [RF003.3] O sistema deve impedir que o estoque do produto fique negativo.