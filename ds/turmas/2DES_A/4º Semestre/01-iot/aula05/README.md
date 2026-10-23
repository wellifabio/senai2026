# Aula05 - Python e IoT

## Capacidades Técnicas
- 1 Identificar as diferenças entre as aplicações do IoT e IIoT
- 5 Integrar a automação em plataforma na nuvem 
- 6 Conectar as aplicações gráficas
## Conhecimentos
- 3 Ambiente de desenvolvimento 
  - 3.1 IDE (Integrated Development Enviroment) 
    - 3.1.1. Tipos 
    - 3.1.2. Seleção 
  - 3.2. Configuração
## IDE Python [PyCharm](https://www.jetbrains.com/pycharm/)
- PyCharm é um ambiente integrado de desenvolvimento (IDE) python
## Características do Python
- Linguagem de programação de alto nível, interpretada e de tipagem dinâmica.
- Suporta múltiplos paradigmas de programação, incluindo programação orientada a objetos, programação funcional e programação imperativa.
- Possui uma sintaxe simples e legível, o que facilita a escrita e manutenção do código.

## Antes de instalar
Verifique se o Python já está instalado, abrindo um terminal e digitando:
```bash
python --version
```
Se o resultado form semelhante ao a seguir já está instalado
```bash
Python 3.14.7
```

