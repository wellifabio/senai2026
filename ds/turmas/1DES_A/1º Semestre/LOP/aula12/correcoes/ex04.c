#include<stdio.h>
#include<windows.h>
#include<time.h>

void main(){
	SetConsoleOutputCP(CP_UTF8);
	
	int m[5][5];
	int menor = 101;
	int p[2];
	
	srand(time(NULL));
	
	printf("\tA\tB\tC\tD\tE\n");
	for(int i = 0; i < 5; i++){
		printf("%d\t",i + 1);
		for(int j = 0; j < 5; j++){
			m[i][j] = rand() % 101;
			printf("%3d\t", m[i][j]);
			if(m[i][j] < menor){
				menor = m[i][j];
				p[0] = i;
				p[1] = j;
			}
		}
		printf("\n");
	}
	
	printf("O menor número gerado é %d na posição %c%d", menor, p[1] + 65, p[0] + 1);
	getch();
}