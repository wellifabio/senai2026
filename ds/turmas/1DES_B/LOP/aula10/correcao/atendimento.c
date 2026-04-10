#include<stdio.h>
#include<windows.h>
void main(){
	SetConsoleOutputCP(CP_UTF8);
	char nome[20], sexo;
	int idade;
	printf("Digite seu nome, sexo m/f e idade:\n");
	scanf(" %s %c %d", &nome, &sexo, &idade);
	if(sexo == 'm'){
		if(idade > 65){
			printf("O atendimento do paciente %s é prioritário", nome);
		}else{
			printf("O atendimento do paciente %s é normal", nome);
		}
	}else{
		if(idade > 60){
			printf("O atendimento da paciente %s é prioritário", nome);
		}else{
			printf("O atendimento da paciente %s é normal", nome);
		}		
	}
	getch();
}