# Atividade Prática: RetroGames

## 1. Descrição do Projeto

Esta atividade tem como objetivo o desenvolvimento de uma aplicação web interativa para a gestão de um catálogo de jogos clássicos (RetroGames). A aplicação deve permitir a visualização de itens e a inclusão de novos registros por meio de um formulário contido em uma janela modal.

Além da interface do usuário, o projeto exige a modelagem da camada de dados através da escrita de um script SQL.

---

## 2. Requisitos do Banco de Dados (SQL)

Antes da construção do front-end, deve ser definida a estrutura do banco de dados relacional que dará suporte ao sistema.

1. Crie o banco de dados com o nome `db_retrogames`.
2. Crie a tabela `jogos` contendo os seguintes campos e restrições:
   - `id`: Chave primária, número inteiro, auto-incremento.
   - `titulo`: Nome do jogo (Texto, obrigatório).
   - `plataforma`: Console ou plataforma (ex: SNES, Mega Drive, PS1) (Texto, obrigatório).
   - `desenvolvedora`: Empresa responsável pelo desenvolvimento (Texto, obrigatório).
   - `imagem_url`: URL com o link para a imagem da capa (Texto, obrigatório).
   - `preco`: Valor monetário do jogo (Decimal/Numeric, obrigatório).
   - `data_cadastro`: Data e hora do registro (Timestamp/Datetime com valor padrão para a data/hora atual).
3. Escreva o arquivo `schema.sql` contendo:
   - A instrução de criação da tabela (`CREATE TABLE`).
   - No mínimo 3 instruções de inserção (`INSERT INTO`) para popular a tabela com dados iniciais de teste.

---

## 3. Requisitos do Front-end

# Criar identidade Visual

### 3.1. Estrutura HTML (`index.html`)
- **Cabeçalho (`<header>`):** Deve conter o título do sistema e uma breve descrição.
- **Área Principal (`<main>`):**
  - Seção com o título da página e o botão "+ Cadastrar Jogo".
  - Container destinado à listagem dos cards cadastrados.
  - Mensagem indicando estado vazio ("Nenhum jogo cadastrado") caso não existam itens na lista.
- **Janela Modal (`<dialog>`):**
  - Estrutura de formulário para inserção dos dados do novo jogo.
  - Campos correspondentes aos atributos da tabela: título, plataforma, desenvolvedora, URL da imagem e preço.
  - Botões para "Cancelar" e "Salvar".

### 3.2. Estilização CSS (`style.css`)
- **Grid Responsivo:** A listagem de jogos deve utilizar CSS Grid com ajuste automático de colunas (`repeat(auto-fit, minmax(220px, 1fr))`).
- **Tratamento de Imagens:** As imagens dos cards devem ajustar-se proporcionalmente ao container via `object-fit: cover`.
- **Interface Modal:** Estilização do elemento `<dialog>` e do fundo escurecido utilizando a pseudo-classe `::backdrop`.

### 3.3. Comportamento JavaScript (`script.js`)
- **Controle do Modal:** Manipulação da exibição da janela através dos métodos nativos `showModal()` e `close()`.
- **Captura do Formulário:** Interceptação do evento `submit` prevenindo o comportamento padrão do navegador com `preventDefault()`.
- **Manipulação do DOM:**
  - Construção dinâmica dos elementos HTML do card a partir dos dados preenchidos.
  - Ocultação da mensagem de catálogo vazio no momento da inserção do primeiro registro.
- **Formatação de Dados:** Exibição do valor do preço formatado no padrão de moeda brasileira (`R$ 0,00`) utilizando `toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })`.

---

## 4. Estrutura de Arquivos da Entrega

A entrega final deve conter a seguinte organização de diretórios e arquivos:

```text
retrogames-app/
├── index.html
├── style.css
├── script.js
└── schema.sql
```

---

