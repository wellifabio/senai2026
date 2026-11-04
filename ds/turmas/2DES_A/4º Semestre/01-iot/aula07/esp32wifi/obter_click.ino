const int botao = 4;
int estadoAnterior = HIGH;
unsigned long ultimaMudanca = 0;

void setup()
{
  Serial.begin(9600);
  pinMode(botao, INPUT_PULLUP);
  Serial.println();
  Serial.println("Ouvindo botao no pino 4");
}

void loop()
{
  int leitura = digitalRead(botao);

  if (leitura != estadoAnterior)
  {
    ultimaMudanca = millis();
    estadoAnterior = leitura;
  }

  if (leitura == LOW && millis() - ultimaMudanca >= 50)
  {
    Serial.println("Clique detectado");
    while (digitalRead(botao) == LOW)
    {
      delay(10); // Aguarda o botão ser solto
    }
    estadoAnterior = HIGH;
  }
}