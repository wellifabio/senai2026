#include<stdio.h>
#include<windows.h>
struct Produto{
	char nome[50];
	float preco;
	int quantidade;
	double total;
};
void main(){
	SetConsoleOutputCP(65001);
	int quantos;
	//Entradas
	printf("Digite quantos produtos:");
	scanf("%d", &quantos);
	struct Produto p[quantos];
	printf("Produto\tPreço\tQtd.\n");
	for(int i = 0; i < quantos; i++){
		scanf("%s %f %d", &p[i].nome, &p[i].preco, &p[i].quantidade);
	}
	//Processamento e saídas
	double total = 0;
	printf("Produto\tPreço\tQtd.\tTotal\n");
	for(int i=0; i < quantos; i++){
		p[i].total = p[i].preco * p[i].quantidade;
		total += p[i].total;//acumulador
		printf("%s\t%.2f\t%d\t%.2f\n", p[i].nome, p[i].preco, p[i].quantidade, p[i].total);	
	}
	printf("Total geral R$ %.2f", total);
	
	getch();
}