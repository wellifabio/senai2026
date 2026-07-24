# Manipular data e hora
Para manipular data e hora em C, utiliza-se a biblioteca <time.h>. A função principal **time()** captura o tempo em segundos desde a Era Unix (1º de janeiro de 1970), e a função **localtime()** converte esse valor para o calendário local em uma struct tm, que contém campos para dia, mês, ano, hora, minuto e segundo.

- Exemplo:

```c
#include <stdio.h>
#include <time.h>

int main() {
    // 1. Variável para armazenar o tempo atual em segundos
    time_t tempo_bruto;
    time(&tempo_bruto);

    // 2. Converte para uma estrutura de tempo local
    struct tm *info_tempo = localtime(&tempo_bruto);

    // 3. Exibe a data e hora formatadas
    // Observações:
    // - tm_mon começa em 0 (Janeiro=0), então adicionamos 1
    // - tm_year começa a contar a partir de 1900, então adicionamos 1900
    printf("Data atual: %02d/%02d/%04d\n", 
           info_tempo->tm_mday, 
           info_tempo->tm_mon + 1, 
           info_tempo->tm_year + 1900);

    printf("Hora atual: %02d:%02d:%02d\n", 
           info_tempo->tm_hour, 
           info_tempo->tm_min, 
           info_tempo->tm_sec);

    return 0;
}
```
Neste exemplo, o programa captura o tempo atual, converte para uma estrutura de tempo local e exibe a data e hora formatadas. A função **printf()** é usada para formatar a saída, garantindo que os valores sejam exibidos com dois dígitos quando necessário.

## Detalhes importantes da estrutura tm:
- `tm_sec`: segundo (0-59)
- `tm_min`: minuto (0-59)
- `tm_hour`: hora (0-23)
- `tm_mday`: dia do mês (1-31)
- `tm_mon`: mês (0-11)
- `tm_year`: ano desde 1900
- `tm_wday`: dia da semana (0-6, onde 0 é domingo)
- `tm_yday`: dia do ano (0-365)
- `tm_isdst`: indica se é horário de verão (1), não é horário de verão (0) ou desconhecido (-1)

## Conversão de tempo para string
A função **strftime()** pode ser usada para formatar a data e hora em uma string personalizada. Por exemplo:

```c
char buffer[80];
strftime(buffer, sizeof(buffer), "Data e hora: %d/%m/%Y %H:%M:%S", info_tempo);
printf("%s\n", buffer);
```
Neste exemplo, a função **strftime()** formata a data e hora de acordo com o formato especificado, onde `%d` é o dia, `%m` é o mês, `%Y` é o ano, `%H` é a hora, `%M` são os minutos e `%S` são os segundos. O resultado é armazenado em `buffer`, que é então impresso.

## Função asctime()
Para converter o tempo em uma string de texto formatada pronta (como "Tue Jun 2 12:34:56 2026"), você pode usar diretamente a função asctime(info_tempo). Para ler mais detalhes sobre funções avançadas, acesse a documentação do W3Schools C Date and Time.

- Exemplo:
```c
#include <stdio.h>
#include <time.h>

int main() {
    time_t tempo_bruto;
    time(&tempo_bruto);
    struct tm *info_tempo = localtime(&tempo_bruto);

    // Exibe a data e hora formatada usando asctime
    printf("Data e hora: %s", asctime(info_tempo));

    return 0;
}
```
Neste exemplo, a função **asctime()** é usada para converter a estrutura de tempo em uma string formatada, que é então impressa. Note que a string resultante inclui uma nova linha no final, por isso não é necessário adicionar `\n` na função `printf()`.