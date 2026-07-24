#include<stdio.h>
#include<time.h>
#include<windows.h>
void main(){
	SetConsoleOutputCP(CP_UTF8);
	int m[5][5];
	srand(time(NULL));
	int menor = 101;
	int posicao[2];
	
	printf("\tA\tB\tC\tD\tE\n");
	for(int i = 0; i < 5; i++){ //linha
		printf("%d\t", i + 1);
		for(int j = 0; j < 5; j++){ //Coluna
			m[i][j] = rand() % 101; //Aleatórios de 0 a 100
			printf("%d\t",m[i][j]);
			if(m[i][j] < menor){
				menor = m[i][j];
				posicao[0] = i;
				posicao[1] = j;
			}
		}
		printf("\n");
	}
	printf("O menor número é: %d\n", menor);
	printf("Ná posição %c%d (Excel)\n", posicao[1] + 65, posicao[0] + 1);
	getch();
}