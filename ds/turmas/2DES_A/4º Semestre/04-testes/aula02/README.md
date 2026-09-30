# Teste de Caixa Branca — Sistema de Pedidos

## Objetivo

Você recebeu um pequeno sistema de pedidos desenvolvido em HTML, CSS e JavaScript. O sistema permite selecionar um produto, informar uma quantidade, utilizar um cupom de desconto, escolher o tipo de frete e calcular o valor final do pedido.

O código fornecido contém **seis erros de lógica inseridos propositalmente**. A atividade consiste em utilizar técnicas de teste de caixa branca para analisar o código, identificar os caminhos de execução que podem apresentar problemas e demonstrar os erros encontrados por meio de casos de teste.

Os erros estão distribuídos em três níveis:

- 2 erros fáceis
- 2 erros médios
- 2 erros difíceis

O objetivo não é apenas identificar que o resultado está incorreto. É necessário demonstrar **como o programa chegou ao resultado**, quais condições foram executadas e em qual ponto o comportamento do sistema deixou de seguir o comportamento esperado.

## Contextualização do sistema

A aplicação representa uma pequena loja utilizada como exemplo para a atividade. O usuário pode escolher entre alguns produtos disponíveis, informar a quantidade desejada e, opcionalmente, informar um cupom de desconto. Também é possível escolher entre diferentes formas de entrega.

Durante o processamento do pedido, o sistema verifica as informações fornecidas, consulta a disponibilidade dos produtos e realiza os cálculos necessários para determinar o valor final da compra.

Algumas situações podem alterar o valor do pedido. Dependendo do produto e da quantidade solicitada, o sistema precisa considerar a disponibilidade em estoque e descontos relacionados à quantidade. Os cupons também possuem condições específicas para que possam ser utilizados.

O tipo de entrega escolhido interfere no valor do frete. Em determinadas situações, o cliente pode não pagar pelo frete, enquanto outras modalidades possuem um valor fixo.

Pedidos de valores mais elevados também recebem um tratamento diferente no sistema, alterando o cálculo final e a forma como o pedido é apresentado ao usuário.

Todas essas operações são realizadas por meio de estruturas condicionais no JavaScript. Portanto, diferentes entradas podem fazer o programa seguir caminhos diferentes durante sua execução.

É responsabilidade do aluno analisar esses caminhos e verificar se o comportamento implementado no código corresponde ao comportamento esperado para o sistema.

## Fluxo geral do sistema

O processamento do pedido segue, de maneira geral, este fluxo:

```text
Entrada dos dados
       |
       v
Validação da quantidade
       |
       v
Verificação do estoque
       |
       v
Cálculo do subtotal
       |
       v
Cálculo dos descontos
       |
       v
Cálculo do frete
       |
       v
Cálculo do total
       |
       v
Classificação do pedido
       |
       v
Apresentação do resultado
```

Esse fluxo representa apenas a estrutura geral do sistema. Durante a análise do código, cada aluno deverá identificar os caminhos alternativos existentes nas estruturas condicionais.

## Atividade

Você deverá analisar o código-fonte fornecido e identificar os seis erros de lógica existentes.

Para cada erro encontrado, deverá ser elaborado um caso de teste capaz de demonstrar o comportamento incorreto.

Cada caso deverá apresentar:

1. Nível do erro: fácil, médio ou difícil.
2. Trecho do código relacionado ao problema.
3. Comportamento esperado do sistema.
4. Dados utilizados no teste.
5. Caminho percorrido pelo programa.
6. Resultado esperado.
7. Resultado apresentado pelo sistema.
8. Explicação do erro encontrado.
9. Correção realizada no código.
10. Novo teste após a correção.

## Fluxogramas

Além do caso de teste, deverá ser criado **um fluxograma para cada erro identificado**.

Como a atividade possui seis erros, deverão ser produzidos **seis fluxogramas**.

O fluxograma deve representar o fluxo de informação percorrido pelo programa durante o teste realizado.

Não é necessário representar todo o sistema em cada fluxograma. O objetivo é demonstrar o caminho relacionado ao erro que está sendo analisado.

O fluxograma deve apresentar, quando necessário:

- dados de entrada;
- processamento das informações;
- decisões;
- caminhos verdadeiro e falso;
- alterações realizadas nas variáveis;
- resultado obtido.

Por exemplo, para analisar uma validação de quantidade, o fluxograma poderia representar:

```text
       Quantidade informada
                |
                v
       Quantidade válida?
          /          \
        Sim          Não
         |            |
         v            v
 Continua o       Exibe erro
 processamento
```

O fluxograma deverá ser construído de acordo com o caminho realmente analisado no código.

## Análise dos caminhos

Para cada caso de teste, identifique as estruturas condicionais que foram executadas.

Durante a análise, procure observar:

- condições `if` e `else`;
- operadores relacionais;
- operadores lógicos;
- condições de limite;
- alterações no valor das variáveis;
- ordem em que os cálculos são realizados;
- caminhos diferentes de execução;
- dependência entre decisões;
- resultado produzido ao final do processamento.

O objetivo é relacionar o código ao comportamento observado no sistema.

## Estrutura da análise de cada erro

Utilize a seguinte estrutura para cada um dos seis erros:

