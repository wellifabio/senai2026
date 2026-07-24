#include<stdio.h>
#include<windows.h>

float media(float* notas, int total){
	float calc = 0;
	for(int i = 0; i < total; i++){
		calc += notas[i];
	}
	calc /= total;
	return calc;
}

void main(){
	SetConsoleOutputCP(CP_UTF8);
	int n;
	printf("Digite quantas notas o aluno possui:\n");
	scanf("%d", &n);
	float notas[n];
	for(int i = 0; i < n; i++){
		printf("Digite a %dª nota: ",i+1);
		scanf("%f", &notas[i]);
	}
	printf("A média das notas é %.1f", media(notas, n));
}