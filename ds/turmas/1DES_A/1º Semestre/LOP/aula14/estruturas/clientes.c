#include<stdio.h>
#include<stdlib.h>
#include<windows.h>
#include<time.h>
struct Cliente{
	char nome[50];
	int idade;
	char email[100];
};
void main(){
	SetConsoleOutputCP(65001);
	struct Cliente clis[5];
	srand(time(NULL));
	strcpy(clis[0].nome,"Joaquin Silva");
	strcpy(clis[1].nome,"Osmar Motta");
	strcpy(clis[2].nome,"Paula Souza");
	strcpy(clis[3].nome,"Jacinto Pena");
	strcpy(clis[4].nome,"Ivone Hortega");
	strcpy(clis[0].email,"joaquin@email.com");
	strcpy(clis[1].email,"osmar@email.com");
	strcpy(clis[2].email,"paula@email.com");
	strcpy(clis[3].email,"jacinto@email.com");
	strcpy(clis[4].email,"ivone@email.coma");
	for(int i = 0; i < 5; i++){
		clis[i].idade = (rand() % 86) + 15;
		printf("%s, %d, %s\n", clis[i].nome, clis[i].idade, clis[i].email);
	}	
	getch();
}