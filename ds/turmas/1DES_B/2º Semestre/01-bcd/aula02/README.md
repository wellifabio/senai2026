# Aula 02 - MER x DER e Dicionário de Dados

## Capacidades Técnicas
- 3 Utilizar tipos de dados para definição dos atributos do banco de dados
- 4 Elaborar diagramas de modelagem do banco de dados de acordo com a arquitetura definida
- 5 Utilizar relacionamentos entre as tabelas do banco de dados

## Capacidades Socioemocionais
- 1 Demonstrar autogestão
- 2 Demonstrar pensamento analítico

## Conhecimentos
- 2 Modelo relacional
    - 2.1 Modelagem
        - 2.1.1 Dicionário de dados
        - 2.1.2 Modelo Entidade Relacionamento - MER
        - 2.1.3 Diagrama Entidade Relacionamento - DER

![Gif](./90223.gif)
## Modelo relacional
- MER - Modelo Entidade Relacionamento
- DER - Diagrama Entidade Relacionamento
- Dicionário de Dados

## MER - Modelo Entidade Relacionamento
O modelo entidade relacionamento é uma forma de representar um banco de dados de forma visual. O modelo é composto por entidades, atributos e relacionamentos.

### Entidades
Entidades são objetos do mundo real que possuem atributos. Exemplo: Aluno, Professor, Disciplina, Curso, etc.

### Atributos
Atributos são características das entidades. Exemplo: Aluno possui os atributos nome, telefone, email, etc.

### Relacionamentos
Relacionamentos são as ligações entre as entidades. Exemplo: Aluno está matriculado em um Curso.

## Tipos de modelagem
- Conceitual - Mais abstrato, próximo ao problema
- Lógico - Mais detalhado, próximo a solução
- Físico - Detalhes de implementação (SQL)

## Dicionário de Dados
O dicionário de dados é uma lista de todos os elementos do banco de dados. O dicionário de dados é composto por:

### Exemplo de Dicionário de Dados - Escola
| Entidade | Atributo | Tipo | Tamanho | Descrição |
|----------|----------|------|---------|-----------|
| Aluno    | id       | Int  |         | Identificador do Aluno |
| Aluno    | nome     | Varchar | 100   | Nome do Aluno |
| Aluno    | email    | Varchar | 100   | Email do Aluno |
| Curso    | id       | Int  |         | Identificador do Curso |
| Curso    | nome     | Varchar | 100   | Nome do Curso |
| Matricula| id       | Int  |         | Identificador da Matrícula |
| Matricula| id_aluno | Int  |         | Identificador do Aluno |
| Matricula| id_curso | Int  |         | Identificador do Curso |
| Matricula| data     | Date |         | Data da Matrícula |

## DER - Diagrama Entidade Relacionamento
O DER é uma representação gráfica do MER. O DER é composto por entidades, atributos e relacionamentos.
### Notação
![Notação](./merder.png)

### Exemplo de DER - Escola 1.0
![Escola](./escola1.0.png)
### Exemplo do DER - Escola 2.0
![Escola 2.0](./escola2.0.png)


## Exemplo Caixeiro Viajante
![MER DER](./caixeiro/mer_der.png)
### Dicionário de Dados - Caixeiro Viajante
![Dicionário de Dados](./caixeiro/dd.png)

## Atividades (Será sorteado uma das atividades abaixo para cada aluno)
1. Uma empresa de transporte deseja criar um sistema para gerenciar suas rotas e motoristas. Crie o MER, DER e Dicionário de Dados para este sistema. Simule no excel dados fictícios para as entidades criadas.

2. Uma escola deseja criar um sistema para gerenciar seus alunos, professores e disciplinas. Crie o MER, DER e Dicionário de Dados para este sistema. Simule no excel dados fictícios para as entidades criadas.

3. Uma livraria deseja criar um sistema para gerenciar seus livros, autores e clientes. Crie o MER, DER e Dicionário de Dados para este sistema. Simule no excel dados fictícios para as entidades criadas.

4. Uma clínica deseja criar um sistema para gerenciar seus pacientes, médicos e consultas. Crie o MER, DER e Dicionário de Dados para este sistema. Simule no excel dados fictícios para as entidades criadas.

5. Um plano de saúde veterinário deseja criar um sistema para gerenciar seus clientes (Donos de pets e Veterinários credenciados), animais e consultas. Crie o MER, DER e Dicionário de Dados para este sistema. Simule no excel dados fictícios para as entidades criadas.

|Aluno|Atividade|
|-|:-:|
|Alicia Coelho Gomes de Oliveira|3|
|Ana Klara do Carmo|4|
|Breno Franco de Lima|1|
|Bruno Vascon|4|
|Carolina da Silva Santos|2|
|Davi Parreira Cardeal|2|
|Eloísa Macedo da Silva|1|
|Enzo Casadei Macedo|5|
|Felipe Martins|4|
|Gabriel Pereira de Oliveira|4|
|Giovana Ferreira Remorini|4|
|Giovana Luísa Cezar|2|
|Guilherme Enrico Barichello|5|
|Isabele Hilary Reis Silva|2|
|Isabelle Moreira Cezar Barichello|5|
|Jéssica Guedes Vaz|3|
|Joana Fernandes Fabrin|5|
|João Henrique Leme da Silva|1|
|João Victor Moraes Lopes|5|
|Kamilly Vitoria Ferreira Silvério|3|
|Leonardo Canina Marchiori|5|
|Letícia Guarizo Tolloto|1|
|Lívia Fernandes Morais|1|
|Maria Eduarda Betim Gomes de Moraes|2|
|Mariana Correia Santos|5|
|Miguel Cardoso Pignata|5|
|Mirella Camilotti Perez|3|
|Pietro Cardoso Broleze|4|
|Samuel Gomes Silva|1|
|Thiago Lima Amaral|4|
|Vitor Rafael Parisato|1|
|Yasmin Drudi|2|

- Ao executar as atividades o aluno adquire e demonstra suas capacidades técnicas e socioemocionais.
- Utilize Draw.io ou a ferramenta de desenho de sua preferência para os modelar os diagramas MER DER conceitual e lógico, utilize o Excel para criar as planilhas com dados de teste para as tabelas e para o dicionário de dados, conforme o exemplo demonstrado em aula.

## Entregas
- Ao concluir suas atividades crie um repositório no github chamado `bd_mer_der_aula02` e envie para ele diagramas exportados no formato `.png` a planilha do excel com os dados de teste e o dicionário de dados. Na próxima aula teremos mais instruções de entrega após aplicarmos as formas de **normalização** no banco de dados.