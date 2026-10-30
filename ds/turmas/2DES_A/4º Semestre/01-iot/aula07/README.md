# Aula07 - ESP32 - WIFI

## Trabalhando com WIFI
Vamos verificar os recursos de WiFi da placa ESP32

<details><summary><h3>

Buscando redes com código do [WOKWI](https://wokwi.com/esp32)

</h3></summary>

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

</details>

<details><summary><h3>

Conectando a uma rede WiFi

</h3></summary>

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

</details>

<details><summary><h3>

Fazendo requisições para uma API

</h3></summary>

#### Crie uma API local

- Em sua área de trabalho crie uma pasta chamada `api_iot`
- Abra com **VsCode** crie a seguinte estrutura de arquivos
```
api_iot
  src/routes.js
  server.js
  .gitignore
```
- no arquivo `./server.js` insira o código a seguir:
```js
const express = require("express")
const cors = require("cors")

const routes = require("./src/routes")

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
const porta = 3000

app.listen(porta, () => {
    console.log(`Servidor respondendo em: http://localhost:${porta}`)
})
```
- no arquivo `./src/routes.js` insira o código a seguir:
```js
const express = require("express")
const router = express.Router()

const rotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

const comandos = (req, res) => {
    console.log(req.body)
    res.json("dados recebidos")
}

router.get('/',rotaInicial)
router.post('/comandos',comandos)

module.exports = router
```
-  no arquivo `./.gitignore` insira o código a seguir:
```
node_modules
package-lock.json
```
- Abra um terminal `CTRL + '` e dê os comandos para iniciar um novo **back-end**
```bash
npm init -y
npm i express cors
```
- Configure o `package.json` acrescentando o script `"dev": "node --watch server.js",` semelhante ao a seguir:
```json
{
  "name": "api",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "dev": "node --watch server.js",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "cors": "^2.8.6",
    "express": "^5.3.0"
  }
}
```
- Execute a API
```bash
npm run dev
```
- Pronto a API estará ativa aguardando requisições `GET` e `POST`
- Teste com o **Insomnia** ou **Postman**

#### Faça requisições GET para API com o ESP32
- Descubra seu endereço IP, abrindo um terminal e digitando
```bash
ipconfig
```
- Conecte uma placa ESP32 ao computador com o cabo USB
- Abra a IDE do Arduino e faça upload o código a seguir:
  - Alterando no código abaixo a URL da API de `http://localhost:3000` para seu IP semelhante a este `http://192.168.1.137:3000`
```c
#include "WiFi.h"
#include "WiFiClient.h"
#include "HTTPClient.h"

const char* ssid = "SENAI_DES(novo)";
const char* password = "Sesi@2026";
const char* apiUrl = "https://localhost:3000";

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
```
- O codigo a seguir utiliza HTTPS para quando a API está implantada em nuvem
```c
#include "WiFi.h"
#include "WiFiClientSecure.h"
#include "HTTPClient.h"

const char* ssid = "SENAI_DES(novo)";
const char* password = "Sesi@2026";
const char* apiUrl = "https://localhost:3000";

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
```
- Observe o **Monitor Serial** que a cada 5 seguindos fará uma requisição GET para a API

#### DESAFIO: Faça requisições POST para a API
Elabore um código que faça requisições POST com o corpo `{"botao":1}` a cada 10 segundos para a API

</details>