## Instalar o Python
Para instalar o Python, siga os passos abaixo:
- 1 Acesse o site oficial do Python: [https://www.python.org/downloads/](https://www.python.org/downloads/)
- 2 Clique no botão "Download Python" para baixar a versão mais recente do Python.
    - Role a pagina para baixo e como nosso sistema operacional é o Windows, clique em "Windows" "Download Python install manager".
    - Baixe a versão Windows "Download Installer (MSIX)"
- 3 Execute o arquivo baixado para iniciar a instalação.
    - Instale o Python seguindo as instruções do instalador.
    - Se o terminal abrir clique em "y" para confirmar as alterações.
- 4 Verifique a instalação do Python.
    - Abra o terminal (Prompt de Comando) e digite o seguinte comando:
    ```bash
    python --version
    ```
    - Se a instalação foi bem-sucedida, você verá a versão do Python instalada.
## Olá mundo em Python
- 1 Crie uma pasta para o projeto e abra-a com o VsCode.
- 2 Crie um arquivo chamado `hello.py` edite com os dados a seguir:
    ```python
    print("Olá, mundo!")
    ```
- 3 Abra o terminal no VsCode `CTRL + '`, (preferencialmente terminal CMD ou BASH) e execute o arquivo com o seguinte comando:
    ```bash
    python hello.py
    ```
## Se preferir podemos utilizar um interpretador [online](https://www.online-python.com/)

## Exemplos de códigos em Python
A sintaxe python utiliza indentação para organizar sua estrutura
- Não utiliza ";"
### Crie os três exemplos a seguir
- soma.py
```python
# Programa que lê dois números inteiros e imprime a soma destes números
x = int(input("Digite um número inteiro"))
y = int(input("Digite outro número inteiro"))
z = x + y
print("A soma destes números é ", z)
```
- condicional.py
```python
#Escreva um programa que solicite um número ao usuário e determine se ele é par ou ímpar.
numero = int(input("Digite um número inteiro: "))
if numero % 2 == 0:
    print("O número ", numero, " é par")
else:
    print("O número ", numero, " é ímpar")
```
- for.py
```python
# escreva um programa que apresente o numeral de 1 a 100
for i in range(1, 101):
    print(i)
```

---

<details><summary><h2>

Exercícios

</h2></summary>
Faça a seguinte lista de exercícios para estudo da linguagem, caso utilize IA para estudar, entenda o código gerado, tire dúvidas com o instrutor se necessário.

1 - Média de três números:
Escreva um programa que solicite três números ao usuário e imprima a média deles.

2 - Conversor de temperatura:
Escreva um programa que converta uma temperatura em Celsius para Fahrenheit. 
O usuário deve fornecer a temperatura em Celsius e o programa deve imprimir a temperatura equivalente em 
Fahrenheit. A fórmula de conversão é: Fahrenheit = (Celsius * 9/5) + 32.

3 - Identificação de número par ou ímpar:
Escreva um programa que solicite um número ao usuário e determine se ele é par ou ímpar. 

4 - Cálculo de fatorial:
Escreva um programa que solicite um número inteiro positivo ao usuário e calcule o fatorial 
desse número. O fatorial de um número inteiro positivo n é o produto de todos os inteiros positivos menores ou 
iguais a n. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120.

5 - Verificador de ano bissexto:
Escreva um programa que verifique se um ano fornecido pelo usuário é bissexto ou não. Um ano é bissexto se for 
divisível por 4, exceto em anos que são divisíveis por 100 mas não são divisíveis por 400.

6- Verificação de número positivo ou negativo:
Escreva um programa que solicite um número ao usuário e determine se ele é positivo, negativo ou zero.

7- Comparação de dois números:
Escreva um programa que solicite dois números ao usuário e determine qual é o maior deles. Se forem iguais, o programa deve informar isso.

8- Verificação de idade:
Escreva um programa que solicite a idade de uma pessoa e determine se ela é maior de idade
(idade maior ou igual a 18 anos) ou menor de idade (idade menor que 18 anos).

9- Classificação de triângulos:
Escreva um programa que solicite três comprimentos ao usuário, que representam os lados de um triângulo. O programa deve
determinar se o triângulo é equilátero (todos os lados iguais), isósceles (dois lados iguais) ou escaleno (todos os lados diferentes).

## Entrega
Envie todos os exercícios para um repositório do Github chamado `sesi_iot_estudando_python_2026` contendo um README.md com:
- Título: Estudando Python
- Descrição: Lista de exercícios de Python resolvida em aula do SESI SENAI no curso Técnico em Desenvolvimento de Sistemas.
- Tecnologias
    - Python
    - VsCode
- Para testar
```bash
pytnon nome_arquivo.py
```
Apresente o diretório para o **professor vistar**:

</details>

---

## Desafios
Desenvolva em Python os desafios a seguir, preferencialmente sem utilizar IA.

### Instruções
- O Objetivo é treinar seu raciocínio lógico
- Capacidade de resolver problemas
    - Decompor
    - Encontrar padrões
    - Escrever algoritmos
- Crie uma pasta chamada `desafios` que será o seu repositório no github, todos os desafios podem ser colocados neste repositório.
    - Para cada desafio crie uma **subpasta** com o nome do desafio
        - A subpasta deve conter pelo menos quatro arquivos, entrada.txt, saida.txt, 'nome_desafio.py' e README.md com a descrição do desafio.

<details><summary><h3>

Fechem as portas!

</h3></summary>

- Nome do arquivo fonte: `portas.py`
### Descrição
Madame Beauvoir possui uma mansão onde ela recebe todos os seus descendentes (netos e bisnetos) durante as férias. Sua mansão possui exatamente N quartos (cada quarto é numerado de1 a N), onde N é também a quantidade de netos e bisnetos (cada descendente é também numerado de 1 a N).
<br>Como toda criança, os descendentes de Mme. Beauvoir são bastante travessos. Todo dia é a mesma confusão: eles acordam de manhã cedo antes dela e se encontram no grande jardim. Cada descendente, um de cada vez, entra na mansão e troca o estado das portas dos quartos cujos números são múltiplos do seu identificador. Trocar o estado de uma porta significa fechar uma porta que estava aberta ou abrir uma porta que estava
fechada. Por exemplo, o descendente cujo identificador é igual a 15 vai trocar o estado das portas 15, 30, 45, etc.
<br>Considerando que todas as portas estão inicialmente fechadas (todos os descendentes fecham as portas antes de descer para o jardim) e que cada descendente entra exatamente uma vez na mansão (a confusão é tão grande que não sabemos em que ordem), quais portas estarão abertas após a entrada de todos os descendentes na mansão?

### Entrada
A entrada contém vários casos de teste. Cada caso de teste consiste em uma linha que contém um inteiro N (0 <= N <= 25.000.000), indicando o número de portas e descendentes.
- O final da entrada é indicado por N = 0.
- A entrada deverá ser lida de um arquivo texto chamado `entrada.txt`.

### Saída
Para cada caso de teste da entrada seu programa deve produzir uma linha na saída, contendo a sequência crescente de números correspondente aos identificadores dos quartos cujas portas estarão abertas.
- Ao imprimir a sequência, deixe um espaço em branco entre dois elementos consecutivos.
- A saída deverá ser escrita em um arquivo texto chamado `saida.txt`.

|Exemplo de entrada|Saída para o exemplo de entrada|
|-|-|
|1| 1|
|2| 1|
|3| 1|
|4| 1 4|
|0||

</details>
<details><summary><h3>

Esquerda, Volver!

</h3></summary>

- Nome do arquivo fonte: `esquerda.py`

### Descrição
Este ano o sargento está tendo mais trabalho do que de costume para treinar os recrutas. Um deles é muito atrapalhado, e de vez em quando faz tudo errado – por exemplo, ao invés de virar à a direita quando comandado, vira à esquerda, causando grande confusão no batalhão.
<br>O sargento tem fama de durão e não vai deixar o recruta em paz enquanto este não aprender a executar corretamente os comandos. No sábado a tarde, enquanto todos os outros recrutas estão de folga, ele obrigou o recruta a fazer um treinamento extra.
<br>Com o recruta marchando parado no mesmo lugar, o sargento emitiu uma série de comandos “esquerda volver!” e “direita volver!”. A cada comando, o recruta deve girar sobre o mesmo ponto e dar um quarto de volta na direção correspondente ao comando.
- Por exemplo, se o recruta está inicialmente como rosto voltado para a direção norte, após um comando de “esquerda volver!” ele deve ficar com o rosto voltado para a direção oeste.
- Se o recruta está inicialmente com o rosto voltado para o leste, após um comando “direita, volver!” ele deve ter o rosto voltado para o sul.
<br>No entanto, durante o treinamento, em que o recruta tinha inicialmente o rosto voltado para o norte, o sargento emitiu uma série tão extensa de comandos, e tão rapidamente, que até ele ficou confuso, e não sabe mais para qual direção o recruta deve ter seu rosto voltado após executar todos os comandos. Você pode ajudar o sargento?

### Entrada
A entrada contém vários casos de teste. A primeira linha de um caso de teste contém um inteiro N que indica o número de comandos emitidos pelo sargento (1 <= N <= 1.000).
<br>A segunda linha contém N caracteres, descrevendo a série de comandos emitidos pelo sargento. Cada comando é representado por uma letra: “E” (para “esquerda, volver!”) e “D” (para “direita, volver!”). O final da entrada é indicado por N = 0.
- A entrada deverá ser lida de um arquivo texto chamado `entrada.txt`.
### Saída
Para cada caso de teste da entrada seu programa deve produzir uma única linha da saida, indicando a direção para a qual o recruta deve ter sua face voltada após executar a série de comandos, considerando que no início o recruta tem a face voltada para o norte.
- A linha deve conter uma letra entre ‘N’, ‘L’, ‘S’ e ‘O’, representando respectivamente as direções norte, leste, sul e oeste.
- A saída deverá ser escrita em um arquivo texto chamado `saida.txt`.

|Exemplo de entrada|Saída para o exemplo de entrada|
|-|-|
|3<br>DDE<br>2<br>EE<br>0|L<br>S|

</details>
<details><summary><h3>

Suco de Acerola

</h3></summary>

- Nome do arquivo fonte: `suco.py`

### Descrição
Natural das Antilhas, a acerola (Malpighia glabra Linn, também conhecida como cereja das Antilhas) já era apreciada pelos nativos das Américas há muitos séculos. Mas o grande interesse por essa fruta surgiu na década de 1940, quando cientistas porto-riquenhos descobriram que a acerola contém grande quantidade de Ácido ascórbico (vitamina C). 
<br>A acerola apresenta, em uma mesma quantidade de polpa, até 100 vezes mais vitamina C do que a laranja e o limão, 20 vezes mais do que a goiaba e 10 vezes mais do que o caju e a amora.
<br>Um grupo de amigos está visitando o Sítio do Picapau Amarelo, renomado produtor de acerola. Com a permissão de Dona Benta, dona do sítio, colheram uma boa quantidade de frutas, e pretendem agora fazer suco de acerola, que será dividido igualmente entre os amigos durante o lanche da tarde.
- Conhecendo o número de amigos, a quantidade de frutas colhidas, e sabendo que cada unidade da fruta é suficiente para produzir 50 ml de suco, escreva um programa para determinar qual o volume, em litros, que cada amigo poderá tomar.

### Entrada
A entrada contém vários casos de teste. Cada caso de teste é composto por uma única linha, contendo dois números inteiros N e F, indicando respectivamente o número de amigos (1 <= N <= 103) e a quantidade de de frutas colhidas (1 <= F <= 103).
- O final da entrada é indicado por uma linha que contém apenas dois zeros, separados por um espaço em branco.
- A entrada deverá ser lida de um arquivo texto chamado `entrada.txt`.

### Saída
Para cada caso de teste da entrada seu programa deve imprimir uma única linha, contendo um número real, escrito com precisão de duas casas decimais, representando o volume de suco, em litros, a que cada amigo tem direito.
- A saída deverá ser escrita em um arquivo de texto chamado `saida.txt`.

|Exemplo de entrada|Saída para o exemplo de entrada|
|-|-|
|1 1<br>5 431<br>101 330<br>0 0|0.05<br>4.31<br>0.16|

</details>
<details><summary><h3>

Help!

</h3></summary>

- Nome do arquivo fonte: `help.py`

### Descrição
Bem, temos que admitir: precisamos da sua ajuda. Neste ano as coisas não estão correndo muito bem como gostaríamos, e não pudemos terminar o software do sistema de competição a tempo. Uma parte vital foi esquecida, e até onde sabemos, precisaremos do sistema funcionando esta tarde, para a competição oficial.
<br>A parte esquecida é o módulo que computa o placar dos times, dando a relação das suas submissões.
<br>Por favor, nos ajude!

### Entrada
A entrada contém vários casos de teste. A primeira linha de um caso de teste contém um número inteiro N indicando o número de submissões neste teste ( 1 <= N <=300).
- Cada uma das N linhas descreve uma submissão; cada uma dessas linhas contém um identificador de problema (uma letra de “A” a “Z”), seguida de um número inteiro T representando o tempo em minutos (0 <= T <= 300), seguido de um julgamento (a palavra “correct” (correto) ou a palavra “incorrect” (errado)). A entrada é ordenada em ordem ascendente de tempo, e haverá no máximo um julgamento “correct” (correto) para cada problema.
- O final do arquivo é indicado por N = 0.
- A entrada deverá ser lida de um arquivo texto chamado `entrada.txt`.

### Saída
Para cada caso de teste de entrada seu programa deve imprimir uma única linha de saída contendo dois números inteiros S e P, separados por um espaço, onde o S é o número de problemas distintos com um julgamento “correct” (correto) e P é a somatória dos tempos que cada problema distinto foi julgado “correct” (correto) pela primeira vez, mais 20 para cada submissão “incorrect” (errada) de um problema que mais tarde tenha
sido julgado “correct” (correto).
- A saída deverá ser escrita em um arquivo texto chamado `saida.txt`.

|Exemplo de entrada|Saída para o exemplo de entrada|
|-|-|
|3<br>A 120 incorrect<br>A 130 incorrect<br>A 200 incorrect<br>5<br>A 100 correct<br>B 110 incorrect<br>B 111 correct<br>C 200 correct<br>D 300 incorrect<br>0|0 0<br>3 431|

</details>

## Entregas
Repositório do github contendo os 4 desafios descritos e solucionados
- Mostre ao instrutor para o visto