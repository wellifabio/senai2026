#include "WiFi.h"

const char *ssid = "SENAI_DES(novo)";
const char *password = "Sesi@2026";

void setup()
{
  Serial.begin(9600);
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
  static unsigned long ultimaExibicao = 0;
  unsigned long agora = millis();

  if (agora - ultimaExibicao >= 10000)
  {
    ultimaExibicao = agora;
    Serial.print("IP: ");
    Serial.println(WiFi.localIP());
    Serial.print("Máscara: ");
    Serial.println(WiFi.subnetMask());
    Serial.print("Gateway: ");
    Serial.println(WiFi.gatewayIP());
    Serial.print("MAC: ");
    Serial.println(WiFi.macAddress());
  }
}