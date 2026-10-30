#include "WiFi.h"
#include "WiFiClientSecure.h"
#include "HTTPClient.h"

const char *ssid = "SENAI_DES(novo)";
const char *password = "Sesi@2026";
const char *apiUrl = "http://192.168.0.152:3000/comandos";
const int botao = 2;

void setup()
{
    Serial.begin(9600);
    pinMode(botao, INPUT_PULLUP);
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
    static int ultimaLeitura = HIGH;
    static int estadoEstavel = HIGH;
    static unsigned long tempoDebounce = 0;

    int leitura = digitalRead(botao);

    if (leitura != ultimaLeitura)
    {
        tempoDebounce = millis();
        ultimaLeitura = leitura;
    }

    if (millis() - tempoDebounce >= 50 && leitura != estadoEstavel)
    {
        estadoEstavel = leitura;

        // Com INPUT_PULLUP, LOW indica que o botão foi pressionado.
        if (estadoEstavel == LOW)
        {
            enviarComando();
        }
    }
}

void enviarComando()
{
    if (WiFi.status() != WL_CONNECTED)
    {
        Serial.println("WiFi desconectado; comando nao enviado.");
        return;
    }

    WiFiClientSecure client;
    client.setInsecure(); // Use apenas para testes; em produção, valide o certificado.

    HTTPClient http;

    if (http.begin(client, apiUrl))
    {
        http.addHeader("Content-Type", "application/json");

        Serial.println("Enviando requisicao POST...");
        int httpCode = http.POST("{\"botao\":2}");

        if (httpCode > 0)
        {
            Serial.printf("Codigo HTTP: %d\n", httpCode);
            Serial.println(http.getString());
        }
        else
        {
            Serial.printf("Falha na requisicao: %s\n",
                          http.errorToString(httpCode).c_str());
        }

        http.end();
    }
    else
    {
        Serial.println("Nao foi possivel iniciar a conexao com a API.");
    }
}