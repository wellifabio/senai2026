#include<stdio.h>
#include<windows.h>

//Função recursiva é aquela que chama ela mesma dentro da função
//Fatorial com função recursiva
int fat(int x){
	if(x == 0 || x == 1)
		return 1;
	else
		return x * fat(x - 1);
}

void main(){
	SetConsoleOutputCP(CP_UTF8);
	int n;
	printf("Digite um número inteiro maior que 0:\n");
	scanf("%d", &n);
	printf("%d! = %d", n, fat(n));
	getch();
}