# Aula07 - VPF01
## Verificação Prática Formaiva

### Capacidades Técnicas
- 1 Utilizar o paradigma da programação orientada a objetos
- 3 Aplicar técnicas de código limpo (clean code)
- 4 Identificar as características de programação back-end em ambiente web
- 5 Preparar o ambiente necessário ao desenvolvimento back-end para a plataforma web
- 6 Definir os elementos de entrada, processamento e saída para a programação da aplicação web

### Capacidades Socioemocionais
- 1 Demonstrar autogestão
- 2 Demonstrar pensamento analítico
- 3 Demonstrar inteligência emocional
- 4 Demonstrar autonomia

## Conhecimentos
- 1 Ambiente de desenvolvimento web
  - 1.1. Definição
  - 1.2. Histórico
  - 1.3. Características
  - 1.4. Ambiente de desenvolvimento
    - 1.4.1. Instalação e configuração
    - 1.4.2. Recursos e interfaces
    - 1.4.3. Gerenciamento de dependências
- 2 Web Services
  - 2.1. Definição
  - 2.2. REST
    - 2.2.1. Recursos
    - 2.2.2. Semântica da URL REST
  - 2.3. Padrão JSON
    - 2.3.1. Sintaxe básica
    - 2.3.2. Tipos de dados
    - 2.3.3. Formatação
    - 2.3.4. Coleção de objetos JSON

## Situação desafiadora

### Contextualização
Como desenvolvedor back-end de uma equipe de programadores que recebeu algumas demandas, você deve desenvolver um dos temas a seguir:

### Desafio: Tema01 - Gestão de Residuos Sólidos
A prefeitura de Amparo necessita realzar o Monitoramento de pontos de descarte irregular, para isso desenvolva um sistema para registrar locais onde foram identificados descartes de lixo, entulho ou resíduos eletrônicos.

- Crie um aquivo de `dados.json` com pelo menos 5 obejetos semelhantes ao abaixo:
```json
[
    {
        "id": 1,
        "local": "Rua das Flores, 120",
        "tipo_residuo": "Eletrônico",
        "nivel_risco": "Alto",
        "data_registro": "2026-09-23",
        "status": "Pendente"
    }
]
```
- CRUD: Cadastrar ocorrência (id com autoIncrement), consultar pontos por: [id, local e tipo], atualizar e excluir registros.

### Desafio: Tema02 - 🤖 Pesquisa de campo
Um pesquisador da Faculdade de Jauariúa precisa de um *Banco de usos de Inteligência Artificial*
- Um catálogo para registrar como empresas, escolas ou pessoas estão utilizando IA, incluindo finalidade e possíveis riscos.
- Crie um aquivo de `dados.json` com pelo menos 5 obejetos semelhantes ao abaixo:
```json
[
    {
        "id": 1,
        "sistema": "Assistente de atendimento",
        "tipo": "empresa",
        "finalidade": "Responder dúvidas de clientes",
        "tecnologia": "IA generativa",
        "nivel_risco": "Médio",
        "possui_revisao_humana": true
    }
]
```
- CRUD: Cadastrar uso (id com autoIncrement), consultar usos por: [id, nive_risco e tipo], atualizar e excluir registros.

### Desafio: Tema03 - 🌡️ Registro de eventos climáticos extremos
Um orgão público solicitou uma API para registrar ocorrências de ondas de calor, enchentes, secas, tempestades e outros eventos.
- Crie um aquivo de `dados.json` com pelo menos 5 obejetos semelhantes ao abaixo:
```json
[
    {
        "id": 1,
        "cidade": "Campinas",
        "tipo_evento": "Onda de calor",
        "temperatura_maxima": 38.7,
        "data": "2026-09-23",
        "nivel_impacto": "Alto"
    }
]
```
- CRUD: Cadastrar evento (id com autoIncrement), consultar evento por: [id, cidade e tipo_evento], atualizar e excluir registros.

### Desafio Tema04. ⚡ Rastreamento de consumo e desperdício de energia
O SESI precisa de um sistema para registrar equipamentos ou locais e acompanhar consumo energético, identificando possíveis desperdícios.
- Crie um aquivo de `dados.json` com pelo menos 5 obejetos semelhantes ao abaixo:
```json
[
    {
        "id": 1,
        "local": "Laboratório 03",
        "equipamento": "Ar-condicionado",
        "consumo_kwh": 185.4,
        "mes_referencia": "2026-09",
        "status": "Consumo elevado"
    }
]
```
- CRUD: Cadastrar equipamento (id com autoIncrement), consultar equipamento por: [id, equipamento e local], atualizar e excluir registros.

## Entregas
- Crie um repositório no Github chamado `sesi_pbe1_vps01_tema_2026` onde _tema_ é o nome_do_tema_sorteado (utilize snake_case no nome do repositório)
- Envie para este repositório seu projeo back-end
    - Arquiov JSON com pelo menos 5 ojetos: `dados.json`
    - Arquivo `server.js`
    - Arquivo `.gitignore` contendo
        ```txt
        node_modules
        package-lock.json
        ```
    - Pasta `prints` com imagens .PNG dos testes com o **Thunder**
    - Pasta `client` com o arquivo `index.html`contendo um formulário de cadastro.
    - Um arquivo README.md contendo:
        - Título do projeto
        - Breve descrição do tema
        - Tecnologias
        - Passos para testar
        - Print dos testes e exemplo de requisições
        - Print do formulário
- [Exemplo de entrega](https://github.com/wellifabio/sesi_pbe1_aula03_imc_2026.git)

## Tarefas
|Tarefa|Pontos|
|-|:-:|
|Arquivo de dados com 5 regisros|10|
|Arquivo server com todos os CRUDs e buscas|20|
|Formulário de cadastro|10|
|Print dos testes|20|
|Reositório no github com README.md conforme instruções de entrega|10|
|Responder corretamente as questões do *[formuário de entrega](https://forms.gle/oRWteYCd2p1yn1Te9)*|30|
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