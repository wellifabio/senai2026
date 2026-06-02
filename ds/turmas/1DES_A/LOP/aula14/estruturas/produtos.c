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
	struct Produto p[6];
	
	strcpy(p[0].nome, "Caneta"); p[0].preco = 8.9; p[0].quantidade = 100;
	strcpy(p[1].nome, "Caderno"); p[1].preco = 28.9; p[1].quantidade = 20;
	strcpy(p[2].nome, "Lápis"); p[2].preco = 3.9; p[2].quantidade = 100;
	strcpy(p[3].nome, "Borracha"); p[3].preco = 4.9; p[3].quantidade = 100;
	strcpy(p[4].nome, "Régua"); p[4].preco = 8.9; p[4].quantidade = 50;
	strcpy(p[5].nome, "Apontador"); p[5].preco = 10.9; p[5].quantidade = 50;
	
	double total = 0;
	printf("Produto\tPreço\tQtd.\tTotal\n");
	for(int i=0; i < 6; i++){
		p[i].total = p[i].preco * p[i].quantidade;
		total += p[i].total;//acumulador
		printf("%s\t%.2f\t%d\t%.2f\n", p[i].nome, p[i].preco, p[i].quantidade, p[i].total);	
	}
	printf("Total geral R$ %.2f", total);
	
	getch();
}