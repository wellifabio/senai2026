#include <stdio.h>
#include <stdlib.h>
#include <time.h>
void main(){
	//Gerar 10 números pseudo aleatório a partir do tempo
	float numeros[10];
	//Obtem um tempo aleatório do relógio do computador
	srand(time(NULL));
	
	//Preencher o vetor com os números
	for(int i = 0; i < 10; i++){
		numeros[i] = rand();
	}
		
	//Mostrar os números gerados
	for(int i = 0; i < 10; i++){
		printf("%f\n", numeros[i]);
	}
	getch();
}