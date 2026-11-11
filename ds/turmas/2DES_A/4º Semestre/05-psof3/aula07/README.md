# Avaliação baseada no - SAEP 2025
Ao executar um projeto full stack como este dentro do tempo de 3 horas sem ou com pouco auxílio de IA, você está bem preparado para processos seletivos nas qualificvações de [Programador Web, full-stack, back-end ou front-end]
## Contextualização
Uma fabricante de ferramentas e equipamentos manuais enfrenta desafios críticos na gestão de estoque devido à ausência de um sistema informatizado para controlar a entrada e saída de materiais, resultando em falta de produtos nos momentos cruciais da produção e excesso de estoque, o que gera custos elevados e risco de obsolescência. Dentre as características das ferramentas temos variações como martelos, que podem ter cabeças e cabos de diferentes materiais, e chaves de fenda, que variam em materiais e características como revestimento isolante ou ponta imantada, as quais exemplificam a complexidade da gestão, onde cada item possui especificidades de tamanho e peso que precisam ser adequadamente classificadas e controladas.
<br>![Ilustracao](./print01.png)

## Desafio
Desenvolver um sistema web ou desktop que permita ao usuário do almoxarifado cadastrar produtos, visualizar e gerenciar de forma intuitiva a entrada e saída de produtos. O sistema deve incluir um mecanismo de gerenciamento de estoque mínimo, que emite alertas automáticos quando o nível de estoque de qualquer produto fica abaixo do valor mínimo previamente configurado. Além disso, essa ferramenta deve registrar um histórico completo de cada movimentação, identificando o responsável e a data da operação, garantindo assim a rastreabilidade e a transparência dos processos.
<br>Está disponível um [vídeo](https://www.youtube.com/watch?v=oFvebdN6G7s) de briefing da entrevista com o cliente.

## Resultados e entregas esperadas
|Nº|Nome da Entrega|Tipo de Entrega|Tempo Estimado (minutos)|
|:-:|-|-|:-:|
|1|Lista de requisitos funcionais|Documentação de requisitos|10|
|2|Diagrama entidade relacionamento (DER)|Modelagem do banco de dados|10|
|3|Script de criação e população do banco de dados|Desenvolvimento do banco de dados|10|
|4|Interface de autenticação de usuários (login)|Desenvolvimento do sistema|20|
|5|Interface principal do sistema|Desenvolvimento do sistema|20|
|6|Interface cadastro de produto|Desenvolvimento do sistema|45|
|7|Interface gestão de estoque|Desenvolvimento do sistema|45|
|8|Descritivo de Casos de Teste de Software|Documentação de testes|10|
|9|Lista de requisitos de infraestrutura|Documentação do sistema|10|

### 1 - Lista de requisitos funcionais
- 1.1 Descrever os requisitos funcionais do sistema.
- 1.2 Entrega consiste em preencher o item ENTREGA 01 – Requisitos Funcionais do ANEXO III – documentacao.docx, ou .md (Markdown).
### 2 - Diagrama entidade relacionamento (DER)
- 2.1 Entregar o DER em formato de imagem (.png, .jpeg) ou PDF.
### 3 - Script de criação e população do banco de dados
- 3.1 Nomear o banco de dados com o nome “saep_db”.
- 3.2 No script devem existir pelo menos três registros para todas as tabelas criadas, respeitando os tipos de dados, chaves primárias e estrangeiras.
- 3.3 Entregar o script no formato .sql ou num formato previamente acordado com o avaliador.
### 4 - Interface de autenticação de usuários (login)
- 4.1 Em caso de falha de autenticação, informar ao usuário o motivo da falha e posteriormente redirecionar novamente à tela de autenticação.
- 4.2 Design e layout da interface ficam à sua escolha.
### 5 - Interface principal do sistema
- 5.1 Esta interface deve atender aos seguintes requisitos:
    - 5.1.1 Exibir nome do usuário logado.
    - 5.1.2 Desenvolver um meio para o usuário fazer logout, redirecionando à tela de login desenvolvida no item 4.
    - 5.1.3 Desenvolver um meio de acessar a interface de "Cadastro de Produto", a qual será implementada no item 6.
    - 5.1.4 Desenvolver um meio para acessar a interface "Gestão de Estoque", a qual será implementada no item 7.
    - 5.1.5 Design e layout da interface ficam à sua escolha.
### 6 - Interface cadastro de produto
- 6.1 Esta interface deve atender aos seguintes requisitos:
    - 6.1.1 Listar os produtos cadastrados no banco de dados conforme item 3.2. Esta listagem deve ser realizada em uma tabela e os dados devem ser carregados automaticamente ao acessar a interface de cadastro de produto.
    - 6.1.2 Implementar um campo de busca para que o usuário possa inserir o termo de busca, o qual, após inserção e confirmação, deverá gerar a atualização da listagem dos valores da tabela com os registros que correspondem ao termo.
    - 6.1.3 Desenvolver um meio para o usuário inserir os dados de um novo produto no banco de dados.
    - 6.1.4 Desenvolver um meio para o usuário realizar a edição de um produto existente no banco de dados.
    - 6.1.5 Desenvolver um meio para o usuário realizar a exclusão de um produto existente no banco de dados.
    - 6.1.6 Realizar validações dos dados inseridos nos campos para a criação de um novo produto ou a alteração de um existente, exibindo alertas ao usuário nos casos de ausência de inserção ou inserção inválida de dados.
    - 6.1.7 Desenvolver um meio para o usuário retornar para a interface principal do sistema, desenvolvida no item 5.
    - 6.1.8 Design e layout da interface ficam à sua escolha.
### 7 - Interface gestão de estoque
- 7.1 Esta interface deve atender aos seguintes requisitos:
    - 7.1.1 Listar os produtos cadastrados no banco de dados conforme item 3.2. em ordem alfabética.
Utilizar um algoritmo de ordenação para tal, ficando a seu critério qual algoritmo aplicar.
    - 7.1.2 Desenvolver um meio de selecionar o produto que terá movimentação de estoque, habilitando a opção de escolha por parte do usuário, se será uma movimentação de "entrada" ou "saída".
    - 7.1.3 Desenvolver um meio do usuário inserir a data da movimentação que ele está realizando, seja de entrada ou saída.
    - 7.1.4 Implementar uma verificação automática a cada movimentação de saída de estoque, gerando um alerta em caso de estoque abaixo do mínimo configurado.
    - 7.1.5 Design e layout da interface ficam à sua escolha.

### 8 - Descritivo de teste de software
- 8.1 Descrever ferramentas, ambiente e os casos de teste de software para cada requisito funcional.
- 8.2 Entrega consiste em preencher o item 8.1 (Casos de Teste) e item 8.2 (Ferramentas e Ambientes de Teste) do ANEXO III – documentacao.docx,  ou .md (Markdown).

### 9 - Lista de requisitos de infraestrutura
- 9.1 A lista de requisitos de infraestrutura deve conter os seguintes itens:
    - 9.1.1 O SGBD utilizado e sua respectiva versão.
    - 9.1.2 A linguagem de programação e versão utilizada no desenvolvimento do sistema.
    - 9.1.3 O sistema operacional utilizado e sua versão no desenvolvimento do sistema.
- 9.2 Entrega consiste em preencher o item ENTREGA 9 – Lista de requisitos de infraestrutura do anexo ANEXO III - documentacao.docx, ou .md (Markdown).

### FORMATO DAS ENTREGAS (Sugestão)
Um repositório Git público deve ser criado para o projeto, contendo todas as entregas solicitadas. A estrutura do repositório deve seguir o modelo abaixo:
- README.md (Contendo)
    - Lista de requisitos funcionais (entrega 1)
    - Diagrama de entidade e relacionamento (DER) (entrega 2).
    - Descritivo de Casos de Teste de Software (entrega 8).
    - Lista de requisitos de infraestrutura (entrega 9)
- Pasta DOCS
    - Diagrama entidade relacionamento (DER) em formato de imagem ou PDF (entrega 2).
- Pasta API
    - Script de criação e população do banco de dados (entrega 3) e back-end do sistema.
- Pasta WEB
    - Front-end do sistema com os arquivos do código-fonte do sistema desenvolvido (entregas 4, 5, 6 e 7).
#### Envie o link do repositorio ao instrutor através do [formulário](https://forms.gle/4okiRie8Kxasi2gy9)
