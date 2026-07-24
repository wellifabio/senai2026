#include <stdio.h>
#include <windows.h>
#include <stdlib.h>
#include <time.h>

struct Produto{
	char nome[50];
	float preco;
	int quantidade;
	float total;
};

void main(){
	SetConsoleOutputCP(CP_UTF8);
	struct Produto produtos[6];
	char nomes[6][50] = {
		"Lápis",
		"Borracha",
		"Caneta",
		"Caderno",
		"Régua",
		"Tesoura"
	};
	
	
	srand(time(NULL));
	for(int i = 0; i < 6; i++){
		strcpy(produtos[i].nome,nomes[i]);
		produtos[i].preco = rand() % 101 / (float) 10;
		produtos[i].quantidade = rand() % 101;
	}
	
	printf("Produto\tPreço\tQtd.\tTotal\n");
	for(int i = 0; i < 6; i++){
		produtos[i].total = produtos[i].preco * produtos[i].quantidade;
		printf("%s\t%.2f\t%d\t%.2f\n",produtos[i].nome,produtos[i].preco,produtos[i].quantidade,produtos[i].total);
	}
	
	getch();
}