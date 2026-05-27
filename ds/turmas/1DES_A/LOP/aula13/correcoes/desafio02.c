#include<stdio.h>
#include<windows.h>

//Função recursiva
int fat(int x){
	if(x == 0 || x == 1){
		return 1;
	} else{
		return x * fat(x - 1);
	}
}

void main(){
	SetConsoleOutputCP(CP_UTF8);
	int n;
	do{
		printf("Digite um número inteiro positivo:");
		scanf("%d", &n);
	}while(n <= 0);
	printf("%d! = %d", n, fat(n));
	getch();
}