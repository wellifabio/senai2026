#include<stdio.h>
#include<stdlib.h>
#include<time.h>
void main(){
	//Sortear um nome aleatório
	char nomes[7][50] = {
	"Jacinto Pena",
	"Jacinto Paixão",
	"Jacinto Amor",
	"Osmar Motta",
	"Osmar Educado",
	"Osmar Dito",
	"Osmar Amado",
	};
	srand(time(NULL)); //A partir do tempo do PC
	int i = rand() % 7; //Gerar numero aleatório de 0 a 6
	printf("%s\n", nomes[i]);
	getch();
}