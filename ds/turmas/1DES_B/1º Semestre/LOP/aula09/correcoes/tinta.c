#include<stdio.h>
#include<windows.h>
void main(){
	SetConsoleOutputCP(CP_UTF8);
	int area, latas, galoes;
	int restoLatas, restoGaloes;
	//Para dar uma folga de 10% basta alterar a areaGalao = 18 e a areaLata =97
	int areaGalao = 21, areaLata = 108;
	float precoGaloes, precoLatas;
	//Galão 3.6 litros, Lata 18 litros
	//1 litro pinta 6m2
	printf("Informe a área em m2(inteiro) a ser pintada:\n");
	scanf("%d", &area);
	//Resolvendo matematicamente
	latas = area / areaLata;
	restoLatas = area % areaLata;
	galoes = restoLatas / areaGalao;
	restoGaloes = restoLatas % areaGalao;
	if(restoGaloes != 0){
		galoes = galoes + 1;
	}
	if(galoes > 3){
		galoes = 0;
		latas = latas + 1;
	}
	precoLatas = latas * 80.0;
	precoGaloes = galoes * 25.0;
	printf("%d latas de 18 litros R$ 80.00 cada R$ %.2f\n",latas, precoLatas);
	printf("%d galões de 3.6 litros a R$ 25.00\n", galoes, precoGaloes);
	printf("Total do orçamento R$ %.2f\n", precoLatas + precoGaloes);
	getch();
}