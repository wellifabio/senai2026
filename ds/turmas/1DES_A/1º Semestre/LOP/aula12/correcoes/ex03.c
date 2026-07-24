#include<stdio.h>
#include<windows.h>
#include<time.h>

void main(){
	SetConsoleOutputCP(CP_UTF8);
	int v[25];
	int maior = 0;
	
	srand(time(NULL));
	
	printf("Indice\tValor\n");
	for(int i = 0; i < 25; i++){
		v[i] = rand() % 21;
		printf("%d\t[%3d]\n", i, v[i]);
		if(v[i] > maior){
			maior = v[i];
		}
	}
	
	printf("O maior número gerado foi [%d] nas posições: ", maior);
	for(int i = 0; i < 25; i++){
		if(v[i] == maior){
			printf("%d ",i);
		}
	}
	getch();
}