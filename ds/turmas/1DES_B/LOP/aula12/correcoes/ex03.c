#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#include<windows.h>
void main(){
	SetConsoleOutputCP(CP_UTF8);
	int v[25];
	int maior = 0;
	int posicao;

	srand(time(NULL));
	for(int i = 0; i < 25; i++){
		v[i] = rand() % 101; //Aleatórios de 0 a 100
		printf("%d\n",v[i]);
		if(v[i] > maior){
			maior = v[i];
			posicao = i;
		}
	}
	
	int cont = 0;
	for(int i = 0; i < 25; i++){
		if(v[i] == maior){
			cont++;
		}
	}
	
	printf("O maior número é: %d\n", maior);
	printf("Ná posição: %d\n", posicao);
	printf("O número apareceu %d vezes", cont);
	getch();
}