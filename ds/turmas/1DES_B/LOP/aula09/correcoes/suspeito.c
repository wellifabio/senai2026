#include<stdio.h>
#include<windows.h>
void main(){
	SetConsoleOutputCP(CP_UTF8);
	char resp;
	int cont;
	printf("Você é suspeito de um crime, responda as questões a seguir\n");
	do{
		cont = 0;
		
		printf("Telefonou para a vítima? s/n\n");
		scanf(" %c", &resp);
		if(resp == 's')	cont++;
		printf("Esteve no local do crime? s/n\n");
		scanf(" %c", &resp);
		if(resp == 's') cont++;
		printf("Mora perto da vítima? s/n\n");
		scanf(" %c", &resp);
		if(resp == 's') cont++;
		printf("Devia para a vítima? s/n\n");
		scanf(" %c", &resp);
		if(resp == 's') cont++;
		printf("Já trabalhou com a vítima? s/n\n");
		scanf(" %c", &resp);
		if(resp == 's') cont++;
		
		if(cont > 4) printf("Você é o assacino! s/n\n");
		else if(cont > 2) printf("Você é cúmplice! s/n\n");
		else if(cont > 1) printf("Você é suspeito! s/n\n");
		else printf("Você é inocente! s/n\n");
		
		printf("Mais algum suspeito! s/n\n");
		scanf(" %c", &resp);
	}while(resp == 's');
	getch();
}