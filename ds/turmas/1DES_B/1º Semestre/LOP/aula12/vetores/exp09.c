#include <stdio.h>
#include <stdlib.h>
#include <time.h>
void main(){
	char nomes[7][50] = {
		"Osmar Motta",
		"Osmar Educado",
		"Osmar Dito",
		"Osmar Amado",
		"Jacinto Pena",
		"Jacinto Paixão",
		"Jacinto Raiva"
	}; 
	//Sorteie um dos 7 nomes e mostre
	srand(time(NULL));
	int indiceSorteado = rand() % 7;
	printf("Nome sorteado foi %s",nomes[indiceSorteado]);
	
	getch();
}