#include<stdio.h>
#include<windows.h>
void main(){
	SetConsoleOutputCP(CP_UTF8);
	float salHora, horas;
	float salBruto, ir, inss, sindicato, salLiquido;
	printf("Digite quanto você ganha por hora\n");
	scanf("%f", &salHora);
	printf("Digite quantas horas trabalhadas\n");
	scanf("%f", &horas);
	salBruto = salHora * horas;
	ir = salBruto * 11 / 100;
	inss = salBruto * 8 / 100;
	sindicato = salBruto * 5 / 100;
	salLiquido = salBruto - ir - inss - sindicato;
	printf("+ Salário Bruto : R$ %.2f\n", salBruto);
	printf("- IR (11%%) : R$ %.2f\n", ir);
	printf("- INSS (8%%) : R$ %.2f\n", inss);
	printf("- Sindicato (5%%) : R$ %.2f\n", sindicato);
	printf("= Salário Líquido : R$ %.2f\n", salLiquido);
	getch();
}