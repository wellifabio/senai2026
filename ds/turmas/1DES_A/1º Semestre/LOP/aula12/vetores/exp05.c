#include<stdio.h>
#include<stdlib.h>
#include<time.h>
void main(){
	//Gerar números aleatórios
	float numeros[10];
	//Pega o tempo atual
	srand(time(NULL));
	//Gerar 10 números a partir do tempo
	for(int i = 0; i < 10; i++){
		float x = rand();
		numeros[i] = x;
	}
	//Mostar os números gerados
	for(int i = 0; i < 10; i++){
		printf("%.2f\n",numeros[i]);
	}		
	getch();
}