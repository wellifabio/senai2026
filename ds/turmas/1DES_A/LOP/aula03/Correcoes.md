### Exercício 2
<table>
<tr>
    <th>Algoritmo</th><th>Fluxograma</th>
</tr>
<tr>
<td>

```
variáveis velocidade, distancia, tempo;
escreva("Digite a velocidade do seu carro")
leia(velocidade)
escreva("Digite a distância percorrida")
leia(distancia)
tempo = distancia / velocidade
escreva("O tempo gasto será de ", tempo, "horas")
```

</td>
<td>
<img src="./fluxograma02.png" alt="Fluxograma">
</td>
</tr>
</table>

#### Teste de mesa
|Velocidade|distância|tempo|
|----------|---------|-----|
|   100    |         |     |
|          |  200    |     |
|          |         |  2  |

### Exercício 3
<table>
<tr>
    <th>Algoritmo</th><th>Fluxograma</th>
</tr>
<tr>
<td>

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
</td>
<td>
<img src="./fluxograma03.png" alt="Fluxograma">
</td>
</tr>
</table>

#### Teste de mesa
|nome|salario|aumentoP|aumentoRS|novoSalario|
|----|-------|--------|---------|-----------|
|Ana |       |        |         |           |
|    |  3000 |        |         |           |
|    |       |   10   |         |           |
|    |       |        |  300    |           |
|    |       |        |         |   3300    |

### Exercício 4
<table>
<tr>
    <th>Algoritmo</th><th>Fluxograma</th>
</tr>
<tr>
<td>

```
variaveis time, vitorias, empates, pontos
escreva("Digite o nome do time de futebol")
leia(time)
escreva("Quantas vezes o time venceu?")
leia(vitorias)
escreva("Quantas vezes o time empatou?")
leia(empates)
pontos = vitorias * 3 + empates
escreva("O time", time," possui ", pontos, "pontos")
```
</td>
<td>
<img src="./fluxograma04.png" alt="Fluxograma">
</td>
</tr>
</table>

#### Teste de mesa
|time|vitorias|empates|pontos|
|-|-|-|-|
|Corinthians||||
||5|||
|||3||
||||18|

### Exercício 5
<table>
<tr>
    <th>Algoritmo</th><th>Fluxograma</th>
</tr>
<tr>
<td>

```
variaveis n, nMais, nMenos
escreva("Digite um número inteiro positivo")
leia(n)
se(n > 0)
    nMais = n + 1
    nMenos = n - 1
    escreva("n + 1 = ", nMais)
    escreva("n - 1 = ", nMenos)
senão
    escreva("O número digitado não é positivo")
```
</td>
<td>
<img src="./fluxograma05.png" alt="Fluxograma">
</td>
</tr>
</table>

#### Teste de mesa
|n|nMais|nMenos|
|-|-|-|
|10|||
||11||
|||9|

### Exercício 6
<table>
<tr>
    <th>Algoritmo</th><th>Fluxograma</th>
</tr>
<tr>
<td>

```
variáveis velocidade = 900, distancia, tempo;
escreva("Digite a distância percorrida pelo avião")
leia(distancia)
tempo = distancia / velocidade
escreva("O tempo gasto será de ", tempo, "horas")
```
</td>
<td>
<img src="./fluxograma06.png" alt="Fluxograma">
</td>
</tr>
</table>

#### Teste de mesa
|Distancia|tempo|
|-|-|
|9000||
||10|

### Exercício 7
<table>
<tr>
    <th>Algoritmo</th><th>Fluxograma</th>
</tr>
<tr>
<td>

```
variáveis caminhoes, alqueires, viagens;
escreva("Digite quantos alqueires sua fazenda possui:")
leia(alqueires)
escreva("Digite quantos caminhões você possui:")
leia(caminhoes)
viagens = alqueires * 250 / (caminhoes * 18)
escreva("Será necessário ", viagens, "para transportar sua produção")
```
</td>
<td>
<img src="./fluxograma07.png" alt="Fluxograma">
</td>
</tr>
</table>

#### Teste de mesa
|alqueires|caminhoes|viagens|
|-|-|-|
|2|||
||2||
|||13.9|