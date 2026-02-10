### Exercício 2
#### Algoritmo
```
variáveis velocidade, distancia, tempo;
escreva("Digite a velocidade do seu carro")
leia(velocidade)
escreva("Digite a distância percorrida")
leia(distancia)
tempo = distancia / velocidade
escreva("O tempo gasto será de ", tempo, "horas")
```

#### Teste de mesa
|Velocidade|distância|tempo|
|----------|---------|-----|
|   100    |         |     |
|          |  200    |     |
|          |         |  2  |

### Exercício 3
#### Algoritmo
```
variáveis nome, salario, aumentoP, aumentoRS, novoSalario
escreva("Digite seu nome")
leia(nome)
escreva("Digite seu salário)
leia(salario)
escreva("Digite a porcentagem de aumento")
leia(aumentoP)
aumentoRS = salario * aumentoP / 100
novoSalario = salario + aumentoRS
escreva(nome, "seu novo salário é", novoSalario)
```

#### Teste de mesa
|nome|salario|aumentoP|aumentoRS|novoSalario|
|----|-------|--------|---------|-----------|
|Ana |       |        |         |           |
|    |  3000 |        |         |           |
|    |       |   10   |         |           |
|    |       |        |  300    |           |
|    |       |        |         |   3300    |

### Exercício 4
#### Algoritmo
```
variaveis time, vitorias, empates, pontos
escreva("Digite o nome do time de futebol")
leia(time)
escreva("Quantas vezes o time venceu?")
leia(vitorias)
escreva("Quantas vezes o time empatou?")
leia(empates)
pontos = vitorias * 3 + empates
escreva("O time possui", pontos,"pontos")
```

#### Teste de mesa
|time|vitorias|empates|pontos|
|-|-|-|-|
|Corinthians||||
||5|||
|||3||
||||18|

### Exercício 5
#### Algoritmo
```
variaveis n, nMais, nMenos
escreva("Digite um número inteiro positivo")
leia(n)
nMais = n + 1
nMenos = n - 1
escreva(n, "+ 1 = ", nMais, n, " -1 =", nMenos)
```

#### Teste de mesa
|n|nMais|nMenos|
|-|-|-|
|10|||
||11||
|||9|

### Exercício 6
#### Algoritmo
```
variáveis velocidade = 900, distancia, tempo;
escreva("Digite a distância percorrida pelo avião")
leia(distancia)
tempo = distancia / velocidade
escreva("O tempo gasto será de ", tempo, "horas")
```

#### Teste de mesa
|Distancia|tempo|
|-|-|
|9000||
||10|