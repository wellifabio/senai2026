const int botao1 = 4;
const int botao2 = 18;
const unsigned long debounceMs = 50;

int leituraAnterior1 = HIGH;
int estadoEstavel1 = HIGH;
unsigned long ultimaMudanca1 = 0;

int leituraAnterior2 = HIGH;
int estadoEstavel2 = HIGH;
unsigned long ultimaMudanca2 = 0;

void detectarClique(int pino, int &leituraAnterior, int &estadoEstavel,
                    unsigned long &ultimaMudanca, const char *nome)
{
  int leitura = digitalRead(pino);

  if (leitura != leituraAnterior)
  {
    ultimaMudanca = millis();
    leituraAnterior = leitura;
  }

  if (millis() - ultimaMudanca >= debounceMs && leitura != estadoEstavel)
  {
    estadoEstavel = leitura;
    if (estadoEstavel == LOW)
    {
      Serial.print(nome);
      Serial.println(" pressionado");
    }
  }
}

void setup()
{
  Serial.begin(9600);
  pinMode(botao1, INPUT_PULLUP);
  pinMode(botao2, INPUT_PULLUP);
  Serial.println();
  Serial.println("Ouvindo botoes nos pinos 4 e 18");
}

void loop()
{
  detectarClique(botao1, leituraAnterior1, estadoEstavel1, ultimaMudanca1,
                 "Botao 1");
  detectarClique(botao2, leituraAnterior2, estadoEstavel2, ultimaMudanca2,
                 "Botao 2");
}