#include <stdio.h>
#include <stdlib.h>
#include <time.h>
void main(){
	//Gerar 10 números inteiros aleatório de 20 a 50
	int numeros[10];
	//Obtem um tempo aleatório do relógio do computador
	srand(time(NULL));
	
	//Preencher o vetor com os números de 20 a 50 e mostrar
	for(int i = 0; i < 10; i++){
		numeros[i] = rand() % 31 + 20;
		printf("%d\n", numeros[i]);
	}
	getch();
}