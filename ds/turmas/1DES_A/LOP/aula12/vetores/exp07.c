#include<stdio.h>
#include<stdlib.h>
#include<time.h>
void main(){
	//Gerar 10 números aleatórios inteiros de 20 a 50
	int numeros[10];
	//Pega o tempo atual
	srand(time(NULL));
	//Gerar 10 números a partir do tempo
	for(int i = 0; i < 10; i++){
		float x = (rand() % 31)+20; 
		numeros[i] = x;
	}
	//Mostar os números gerados
	for(int i = 0; i < 10; i++){
		printf("%d\n",numeros[i]);
	}		
	getch();
}