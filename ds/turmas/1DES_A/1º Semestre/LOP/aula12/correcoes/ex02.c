#include<stdio.h>
#include<windows.h>
#include<time.h>

void main(){
	SetConsoleOutputCP(CP_UTF8);
	int v[25];
	
	srand(time(NULL));
	
	printf("Indice\tValor\n");
	for(int i = 0; i < 25; i++){
		v[i] = rand() % 101;
		printf("%d\t[%3d]\n", i, v[i]);
	}
	getch();
}