# Aula06 - if

## Exemplos:
If sem Else
```c
#include<stdio.h>
void main(){
	int limite = 1000, peso;
	printf("Digite o peso da carga do caminhão:\n");
	scanf("%d", &peso);
	if(peso > limite){
		printf("Limite de peso excedido.\n");
	}
	printf("Boa viagem.\n");
	getch();
}
```
If com Else
```c
#include<stdio.h>
void main(){
	int limite = 1000, peso;
	printf("Digite o peso da carga do caminhão:\n");
	scanf("%d", &peso);
	if(peso > limite){
		printf("Limite de peso excedido.\n");
	} else {
		printf("Boa viagem.\n");
	}
	getch();
}
```
If com Else If
```c
#include<stdio.h>
void main(){
	//Regra de negócio: podemos exceder em até 100 kilos o limite
	int limite = 1000, peso;
	printf("Digite o peso da carga do caminhão:\n");
	scanf("%d", &peso);
	if(peso < limite){
		printf("Boa viagem.\n");
	}else if(peso < limite + 100){
		printf("Boa viagem, limite excedido dentro da tolerância.\n");
	}else{
		printf("Limite excedido, viagem proibida.\n");
	}
	getch();
}
```

## Atividades
Agora desenvolva em linguagem C os 13 exercícios que fizemos os algoritmos e fluxogramas da ula04.

|Lista de exercícios com condicionais|
|-|
|1. Desenvolva um programa que leia um número inteiro. Se o número for maior que zero, mostre na tela "Número positivo” caso contrário "Número negativo".|
|2. Desenvolva um programa que calcule a idade de uma pessoa. Se a idade for maior ou igual a 18, mostre "Maior de idade”. Caso contrário, mostre "Menor de idade".|
|3. Desenvolva um programa que calcule a média de um aluno. Se a nota for maior ou igual a 7, mostre "Aprovado”. Caso contrário, mostre "Reprovado".|
|4. Desenvolva um programa que leia dois números inteiros. Mostre na tela qual é o maior número. Caso sejam iguais, mostre "Números iguais".|
|5. Desenvolva um programa que leia o salário de um funcionário.:<br>- Se o salário for até 1800, aplique um reajuste de 15%.<br>- Caso contrário, aplique um reajuste de 10%.<br>- Mostre o novo salário.|
|6. Desenvolva um programa que leia a quantidade de pontos de um time.<br>- Se os pontos forem maiores ou iguais a 20, mostre "Classificado".<br>- Se os pontos forem maiores ou iguais a 10 e menores que 20, mostre "Em disputa".<br>- Caso contrário, mostre "Eliminado".|
|7. Desenvolva um programa que leia três números inteiros. Mostre na tela qual é o maior número entre eles.|
|8. Desenvolva um programa que leia o valor de uma compra.<br>- Se o valor for maior que 500, aplique um desconto de 10%.<br>- Se o valor for maior que 200 e menor ou igual a 500, aplique desconto de 5%.<br>- Caso contrário, não aplicar desconto.<br>- Mostre o valor final da compra.|
|9. Desenvolva um programa que leia um número inteiro.<br>- Se o número for maior que 100, mostre "Maior que 100".<br>- Caso contrário, mostre "Menor ou igual a 100".|
|10. Desenvolva um programa que leia a idade de uma pessoa.<br>- Se a idade for menor que 12, mostre "Criança".<br>- Se a idade for maior ou igual a 12 e menor que 18, mostre "Adolescente".<br>- Caso contrário, mostre "Adulto".|
|11. Desenvolva um programa que leia o turno em que um aluno estuda (M para matutino, V para vespertino, N para noturno).<br>- Se for M, mostre "Bom dia"<br>- Se for V, mostre "Boa tarde".<br>- Se for N, mostre "Boa noite".<br>- Caso contrário, mostre "Turno inválido".|
|12. Desenvolva um programa que leia o ano de nascimento de uma pessoa e o ano atual. Calcule a idade.<br>- Se a idade for maior ou igual a 16, mostre "Pode votar".<br>- Caso contrário, mostre "Não pode votar".
|13. Desenvolva um programa que leia três notas de um aluno e calcule a média.<br>- Se a média for maior ou igual a 7, mostre "Aprovado".<br>- Se a média for maior ou igual a 5 e menor que 7, mostre "Recuperação"<br>- Caso contrário, mostre "Reprovado".|