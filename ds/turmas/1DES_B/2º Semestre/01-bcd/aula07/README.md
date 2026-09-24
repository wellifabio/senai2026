# Aula07 - VPF01
## Verificação Prática Formativa

### Capacidades Técnicas
- 1 Identificar as características de banco de dados relacionais e não-relacionais
- 2 Configurar o ambiente para utilização de banco de dados relacional
- 3 Utilizar tipos de dados para definição dos atributos do banco de dados
- 4 Elaborar diagramas de modelagem do banco de dados de acordo com a arquitetura definida
- 5 Utilizar relacionamentos entre as tabelas do banco de dados
- 6 Normalizar a estrutura do banco de dados
- 7 Documentar a estrutura do banco de dados por meio de dicionário de dados

### Capacidades Socioemocionais
- 1 Demonstrar autogestão
- 2 Demonstrar pensamento analítico
- 3 Demonstrar inteligência emocional
- 4 Demonstrar autonomia

## Conhecimentos
- 1 Sistema Gerenciador de Banco de Dados (SGBD)
  - 1.1 Definição
  - 1.2 Tipos
    - 1.2.1 Relacional
    - 1.2.2 Não relacional
  - 1.3  Características
  - 1.4  Estrutura
    - 1.4.1 Tabela
    - 1.4.2 Registro
    - 1.4.3 Campo
    - 1.4.4 Tipos de dados
  - 1.5  Instalação e configuração
- 2  Modelo relacional
  - 2.1 Modelagem
    - 2.1.1 Dicionário de dados
    - 2.1.2 Modelo Entidade Relacionamento - MER
    - 2.1.3 Diagrama Entidade Relacionamento - DER
    - 2.1.4 Formas normais
  - 2.2 SQL (Structured Query Language)
    - 2.4  DDL (Data Definition Language)
    - 2.4.1 CREATE DATABASE
    - 2.4.2 DROP DATABASE
    - 2.4.3 USE
    - 2.4.4 CREATE TABLE
    - 2.4.5 ALTER TABLE
    - 2.4.6 DROP TABLE
  - 2.6  DML (Data Manipulation Language)
    - 2.6.1 INSERT
    - 2.6.2 UPDATE
    - 2.6.3 DELETE
    - 2.6.4 SELECT
    
## Contextualização
Você presta serviços para uma empresa de desenvolvimento de softwares e foi designado para uma das quatro demandas de projeto, desenvolvimento e cadastro de testes de um banco de dados.
- Verifique na abela anexa, qual tema você deve trabalhar

## Desafio: Tema01 - Atendimento a Chamados
Um banco de dados de atendimento a chamados de TI normalmente precisa registrar quem solicita o atendimento, qual é o problema, quem o atende, seu andamento e a solução aplicada.

#### Principais entidades e atributos
|Entidade|Atributos básicos|Descrição|
|-|-|-|
|Usuário|id, nome, email, telefone, departamento, cargo, status|Pessoa que solicita ou recebe atendimento.|
|Chamado|id, titulo, descricao, data_abertura, data_fechamento, status, prioridade, id_usuario, id_categoria, id_tecnico|Registra a solicitação ou incidente |de |TI.|
|Técnico|id, nome, email, especialidade, status|Profissional responsável pelo atendimento do chamado.|
|Categoria|id, nome, descricao|Classifica o chamado, por exemplo: Hardware, Software, Rede ou Acesso.|
|Histórico/Comentários|id, id_chamado, id_usuario, data_hora, descricao, tipo|Armazena comentários, atualizações e ações realizadas durante o atendimento e Solução.|

## Desafio: Tema02 - Estoque de uma Loja
Um banco de dados de gestão de estoque de uma loja de roupas, é importante controlar produtos, categorias, fornecedores, entradas e saídas de mercadorias.

#### Principais entidades e atributos
|Entidade|Atributos básicos|Descrição|
|-|-|-|
|Produto|id, nome, descricao, preco, marca, id_categoria, id_fornecedor|Representa cada peça de roupa comercializada pela loja.|
|Categoria|id, nome, descricao|Classifica os produtos, como Camisetas, Calças, Vestidos e Jaquetas.|
|Fornecedor|id, razao_social, nome_fantasia, cnpj, telefone, email, endereco|Empresa responsável pelo fornecimento dos produtos.|
|Estoque|id_estoque, id_produto, quantidade, quantidade_minima, localizacao|Controla a quantidade disponível de cada produto.|
|Movimentação de Estoque|id_movimentacao, id_produto, tipo(Entrada, Saída), quantidade, data|Registra entradas e saídas de produtos do estoque.|

## Desafio: Tema03 - Provisionamento de acessos a servidores
Um banco de dados de Gestão e Provisionamento de Acessos de TI a servidores, onde o objetivo é controlar quem possui acesso, a quais servidores, com quais permissões.

