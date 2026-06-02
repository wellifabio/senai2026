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
	struct Produto p;
	
	strcpy(p.nome, "Caneta");
	p.preco = 8.9;
	p.quantidade = 100;
	p.total = p.preco * p.quantidade;
	
	printf("%s, %.2f, %d, %.2f\n", p.nome, p.preco, p.quantidade, p.total);
	getch();
}