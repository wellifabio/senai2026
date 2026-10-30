#include "WiFi.h"
#include "HTTPClient.h"

const char *ssid = "TI_SENAI2";
const char *password = "senai2025";
const char *apiUrl = "http://192.168.1.163:3000/comandos";

const int botao1 = 4;
const int botao2 = 18;
const unsigned long debounceMs = 50;

int leituraAnterior1 = HIGH;
int estadoEstavel1 = HIGH;
unsigned long ultimaMudanca1 = 0;

int leituraAnterior2 = HIGH;
int estadoEstavel2 = HIGH;
unsigned long ultimaMudanca2 = 0;

void enviarRequisicao(const char *corpo)
{
  if (WiFi.status() == WL_CONNECTED)
  {
    HTTPClient http;
    if (http.begin(apiUrl))
    {
      http.addHeader("Content-Type", "application/json");
      String dados = corpo;
      Serial.println("Enviando requisicao POST...");
      int httpCode = http.POST(dados);
      if (httpCode > 0)
      {
        Serial.printf("Codigo HTTP: %d\n", httpCode);
        Serial.println(http.getString());
      }
      else
      {
        Serial.printf("Falha: %s\n", http.errorToString(httpCode).c_str());
      }
      http.end();
    }
    else
    {
      Serial.println("Nao foi possivel iniciar a conexao com a API.");
    }
  }
  else
  {
    Serial.println("WiFi desconectado!");
  }
}

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
      enviarRequisicao("{\"botao\":" + nome + "}");
    }
  }
}

void setup()
{
  Serial.begin(9600);

  pinMode(botao1, INPUT_PULLUP);
  pinMode(botao2, INPUT_PULLUP);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  Serial.print("Conectando ao WiFi");

  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }

  Serial.println();
  Serial.println("WIFI conectado");
}

void loop()
{
  detectarClique(botao1, leituraAnterior1, estadoEstavel1, ultimaMudanca1, "1");
  detectarClique(botao2, leituraAnterior2, estadoEstavel2, ultimaMudanca2, "2");
}