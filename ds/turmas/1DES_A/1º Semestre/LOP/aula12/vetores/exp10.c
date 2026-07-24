#include<stdio.h>
#include<stdlib.h>
#include<time.h>
void main(){
	int matriz[5][5]={
		{ 10, 25, 42, 8, 1 },
		{ 1, 3, 9, 80, 1 },
		{ 22, 5, 12, 50, 1 },
		{ 16, 18, 22, 6, 1 },
		{ 15, 13, 11, 7, 1 }
	};
	
	for(int i = 0; i < 5; i++){
		for(int j = 0; j < 5; j++){
			printf("%d\t", matriz[i][j]);
		}
		printf("\n");
	}
	getch();
}