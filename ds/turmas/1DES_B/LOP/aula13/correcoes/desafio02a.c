#include<stdio.h>
#include<windows.h>

int fat(int x){
	//Fatorial com laço de repetição for
	for(int i = x - 1; i > 1; i--){
		x = x * i; 
	}
	return x;
}

void main(){
	SetConsoleOutputCP(CP_UTF8);
	int n;
	char op;
	printf("Digite um número inteiro maior que 0:\n");
	scanf("%d", &n);
	printf("%d! = %d", n, fat(n));
	getch();
}