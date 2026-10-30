#include "WiFi.h"
#include "WiFiClient.h"
#include "HTTPClient.h"

const char* ssid = "SENAI_DES(novo)";
const char* password = "Sesi@2026";
const char* apiUrl = "http://192.168.0.152:3000/comandos";

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
  Serial.println("IP: ");
  Serial.println(wifi.localIP());
}

void loop() {
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("WiFi desconectado; tentando reconectar...");
    WiFi.reconnect();
    delay(5000);
    return;
  }

  WiFiClient client;
  HTTPClient http;

  if (http.begin(client, apiUrl)) {
    http.addHeader("Content-Type", "application/json");
    const char* corpoJson = "{\"dados\":200}";
    Serial.println("Enviando requisicao POST...");
    int httpCode = http.POST(corpoJson);

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