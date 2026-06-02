#include<stdio.h>
#include<windows.h>
struct Cliente{
	char nome[50];
	int idade;
	char email[100];
};
void main(){
	SetConsoleOutputCP(65001);
	struct Cliente c1, c2, c3;
	
	strcpy(c1.nome, "João da Silva");
	c1.idade = 18;
	strcpy(c1.email,"joao@email.com");
	strcpy(c2.nome, "Maria da Oliveira");
	c2.idade = 25;
	strcpy(c2.email,"maria@email.com");
	strcpy(c3.nome, "Ana da Silva");
	c3.idade = 48;
	strcpy(c3.email,"ana@email.com");	
	
	printf("%s, %d, %s\n", c1.nome, c1.idade, c1.email);
	printf("%s, %d, %s\n", c2.nome, c2.idade, c2.email);
	printf("%s, %d, %s\n", c3.nome, c3.idade, c3.email);
	getch();
}