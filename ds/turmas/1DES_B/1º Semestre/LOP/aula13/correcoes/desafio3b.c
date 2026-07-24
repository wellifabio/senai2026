#include<stdio.h>
#include<windows.h>

// Função recursiva que testa os divisores
int testaPrimo(int num, int divisor) {
    if (divisor == 1) { // Se o divisor chegar a 1, é primo
        return 1;
    }else if (num % divisor == 0) { // Se o número for divisível por outro valor, não é primo
        return 0;
    } else {
        return testaPrimo(num, divisor - 1); // Passo recursivo: chama a função testando o divisor anterior
    }
}

int primo(int x){
    if (x <= 1) {
        return 0; 
    }
    // Inicia o teste recursivo dividindo o número pela metade dele
    return testaPrimo(x, x / 2);
}

void main(){
	SetConsoleOutputCP(CP_UTF8);
	int n;
	printf("Digite um número inteiro maior que 0:\n");
	scanf("%d", &n);
	if(primo(n)){
		printf("%d é primo", n);
	}else{
		printf("%d não é primo", n);
	}
	getch();
}