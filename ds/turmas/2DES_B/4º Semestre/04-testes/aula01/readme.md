# Relatório de Teste de Caixa Preta

## Cabeçalho
* **Projeto:** [Nome do Projeto]
* **Versão do Software:** 1.0.0
* **Data da Execução:** 21/08/2026
* **Responsável (Testador):** [Seu Nome/QA]

---

## Resumo Executivo
O ciclo de testes de caixa preta foi executado para validar os critérios de aceitação do usuário e fluxos principais do sistema. 
* **Status Geral:** 🔴 REPROVADO (Aguardando correção de falha crítica no fluxo de validação)
* **Total de Casos:** 3
* **Sucesso:** 2
* **Falhas:** 1

---

## Escopo do Teste
Funcionalidades mapeadas e avaliadas neste ciclo:
* Módulo de Autenticação (Login de Usuários)
* Validação de campos obrigatórios na tela de login

---

## Casos de Teste (CT)

| ID | Descrição | Entrada (Inputs) | Saída Esperada | Status |
| :--- | :--- | :--- | :--- | :--- |
| **CT01** | Login com credenciais válidas | E-mail e senha corretos | Redirecionamento e acesso permitido ao painel principal | ✅ Sucesso |
| **CT02** | Login com senha incorreta | E-mail válido e senha errada | Exibição de mensagem "Usuário ou senha inválidos" | ✅ Sucesso |
| **CT03** | Validação de campo vazio | Deixar e-mail em branco e clicar em entrar | Exibição do alerta "O campo e-mail é obrigatório" | ❌ Falha |

---

## Registro de Erros (Bugs)

### Bug #001 - Ausência de Alerta de Campo Obrigatório
* **ID do Caso Relacionado:** CT03
* **Severidade:** Média
* **Descrição:** Ao tentar realizar o login deixando o campo de e-mail em branco, o sistema não exibe nenhuma mensagem de alerta para o usuário e tenta submeter o formulário gerando um erro interno.
* **Passos para reproduzir:**
  1. Acessar a tela de login.
  2. Deixar o campo "E-mail" vazio.
  3. Preencher o campo "Senha".
  4. Clicar no botão "Entrar".
* **Evidências:** `[Inserir link ou imagem do print do erro aqui]`
