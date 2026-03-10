# Aula05 - Linguagem C
- Baixar o IDE dev c++, digite no google "dev c++" e acesse o site da **Embarcadero** para fazer o download.
- Descompacte o arquivo e instale no Windows com o protocolo NNF (Next, Next, Finish)
## Alô mundo
Vamos criar nosso primeiro programa chamado "alo.c" salve em Documentos
```c
#include <stdio.h>
void main(){
    printf("Alô mundo!");
}
```
## Ascii
Tabela de caracteres exemplo:
|Ascci|Caracter|
|-|-|
|48|0|
|49|1|
|50|2|
|51|3|
|...|...|

|Ascci|Caracter|
|-|-|
|65|A|
|66|B|
|67|C|
|68|D|
|...|...|

|Ascci|Caracter|
|-|-|
|97|a|
|98|b|
|99|c|
|100|d|
|...|...|

## Notação especial %
|%|Descrição|
|-|-|
|%d|Inteiros|
|%f|Reais, ponto flutuante|
|%c|caracter|
|%s|String (texto)|
|%[^\n]|String (ler texto com espaços)|
|\n|Terminador **Enter**|

### Exemplos
```c
#include <stdio.h>
void main(){
	//Variáveis
	int a, b, c;
	//Entrada
	printf("Digite um númeo inteiro\n");
	scanf("%d",&a);
	printf("Digite outro número inteiro\n");
	scanf("%d",&b);
	//Processamento
	c = a + b;
	//Saída
	printf("A soma dos dois números é %d",c);
	getch();
}
```
- 2 reais.c
```c
#include <stdio.h>

void main(){
	float x, y, z;
	printf("Digite um número real\n");
	scanf("%f", &x);
	printf("Digite outro número real\n");
	scanf("%f", &y);
	z = x / y;
	printf("O primeiro número\ndividido pelo segundo\né %.2f", z);
	getch();
}
```
- 3 char.c
```c
#include <stdio.h>

void main(){
	char a, b, c;
	printf("Digite um caracter\n");
	scanf(" %c", &a);
	printf("Digite outro caracter\n");
	scanf(" %c", &b);
	c = a + b;
	printf("A soma dos dois caracteres é %c",c);	
	getch();
}
```
- 4 string.c
```c
#include<stdio.h>

void main(){
	char nome1[100], nome2[100];
	
	printf("Digite seu nome:\n");
	scanf("%[^\n]", &nome1);
	fflush(stdin);
	printf("Digite outro nome:\n");
	scanf("%[^\n]", &nome2);
	fflush(stdin);
	
	printf("O primeiro nome é %s\n", nome1);
	printf("O segundo nome é %s\n", nome2);
	getch();
}
```
## Atividades
Agora faça alista com 10 exercícios da aula03 com a linguagem **c** nomeie como ex1.c, ex2.c, etc.

|Lista 01 (Lista de exercícios)|
|-|
|1) Desenvolva um programa que leia três variáveis (a, b, c) e resolva a expressão: ( a + b ) / c.|
|2) Desenvolva um programa que leia a velocidade de um carro (km/h) e a distância a ser percorrida (km) por ele. Calcule apresente na tela, quanto tempo (horas) será necessário para o carro percorrer a distância informada.|
|3) Desenvolva um programa que leia o nome e o salário de uma pessoa, depois leia o valor do índice percentual (%) de reajuste do salário. Calcule e apresente na tela, o valor do novo salário e o nome da pessoa.|
|4) Desenvolva um programa que leia o nome de um time de futebol, o número de vitórias e o número de empates. O  algoritmo deverá calcular e apresentar na tela, o nome do time e o total de pontos. Lembrando que a vitória vale 3 pontos e o empate vale 1 ponto.|
|5) Desenvolva um programa que leia um número ”n” inteiro, positivo e diferente de zero e apresente na tela: n – 1, e também n + 1.|
|6) Sabendo-se que a velocidade de cruzeiro de um avião 747-300 é de 900 km/h, faça um programa que leia uma distância (km), calcule e apresente na tela, quanto tempo (horas) será necessário para um 747-300 sobrevoar a distância informada.|
|7) Um caminhão consegue transportar 18 toneladas de laranjas em uma viagem que faz entre a fazenda e a fábrica de suco de laranja. Um alqueire de terra produz em média 250 toneladas de laranjas. Faça um programa que leia quantos caminhões e quantos alqueires uma fazenda produtora de laranjas possui, calcule e apresente na tela quantas viagens de caminhão serão necessárias para transportar toda a colheita de laranjas.|
|8) Desenvolva um programa que leia o raio (cm) e a altura (cm) de um cilindro. Calcule e mostre a área (cm2) e o volume (cm3) do cilindro.|
|9) Desenvolva um programa que leia o nome e o preço de uma mercadoria. O programa deverá calcular um aumento de 5% no preço da mercadoria e mostrar o nome da mercadoria e o seu novo preço.|
|10) Desenvolva um programa que leia o nome de uma cidade, o número total de eleitores e o número total de votos apurados na última eleição. O programa deverá calcular e exibir a porcentagem de participação dos eleitores desta cidade na última eleição.|