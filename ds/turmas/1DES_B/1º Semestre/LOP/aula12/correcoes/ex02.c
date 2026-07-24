#include<stdio.h>
#include<time.h>
void main(){
	int v[25];
	srand(time(NULL));
	
	for(int i = 0; i < 25; i++){
		v[i] = rand() % 101; //Aleatórios de 0 a 100
		printf("%d\n",v[i]);
	}
	
	getch();
}