# Aula03 - draw.io
Ferramenta online para a criação de diagramas
## UML (Unified Modeling Language)
## DCU (Diagrama de Casos de Uso)
## Wireframes (Esboços)

#### Atividades 01
Agora utilizando o draw.io ilustre com **diagramas de casos de uso** cada um dos requisitos abaixo que já fizemos no caderno na aula anterior.

#### 1 - Sistema de controle de estoque de loja de roupas
- [RF001] **Tela de login**, contendo os campos email e senha e direcionando os **usuários** (Funcionários comuns e Gerência) para suas respectivas telas principais, caso suas credenciais sejam válidas, senão informa erro de login.
- [RF002] **Dashboard do estoque**, tela com um relatório de movimentações no estoque em forma de tabela e gráfico comparando os investimentos (Compras de produtos) e as vendas efetivas, acessada somente pelo **gerente** da loja.
- [RF003] **Tela de cadastro de mercadorias**, contendo os campos básicos como id (identificação para evitar produtos duplicados, gerada automaticamente pelo sistema), nome, descrição, preço e quantidade, todos os campos são obrigatórios, possui um campo de busca por nome para verificar se a mercadoria já não está cadastrada, acessada pelo **gerente** da loja.
- [RF004] **Tela de registro de Entradas (Compras)**, contendo os dados de aquisição/compra de mercadorias como quantidade, custo unitário e despesas gerais, cada compra registrada altera a quantidade de produtos no cadastro acrescentando a quantidade adquirida, acessada pelos **compradores** da loja.
- [RF005] **Tela de registro de Saídas (Vendas)**, contendo os dados do pedido de mercadorias como quantidade, preço unitário, subtotais, despesas de frete, mais impostos, valor total da venda. Cada venda registrada altera a quantidade de produtos no cadastro diminuindo a quantidade, acessada pelos **vendedores** da loja.
- [RF006] **Tela de cadastro de novo funcionário**, acessada somente pelo **gerente** da loja, onde ele preenche os dados no novo funcionário como nome, cargo, e-mail e senha provisória para que ele troque no primeiro acesso.

#### Atividades 02
Crie os **wireframes** (esboço) esboçando as telas do sistema acima em forma de site, utilize as formas "bootstrap" para criar os wireframes

### Entregas
Junte os Diagramas e os wireframes em um arquivo só utilizando o Word, exporte para PDF e envie para este **[formulário](https://forms.gle/7nKQAcfeWVdZGxXaA)**.