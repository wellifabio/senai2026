#include<stdio.h>
#include<windows.h>

int ehPrimo(int x){
	if(x > 3){
		for(int i = x / 2; i > 1; i--){
			if(x % i == 0){
				return 0;
			}
		}
	}else{
		return 1;
	}
	return 1;
}

void main(){
	SetConsoleOutputCP(CP_UTF8);
	int n;
	printf("Digite um número inteiro maior que 0:\n");
	scanf("%d", &n);
	if(ehPrimo(n)){
		printf("%d é primo", n);
	}else{
		printf("%d não é primo", n);
	}
}