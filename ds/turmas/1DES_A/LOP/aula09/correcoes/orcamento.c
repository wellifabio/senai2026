#include<stdio.h>
#include<windows.h>
void main(){
	SetConsoleOutputCP(CP_UTF8);
	float total = 0, preco, desconto;
	int quantidade;
	char resp;
	do{
		printf("Digite o preço do produto:\n");
		scanf("%f", &preco);
		printf("Digite a quantidade:\n");
		scanf("%d", &quantidade);
		total = total + preco * quantidade;
		printf("mais algum produtos s/n:\n");
		scanf(" %c", &resp);
	}while(resp == 's');
	printf("O seu orçamento é %.2f\n", total);
	printf("Informe a porcentagem de desconto\n");
	scanf("%f", &desconto);
	desconto = total * desconto / 100;
	total = total - desconto;
	printf("O desconto é %.2f, preço final %.2f", desconto, total);
	getch();
}