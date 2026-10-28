#include "WiFi.h"
#include "WiFiClientSecure.h"
#include "HTTPClient.h"

const char* ssid = "SENAI_DES(novo)";
const char* password = "Sesi@2026";
const char* apiUrl = "https://receitasapi-b-2025.vercel.app/";

void setup() {
  Serial.begin(9600);
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
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("WiFi desconectado; tentando reconectar...");
    WiFi.reconnect();
    delay(5000);
    return;
  }

  WiFiClientSecure client;
  client.setInsecure();

  HTTPClient http;
  if (http.begin(client, apiUrl)) {
    Serial.println("Enviando requisicao GET...");
    int httpCode = http.GET();

    if (httpCode > 0) {
      Serial.printf("Codigo HTTP: %d\n", httpCode);
      Serial.println("Corpo da resposta:");
      Serial.println(http.getString());
    } else {
      Serial.printf("Falha na requisicao: %s\n",
                    http.errorToString(httpCode).c_str());
    }

    http.end();
  } else {
    Serial.println("Nao foi possivel iniciar a conexao com a API.");
  }

  delay(10000);
}