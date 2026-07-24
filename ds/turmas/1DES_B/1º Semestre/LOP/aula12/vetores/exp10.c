#include <stdio.h>
void main(){
	int matriz[5][5]={
		{ 1, 18, 4, 7, 3 },
		{ 10, 8, 14, 17, 31 },
		{ 11, 81, 41, 71, 13 },
		{ 19, 24, 4, 70, 30 },
		{ 27, 18, 4, 70, 33 },
	};
	
	//Percorra a matriz e mostre seu conteúdo
	for(int i = 0; i < 5; i++){ //Mostra as linhas
		for(int j = 0; j < 5; j++){ //Mostra as colunas
			printf("%d ", matriz[i][j]);
		}
		printf("\n");
	}
	getch();
}