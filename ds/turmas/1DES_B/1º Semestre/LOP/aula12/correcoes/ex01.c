#include<stdio.h>
#include<time.h>
void main(){
	int m[5][5];
	srand(time(NULL));
	
	for(int i = 0; i < 5; i++){ //linha
		for(int j = 0; j < 5; j++){ //Coluna
			m[i][j] = rand() % 101; //Aleatórios de 0 a 100
			printf("%d\t",m[i][j]);
		}
		printf("\n");
	}
	getch();
}