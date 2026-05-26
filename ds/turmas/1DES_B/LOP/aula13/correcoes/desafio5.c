#include<stdio.h>
#include<windows.h>

//Função que recebe um ponteiro de vetor e o tamanho, e o ordena
void crescente(int* vetor, int tamanho){
	int aux;
	for(int i = 0; i < tamanho -1; i++){
		for(int j = i + 1; j < tamanho; j++){
			if(vetor[i] > vetor[j]){
				aux = vetor[i];
				vetor[i] = vetor[j];
				vetor[j] = aux;
			}
		}
	}
}

void main(){
	SetConsoleOutputCP(CP_UTF8);
	int n;
	printf("Digite quantos valores o vetor aluno possuirá:\n");
	scanf("%d", &n);
	int vetor[n];
	for(int i = 0; i < n; i++){
		printf("[%d]: ",i);
		scanf("%d", &vetor[i]);
	}
	crescente(vetor, n);
	printf("Vetor ordenado:\n");
	for(int i = 0; i < n; i++){
		printf("%d[%d]\n", i, vetor[i]);
	}
}