#include<stdio.h>
#include<windows.h>
void main(){
	SetConsoleOutputCP(CP_UTF8);
	char nome[20], sexo, continuar = 's';
	int cont = 0, m = 0, f = 0;
	while(continuar == 's'){
		printf("\nQual o seu nome? ");
		scanf(" %s", &nome);
		printf("Qual o sexo 'm' ou 'f': ");
		scanf(" %c", &sexo);
		cont++;
		printf("Você é o paciente número %d\n", cont);
		if(sexo == 'm') m++;
		else f++;
		printf("Mais algum paciente 's' ou 'n': ");
		scanf(" %c", &continuar);
	}
	printf("Hoje foram atendidos %d pacientes, %d masculino e %d feminino", cont, m, f);
	getch();
}