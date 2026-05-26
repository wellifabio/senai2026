#include<stdio.h>
#include<windows.h>

//retorna 0 se for primo e 1 senão
int ehPrimo(int x){
	if(x < 4){
		return 0;
	}else{
		for(int i = x / 2; i > 1; i--){
			if(x % i == 0){
				return 0;
			}
		}
	}
	return 1;
}

void main(){
	SetConsoleOutputCP(CP_UTF8);
	int n;
	/*
	do{
		printf("Digite um número inteiro positivo maior que 1:");
		scanf("%d", &n);
	}while(n <= 1);
	if(ehPrimo(n)){
		printf("%d é primo", n);
	}else{
		printf("%d não é primo", n);
	}
	*/
	for( int i = 4; i < 10000000; i++){
		if(ehPrimo(i)) printf("%d é primo\n", i);
	}
	
	getch();
}