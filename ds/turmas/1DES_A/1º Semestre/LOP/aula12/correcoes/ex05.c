#include<stdio.h>
#include<windows.h>
#include<time.h>

void main(){
	SetConsoleOutputCP(CP_UTF8);
	int v[25];
	int num, encontrado = -1;
	
	srand(time(NULL));
	
	printf("Indice\tValor\n");
	for(int i = 0; i < 25; i++){
		v[i] = rand() % 101;
		printf("%d\t[%3d]\n", i, v[i]);
	}
	printf("Digite um número de 0 a 100\n");
	scanf("%d", &num);
	
	//SeeK - Pesquise
	for(int i = 0; i < 25; i++){
		if(num == v[i]){
			encontrado = i;
		}
	}
	
	if(encontrado != -1){
		printf("O número foi encontrado na posição %d.", encontrado);
	}else{
		printf("O número não foi encontrado.");
	}
	getch();
}