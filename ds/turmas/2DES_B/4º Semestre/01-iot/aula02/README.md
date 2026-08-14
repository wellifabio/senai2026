# Aula02

### Capacidades Técnicas
- 2 Identificar os tipos de hardwares e soluções disponíveis 

### Conhecimentos
- 2 Requisitos para Instalação 
  - 2.1 Hardware 
    - 2.1.1 Conectividade 
    - 2.1.2 Periféricos 
  - 2.2 Sensores e Atuadores 
    - 2.2.1 Interfaces de I/O 
    - 2.2.2 Analógica
- 5 Preparação de dispositivo IoT

## Portas lógicas
Transistores, diodos e capacitores são amplamente utilizados para a execução de portas lógicas AND, OR, NOT e também como memória na eletrônica e base da computação.
![lousa](./lousa.png)
- Crie os sircuitos abaixo para testar as portas
![Portas](./portas.png)

## Simulação01 - Trabalhando com mais alguns componentes

- Transistores
    - NPN
- Sensores
    - Fotoresistorv
    - Botão (Pushbutton)

### Usando um transistor NPN (recomendado)
Os transistores amplificam a potência e podem atuar como interruptores eletricamente controlados. Os transistores de junção bipolar (BJTs, bipolar function transistors) possuem três camadas de silício, cuja disposição determina a direção do fluxo de corrente.
#### Como funciona
Os transistores amplificam a potência e podem atuar como interruptores eletricamente controlados. Os transistores de junção bipolar (BJTs, bipolar junction transistors) possuem três camadas de silício, cuja disposição determina a direção do fluxo de corrente.

#### Laboratório [ThinkerCad](https://www.tinkercad.com/)
Vamos montar um circuito semelhante ao dos postes da CPFL que a noite acendem a luz ee de dia a apagam com:

- 1 bateria de 9 V
- 1 LED
- 1 resistor de 330 Ω (para o LED)
- 1 fotoresistor (LDR)
- 1 resistor de 10 kΩ
- 1 transistor NPN (por exemplo, 2N2222 ou BC547)

##### Ligações
```
+9V
 │
 ├── Resistor 330 Ω ───► LED ─── Coletor (2N2222)
 │                               Emissor
 │                                  │
 │                                 GND
 │
 └── LDR ─────┐
              ├──── Base do transistor
Resistor 10k ─┘
      │
     GND
```
![Poste](./poste.png)
##### Como funciona
- Com muita luz:
    - A resistência do LDR diminui.
    - A tensão na base do transistor fica baixa.
    - O transistor conduz pouco.
    - O LED fica apagado ou fraco.
- No escuro:
    - A resistência do LDR aumenta.
    - A tensão na base aumenta.
    - O transistor conduz mais.
    - O LED acende mais forte.
- Se o comportamento ficar invertido no Tinkercad, basta trocar a posição do LDR e do resistor de 10 kΩ no divisor de tensão.

## Simulação 02 - Cricuito simples com interruptor e dois leds
### Componentes
- 1 Bateria de 9 V
- 1 Interruptor
- 2 LEDs (vermelho e verde)
- 2 resistores de 470 Ω (para os LEDs)
![Esquema de ligação](./garagem01.png)

## Simulação 03 - Circuito utilizando capacitor para causar um atraso na troca dos LEDs
Simule um sinalizador de saída de garagem que usa um transistor NPN como chave e um capacitor para criar um atraso na troca dos LEDs e utiliza apenas componentes básicos.

### Componentes
- 1 transistores NPN (BC548, BC547 ou 2N2222)
- 2 LEDs (vermelho e verde)
- 2 resistores de 470 Ω (para os LEDs)
- 1 resistor de 10 kΩ (polarização da base)
- 1 capacitor eletrolítico de 470 µF a 1000 µF
- Bateria de 9 V

### Esquema de ligação
![Esquema de ligação](./garagem02.png)

## Funcionamento
- Ao ligar a alimentação:
- O capacitor inicialmente está descarregado.
- A base do transistor demora alguns instantes para atingir a tensão de - condução.
- O LED verde permanece aceso.
- Após alguns segundos:
- O capacitor carrega.
- O transistor satura.
- O LED vermelho acende também.
- O tempo aproximado é dado por:
```
Tempo ≈ R × C
```
- Por exemplo:
```
10 kΩ + 470 µF → cerca de 4 a 5 segundos
10 kΩ + 1000 µF → cerca de 10 segundos
```

## Com arduino UNO piscando as luzes
### Componentes
- 1 Arduino UNO
- 2 LEDs (vermelho e verde)
- 2 resistores de 470 Ω (para os LEDs)
![Esquema de ligação](./garagem03.png)
## Código
```cpp
int verde = 8;
int vermelho = 2;

void setup()
{
  pinMode(verde, OUTPUT);
  pinMode(vermelho, OUTPUT);
}

void loop()
{
  digitalWrite(verde, 1);
  digitalWrite(vermelho, 0);
  delay(1000);
  digitalWrite(verde, 0);
  digitalWrite(vermelho, 1);
  delay(1000);
}
```
O led verde está ligado na porta digital 8 e o led vermelho na porta digital 2 do Arduino. O código faz com que os dois leds acendam alternadamente, com um atraso de 1 segundo entre cada troca.
## Atividade
Replique o circuito do sinalizador de garagem utilizando o Arduino UNO e os componentes listados acima. Teste o código fornecido e observe o funcionamento dos LEDs.
## Desafio
Faça o mesmo circuito porém sem o uso do Arduino, utilizando apenas componentes eletrônicos básicos.