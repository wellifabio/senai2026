#include <stdio.h>
#include <stdlib.h>
#include <time.h>
void main(){
	//Gerar 10 números inteiros aleatório de 0 a 100
	int numeros[10];
	//Obtem um tempo aleatório do relógio do computador
	srand(time(NULL));
	
	//Preencher o vetor com os números de 0 a 100
	for(int i = 0; i < 10; i++){
		numeros[i] = rand() % 101;
	}
		
	//Mostrar os números gerados
	for(int i = 0; i < 10; i++){
		printf("%d\n", numeros[i]);
	}
	getch();
}