#### Principais entidades e atributos
|Entidade|Atributos básicos|Descrição|
|-|-|-|
|Usuário|id, nome, email, cargo, departamento, status|Pessoa que solicita ou recebe acesso aos servidores.|
|Servidor|id, nome, hostname, ip, sistema_operacional, ambiente (Desenvolvimento, Testes, Produção) |Servidor ao qual o acesso pode ser concedido.|
|Conta de Acesso|id_conta, id_usuario, id_servidor, login, status, data_criacao, data_expiracao|Representa a conta utilizada pelo usuário para acessar determinado servidor.|
|Perfil/Permissão|id_perfil, nome, descricao, nivel_acesso|Define o nível |de |acesso, como leitura, operador ou administrador.|
|Acesso|id_acesso, id_conta, id_perfil, data_inicio, data_fim, status|Registra efetivamente a autorização concedida ao usuário.|

## Desafio: Tema04 - Manutenção de equipamentos
Um banco de dados de manutenção de equipamentos em uma fábrica, onde o objetivo é controlar os equipamentos, seu histórico de manutenção, os técnicos responsáveis, peças utilizadas e as ordens de serviço.

#### Principais entidades e atributos
|Entidade|Atributos básicos|Descrição|
|-|-|-|
|Equipamento|id, nome, tipo, marca, modelo, numero_serie, data_aquisicao, status, setor, valor_de_aquisicao|Identifica cada máquina ou equipamento da fábrica.|
|Ordem de Manutenção|id_ordem, id_equipamento, tipo, descricao, data_abertura, data_inicio, data_fim, status, prioridade|Registra uma manutenção preventiva ou |corretiva.
|Técnico|id, nome, especialidade, telefone, email|Profissional responsável pela execução da manutenção.|
|Peça|id_peca, nome, descricao, quantidade_estoque, estoque_minimo, preco|Registra peças e componentes utilizados nas manutenções.|
|Manutenção|id_manutencao, id_ordem, id_tecnico, descricao_servico, data_execucao, horas_trabalhadas, observacoes|Detalha o serviço realizado pelo técnico.|
|Peça da Manutenção|id_manutencao, id_peca, quantidade|Registra quais peças foram utilizadas em cada manutenção.|

## Entregas
- Crie um repositório no Github chamado `sesi_bcd_vps01_tema_2026` onde _tema_ é o nome_do_tema_sorteado (utilize snake_case no nome do repositório)
- Envie para este repositório toda sua produção
    - Imagem do MER DER Conceitual **.PNG**
    - Imagem do MER DER Lógico **.PNG**
    - Dados de teste em tabelas tipo **.CSV**
    - Script ddl.sql de criação do banco de dados
    - Script dml.sql de população do banco de dados
    - Um arquivo README.md contendo:
        - Título do projeto
        - Breve descrição do tema
        - Imagem do MER DER Conceitual **.PNG**
        - Imagem do MER DER Lógico **.PNG**
        - Dicionário de dados em formato **tabela MarkDown**
        - Link para os dados de teste em tabelas tipo **.CSV**
        - Código DDL
        - Código DML
- [Exemplo de entrega](https://github.com/wellifabio/sesi_bcd_aula03_mer_der_dd_dados_2026.git)

## Tarefas
|Tarefa|Pontos|
|-|:-:|
|Desenvolva o MER DER Conceitual(Draw.io:PNG)|10|
|Aplique Normalização|10|
|Desenvolva o DD (Dicionário de dados) (MarkDown)|10|
|Crie as tabelas com dados de teste (.CSV separados por vírgula), pelo menos 3 linhas por tabela|10|
|Faça o script `ddl.sql` de Criação do Banco de dados|10|
|Faça o script `dml.sql` de População do Banco de dados|10|
|Realizar a entrega correta pelo github e formulário|10|
|Responder corretamente as questões do *[formuário de entrega](https://forms.gle/Jw761qnkAM6mpvVN9)*|30|
|Total|100|

## Anexo01: Tema designado
|Aluno|Tema|
|-|:-:|
|Alicia Coelho Gomes de Oliveira|3|
|Ana Klara do Carmo|4|
|Breno Franco de Lima|1|
|Bruno Vascon|4|
|Carolina da Silva Santos|2|
|Davi Parreira Cardeal|2|
|Eloísa Macedo da Silva|1|
|Enzo Casadei Macedo|2|
|Felipe Martins|4|
|Gabriel Pereira de Oliveira|4|
|Giovana Ferreira Remorini|4|
|Giovana Luísa Cezar|2|
|Guilherme Enrico Barichello|2|
|Isabelle Moreira Cezar Barichello|2|
|Jéssica Guedes Vaz|3|
|João Henrique Leme da Silva|1|
|João Victor Moraes Lopes|2|
|Kamilly Vitoria Ferreira Silvério|3|
|Leonardo Canina Marchiori|2|
|Letícia Guarizo Tolloto|1|
|Lívia Fernandes Morais|1|
|Maria Eduarda Betim Gomes de Moraes|2|
|Mariana Correia Santos|2|
|Miguel Cardoso Pignata|2|
|Mirella Camilotti Perez|3|
|Pietro Cardoso Broleze|4|
|Samuel Gomes Silva|1|
|Thiago Lima Amaral|4|
|Vitor Rafael Parisato|1|
|Yasmin Drudi|2|