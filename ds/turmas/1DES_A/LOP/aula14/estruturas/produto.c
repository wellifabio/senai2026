#include<stdio.h>
#include<windows.h>
struct Produto{
	char nome[50];
	float preco;
	int quantidade;
};
void main(){
	SetConsoleOutputCP(65001);
	struct Produto p1, p2, p3;
	
	strcpy(p1.nome, "Caneta");
	p1.preco = 8.9;
	p1.quantidade = 100;
	strcpy(p2.nome, "Borracha");
	p2.preco = 5.5;
	p2.quantidade = 100;
	strcpy(p3.nome, "Caderno");
	p3.preco = 39.9;
	p3.quantidade = 20;
		
	printf("%s, %.2f, %d\n", p1.nome, p1.preco, p1.quantidade);
	printf("%s, %.2f, %d\n", p2.nome, p2.preco, p2.quantidade);
	printf("%s, %.2f, %d\n", p3.nome, p3.preco, p3.quantidade);
	getch();
}