#include<stdio.h>
#include<windows.h>

//Esta função recebe um ponteiro como vetor
float media(float* array, int tamanho){
	float total = 0;
	for(int i = 0; i < tamanho; i++){
		total += array[i];
	}
	return total / tamanho;
}

void main(){
	SetConsoleOutputCP(CP_UTF8);
	int t;
	printf("Digite quantas notas o alunto terá:");
	scanf("%d", &t);
	float notas[t];
	for(int i = 0; i < t; i++){
		printf("%dª nota: ", i + 1);
		scanf("%f", &notas[i]);
	}
	
	printf("A média das notas é %.1f\n", media(notas, t));
	getch();
}