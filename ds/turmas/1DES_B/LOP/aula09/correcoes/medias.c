#include<stdio.h>
#include<windows.h>
void main(){
	SetConsoleOutputCP(CP_UTF8);
	int n;
	float nota, media;
	printf("Quantas notas o aluno possui?\n");
	scanf("%d", &n);
	media = 0;
	for(int i = 1; i <= n; i++){
		printf("Digite a %dª nota: ", i);
		scanf("%f", &nota);
		media = media + nota;
	}
	media = media / n;
	printf("A média do aluno é %.1f", media);
	getch();
}