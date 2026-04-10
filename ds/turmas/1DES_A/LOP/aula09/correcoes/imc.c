#include<stdio.h>
#include<windows.h>
void main(){
	SetConsoleOutputCP(CP_UTF8);
	char nome[20]; //String
	float peso, altura, imc;
	printf("Digite seu nome, peso e altura\n");
	scanf(" %s %f %f", &nome, &peso, &altura);
	imc = peso / (altura * altura);
	if(imc < 18.5){
		printf("Seu imc é %.2f você está abaixo do peso", imc);
	}else if(imc < 25){
		printf("Seu imc é %.2f você está no peso normal", imc);
	}else if(imc < 30){
		printf("Seu imc é %.2f você está com sobrepeso", imc);
	}else if(imc < 35){
		printf("Seu imc é %.2f você está com obesidade grau I", imc);
	}else if(imc < 40){
		printf("Seu imc é %.2f você está com obesidade grau II", imc);
	}else{	
		printf("Seu imc é %.2f você está com obesidade grau III", imc);
	}
	getch();
}