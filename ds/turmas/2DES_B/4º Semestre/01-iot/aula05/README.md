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

## Exercícios
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

9- Verificação de número par ou ímpar:
Escreva um programa que solicite um número ao usuário e determine se ele é par ou ímpar.

10- Classificação de triângulos:
Escreva um programa que solicite três comprimentos ao usuário, que representam os lados de um triângulo. O programa deve
determinar se o triângulo é equilátero (todos os lados iguais), isósceles (dois lados iguais) ou escaleno (todos os lados diferentes).

11- Verificação de ano bissexto:
Escreva um programa que solicite um ano ao usuário e determine se ele é bissexto ou não.
Um ano é bissexto se for divisível por 4, exceto em anos que são divisíveis por 100 mas não são divisíveis por 400.