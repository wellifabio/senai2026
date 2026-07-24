#include<stdio.h>
#include<time.h>
#include<windows.h>
void main(){
	int v[25];
	int n, encontrado = -1;
	srand(time(NULL));
	SetConsoleOutputCP(CP_UTF8);
	
	printf("Pos.\tNum.\n");
	for(int i = 0; i < 25; i++){
		v[i] = rand() % 101; //Aleatórios de 0 a 100
		printf("%d\t%d\n",i,v[i]);
	}
	
	printf("Informe um número de 0 a 100\npara que o programa o procure no vetor\n");
	scanf("%d", &n);
	
	//Algoritmo de busca - conhecido como seek
	for(int i = 0; i < 25; i++){
		if(n == v[i]){
			encontrado = i;
			break;
		}
	}
	
	if(encontrado != -1){
		printf("O número digitado foi encontrado na posição %d\n", encontrado);
	}else{
		printf("O número não foi encontrado.");
	}
	
	getch();
}