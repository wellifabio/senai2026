### Exercício 2
#### Algoritmo
```
variáveis velocidade, distancia, tempo;
escreva("Digite a velocidade do seu carro")
leia(velocidade)
escreva("Digite a distância percorrida")
leia(d)
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

