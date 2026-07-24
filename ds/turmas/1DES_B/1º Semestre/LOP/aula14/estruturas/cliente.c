#include <stdio.h>
#include <windows.h>

struct Cliente {
	char nome[50];
	int idade;
	char email[100];
};

void main(){
	SetConsoleOutputCP(CP_UTF8);
	struct Cliente cli1;
	struct Cliente cli2;
	struct Cliente cli3;
	
	strcpy(cli1.nome,"João da Silva");
	cli1.idade = 25;
	strcpy(cli1.email,"joao@email.com");
	
	strcpy(cli2.nome,"Maria da Silva");
	cli2.idade = 22;
	strcpy(cli2.email,"maria@email.com");
	
	strcpy(cli3.nome,"Adamastor da Silva");
	cli3.idade = 66;
	strcpy(cli3.email,"adamastor@email.com");
	
	printf("%s, idade: %d, %s\n", cli1.nome, cli1.idade, cli1.email);
	printf("%s, idade: %d, %s\n", cli2.nome, cli2.idade, cli2.email);
	printf("%s, idade: %d, %s\n", cli3.nome, cli3.idade, cli3.email);
	
	getch();
}