#include "WiFi.h"
#include "HTTPClient.h"

const char* ssid = "TI_SENAI2";
const char* password = "senai2025";
const char* apiUrl = "http://192.168.1.163:3000/comandos";

const int botao = 4;

int estadoBotao = HIGH;
int ultimaLeitura = HIGH;

unsigned long ultimoTempo = 0;
const unsigned long debounce = 50;

void setup() {
  Serial.begin(9600);

  pinMode(botao, INPUT_PULLUP);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  Serial.print("Conectando ao WiFi");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println();
  Serial.println("WIFI conectado");
}

void loop() {
  int leitura = digitalRead(botao);

  if (leitura != ultimaLeitura) {
    ultimoTempo = millis();
  }

  if ((millis() - ultimoTempo) > debounce) {

    if (leitura != estadoBotao) {
      estadoBotao = leitura;

      if (estadoBotao == LOW) {

        Serial.println("Botao pressionado!");

        if (WiFi.status() == WL_CONNECTED) {

          HTTPClient http;

          if (http.begin(apiUrl)) {
            http.addHeader("Content-Type", "application/json");

            String dados = "{\"botao\":1}";

            Serial.println("Enviando requisicao POST...");

            int httpCode = http.POST(dados);

            if (httpCode > 0) {
              Serial.printf("Codigo HTTP: %d\n", httpCode);
              Serial.println(http.getString());
            } else {
              Serial.printf("Falha: %s\n",
                http.errorToString(httpCode).c_str());
            }

            http.end();

          } else {
            Serial.println("Nao foi possivel iniciar a conexao com a API.");
          }

        } else {
          Serial.println("WiFi desconectado!");
        }
      }
    }
  }

  ultimaLeitura = leitura;
}