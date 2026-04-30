#include <stdio.h>
void main(){
	int numeros[8] = { 65, 66, 67, 68, 69, 100, 200, 300};
	for(int i = 0; i < 8; i++){
		printf("%d\n", numeros[i]);
	}
	getch();
}