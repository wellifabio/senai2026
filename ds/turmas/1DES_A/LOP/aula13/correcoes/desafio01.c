#include<stdio.h>
#include<windows.h>

int somar(int x, int y){
	return x + y;
}
int subtrair(int x, int y){
	return x - y;
}
int multiplicar(int x, int y){
	return x * y;
}
float dividir(int x, int y){
	if(y == 0){
		return 0;
	}else{
		return x / (float)y;
	}
}
void main(){
	SetConsoleOutputCP(CP_UTF8);
	int a, b;
	char op;
	printf("Digite dois números inteiros:\n");
	scanf("%d %d", &a, &b);
	printf("Escolha a opção:\n");
	printf("'+' Somar\n'-' Subtrair'\n'*' Multiplicar\n'/' Dividir:\n");
	scanf(" %c", &op);
	switch(op){
		case '+': printf("A soma de %d + %d = %d", a, b, somar(a, b)); break;
		case '-': printf("A subtração de %d - %d = %d", a, b, subtrair(a, b)); break;
	    case '*': printf("A multiplicação de %d x %d = %d", a, b, multiplicar(a, b)); break;
		case '/': printf("A divisão de %d ÷ %d = %.2f", a, b, dividir(a, b)); break;
		default: printf("Opção inválida");
	}
	getch();
}