#include<stdio.h>
#include<windows.h>
#include<time.h>

void main(){
	SetConsoleOutputCP(CP_UTF8);
	
	int m[5][5];
	
	srand(time(NULL));
	
	printf("\tA\tB\tC\tD\tE\n");
	for(int i = 0; i < 5; i++){
		printf("%d\t",i + 1);
		for(int j = 0; j < 5; j++){
			m[i][j] = rand() % 101;
			printf("%3d\t", m[i][j]);
		}
		printf("\n");
	}
	
	getch();
}