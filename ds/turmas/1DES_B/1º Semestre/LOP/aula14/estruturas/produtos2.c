#include <stdio.h>
#include <windows.h>

struct Produto{
	char nome[50];
	float preco;
	int quantidade;
};

void main(){
	SetConsoleOutputCP(CP_UTF8);
	struct Produto produtos[3];
	
	strcpy(produtos[0].nome,"Caneta");
	produtos[0].preco = 5.99;
	produtos[0].quantidade = 10;
	
	strcpy(produtos[1].nome,"Lápis");
	produtos[1].preco = 3.99;
	produtos[1].quantidade = 10;
	
	strcpy(produtos[2].nome,"Cadero");
	produtos[2].preco = 25.90;
	produtos[2].quantidade = 10;
	
	printf("Produto\tPreço\tQtd.\n");
	for(int i = 0; i < 3; i++){
		printf("%s\t%.2f\t%d\n",produtos[i].nome,produtos[i].preco,produtos[i].quantidade);
	}
	
	getch();
}