```text
ERRO 1

Nível:
Trecho do código:
Comportamento esperado:
Dados utilizados no teste:
Caminho percorrido:
Resultado esperado:
Resultado obtido:
Erro identificado:
Correção realizada:
Resultado após a correção:

Fluxograma:
```

Repita essa estrutura para os seis erros encontrados.

## Técnicas de teste

Durante a atividade, poderão ser utilizadas técnicas de teste de caixa branca como:

- cobertura de instruções;
- cobertura de decisões;
- cobertura de condições;
- análise de caminhos;
- análise de valores-limite;
- análise de condições compostas;
- rastreamento de variáveis.

A escolha da técnica deve estar relacionada ao erro analisado.

## Entrega

A entrega deverá conter:

- código original utilizado na análise;
- identificação dos seis erros;
- seis casos de teste;
- seis fluxogramas;
- explicação dos caminhos percorridos;
- código corrigido;
- testes realizados após as correções;
- comparação entre o comportamento anterior e o comportamento após a correção.

A análise deve demonstrar a relação entre:

```text
Entrada
   ↓
Condições executadas
   ↓
Caminho percorrido
   ↓
Processamento
   ↓
Resultado
   ↓
Comparação com o comportamento esperado
   ↓
Identificação do erro
   ↓
Correção
   ↓
Novo teste
```

Não


# Documentação – Teste de Caixa Branca

## Capa

A documentação deve iniciar com uma capa contendo as informações da atividade, como:

- Nome da instituição;
- Curso;
- Unidade curricular;
- Nome da atividade;
- Nome do(s) aluno(s);
- Turma;
- Professor;
- Data.

---

## 1. Identificação do Aluno e da Turma

Apresente as informações dos responsáveis pelo desenvolvimento da atividade.

Informe:

- Nome do aluno ou integrantes do grupo;
- Turma;
- Unidade curricular;
- Professor;
- Data de realização da atividade.

---

## 2. Contextualização sobre Teste de Caixa Branca

Apresente uma breve explicação sobre o que é o teste de caixa branca e qual é sua finalidade no desenvolvimento de software.

A contextualização deve explicar que esse tipo de teste considera a estrutura interna do código, permitindo analisar seus comandos, decisões e diferentes caminhos de execução.

Também deve apresentar o código que será utilizado durante a atividade e explicar, de forma breve, qual é o seu objetivo.

---

## 3. Análise das Estruturas de Decisão

Analise o código-fonte identificando as estruturas que influenciam o fluxo de execução.

Observe elementos como:

- `if` e `else`;
- `else if`;
- `switch`;
- operadores condicionais;
- estruturas de repetição;
- outras condições que possam alterar o caminho de execução.

Para cada estrutura identificada, explique qual condição está sendo avaliada e quais caminhos podem ser percorridos pelo programa.

---

## 4. Fluxograma do Exemplo

Represente visualmente o fluxo de execução do código por meio de um fluxograma.

O fluxograma deve demonstrar:

- início da execução;
- entrada de dados;
- processamento;
- decisões;
- diferentes caminhos possíveis;
- saída do programa;
- término da execução.

Cada fluxo de informação identificado durante a análise deve possuir seu respectivo fluxograma.

O fluxograma deve estar relacionado diretamente ao código analisado, permitindo compreender visualmente como as informações percorrem o programa.

---

## 5. Casos de Teste

A partir da análise do código e dos caminhos identificados, desenvolva os casos de teste necessários para verificar o funcionamento do programa.

Cada caso de teste deve apresentar, quando aplicável:

| Identificação | Entrada | Condição/Caminho | Resultado Esperado |
|---|---|---|---|
| CT01 |  |  |  |
| CT02 |  |  |  |
| CT03 |  |  |  |

Os casos de teste devem contemplar os diferentes caminhos identificados na análise do código.

---

## 6. Resultados dos Testes

Execute os casos de teste definidos anteriormente e registre os resultados obtidos.

Utilize uma tabela para facilitar a comparação entre o resultado esperado e o resultado apresentado pelo programa.

| Teste | Entrada | Resultado Esperado | Resultado Obtido | Situação |
|---|---|---|---|---|
| CT01 |  |  |  |  |
| CT02 |  |  |  |  |
| CT03 |  |  |  |  |

Quando necessário, inclua evidências da execução, como capturas de tela do programa ou do terminal.

---

## 7. Análise dos Resultados

Após executar os testes, analise os resultados obtidos.

Compare o comportamento apresentado pelo programa com o comportamento esperado para cada caso de teste.

Descreva:

- quais caminhos foram executados;
- quais testes apresentaram o resultado esperado;
- se foram encontrados comportamentos diferentes do esperado;
- quais problemas ou falhas foram identificados;
- quais alterações seriam necessárias, caso algum problema tenha sido encontrado.

A análise deve relacionar os resultados obtidos com a estrutura do código e os fluxos representados nos fluxogramas.

---

## 8. Conclusão

Apresente uma conclusão sobre a atividade realizada.

Explique o que foi possível observar durante a análise do código e a execução dos testes, destacando a importância da utilização do teste de caixa branca para verificar diferentes caminhos de execução de um software.

A conclusão também deve considerar os resultados encontrados durante os testes e registrar se o comportamento observado correspondeu ao esperado.