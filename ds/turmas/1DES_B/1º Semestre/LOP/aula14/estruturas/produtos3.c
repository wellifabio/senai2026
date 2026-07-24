#include <stdio.h>
#include <windows.h>

struct Produto{
	char nome[50];
	float preco;
	int quantidade;
	float total;
};

void main(){
	SetConsoleOutputCP(CP_UTF8);
	int quantos = 0;
	printf("Quantos produtos deseja cadastrar:");
	scanf("%d", &quantos);
	
	struct Produto produtos[quantos];
	for(int i = 0; i < quantos; i++){
		printf("Nome do produto: ");
		scanf(" %s", &produtos[i].nome);
		printf("Preço do produto: ");
		scanf("%f", &produtos[i].preco);
		printf("Quantidade: ");
		scanf("%d", &produtos[i].quantidade);
	}
	
	float total = 0;
	printf("Produto\tPreço\tQtd.\tTotal\n");
	for(int i = 0; i < quantos; i++){
		produtos[i].total = produtos[i].preco * produtos[i].quantidade;
		printf("%s\t%.2f\t%d\t%.2f\n",produtos[i].nome,produtos[i].preco,produtos[i].quantidade, produtos[i].total);
		total += produtos[i].total;
	}
	printf("Total R$ %.2f", total);
	
	getch();
}