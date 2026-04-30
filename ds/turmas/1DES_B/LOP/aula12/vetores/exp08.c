#include<stdio.h>
void main(){
	//Um vetor de nomes é uma matriz
	char nomes[7][50] = {
	"Jacinto Pena",
	"Jacinto Paixão",
	"Jacinto Amor",
	"Osmar Motta",
	"Osmar Educado",
	"Osmar Dito",
	"Osmar Amado",
	};
	for(int i = 0; i < 7; i++){
		printf("%s\n", nomes[i]);
	}
	getch();
}