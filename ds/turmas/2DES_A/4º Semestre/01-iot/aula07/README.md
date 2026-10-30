# Aula07 - ESP32 - WIFI

## Trabalhando com WIFI
Vamos verificar os recursos de WiFi da placa ESP32 xxx
### Buscando redes com código do [WiFi](https://wokwi.com/esp32)
Acesse o link do simulador acima, clique no primeiro protótipo **WiFi Scanning**
- Altere o número do monitor serial `Serial.begin(115200);` na linha 6 para `Serial.begin(9600);`
- Conecte sua placa ESP32 no computador via USB
- Abra o **Arduino IDE** e faça upload do código para a placa.

```c
/* ESP32 WiFi Busca de Redes WiFi */

#include "WiFi.h"

void setup() {
  Serial.begin(9600);
  Serial.println("Initializing WiFi...");
  WiFi.mode(WIFI_STA);
  Serial.println("Setup done!");
}

void loop() {
  Serial.println("Scanning...");

  // WiFi.scanNetworks vai retornar o número de redes encontradas
  int n = WiFi.scanNetworks();
  Serial.println("Scan done!");
  if (n == 0) {
    Serial.println("No networks found.");
  } else {
    Serial.println();
    Serial.print(n);
    Serial.println(" networks found");
    for (int i = 0; i < n; ++i) {
      // Mostra o SSID, RSSI para cada rede
      Serial.print(i + 1);
      Serial.print(": ");
      Serial.print(WiFi.SSID(i));
      Serial.print(" (");
      Serial.print(WiFi.RSSI(i));
      Serial.print(")");
      Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN) ? " " : "*");
      delay(10);
    }
  }
  Serial.println("");

  // espera 5 segundos para escanear novamemte
  delay(5000);
}
```
- Abra o monitor serial para ver o resultado da busca de redes que o ESP32 está realizando.
<br>![Serial](./serial.png)

#### Resultado:
![Busca](./busca.png)
<br>O código irá mostrar a lista de redes WiFi encontradas no momento.

### Conectando a uma rede WiFi
- Implante o código a seguir em sua placa e verifique o resultado no monitor serial
```c
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
  //A cada 10 segundos mostra os dados da conexão
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());
  Serial.print("Máscara: ");
  Serial.println(WiFi.subnetMask());
  Serial.print("Gateway: ");
  Serial.println(WiFi.gatewayIP());
  Serial.print("MAC: ");
  Serial.println(WiFi.macAddress());
  delay(10000);
}
```
- Altere o **ssid** e **password** para os de uma rede WiFi válida

#### Resultado
![Conexao](./conexao.png)

### Enviando dados para uma API