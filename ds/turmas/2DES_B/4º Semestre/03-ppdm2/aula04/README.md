# Aula04 - Mapas

## Google Maps para Flutter

### Tutorial para obter Latitude e Longitude de um endereço usando o Google Maps API
Para obter a latitude e longitude ao clicar em um mapa no Flutter, utilize a propriedade onTap do widget GoogleMap provido pelo pacote oficial google_maps_flutter.
- pubspec.yaml
```yaml
dependencies:
  flutter:
    sdk: flutter
  google_maps_flutter: ^2.2.0
```
ANtes deve obter uma chave de API do Google Maps, que pode ser obtida no [Google Cloud Console](https://console.cloud.google.com/). Certifique-se de habilitar o serviço de Maps e gerar uma chave de API para o seu projeto.
- main.dart
```dart
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class MapScreen extends StatefulWidget {
  const MapScreen({super.key});

  @override
  State<MapScreen> createState() => _MapScreenState();
}

class _MapScreenState extends State<MapScreen> {
  LatLng? _pontoClicado;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Obter Coordenadas no Mapa')),
      body: GoogleMap(
        initialCameraPosition: const CameraPosition(
          target: LatLng(-23.550520, -46.633308), // Coordenadas iniciais (ex: São Paulo)
          zoom: 14.0,
        ),
        onTap: (LatLng latLng) {
          // Callback acionado ao clicar em qualquer lugar do mapa
          setState(() {
            _pontoClicado = latLng;
          });
          
          print('Latitude: ${latLng.latitude}, Longitude: ${latLng.longitude}');
        },
        markers: _pontoClicado == null
            ? {}
            : {
                Marker(
                  markerId: const MarkerId('clicado'),
                  position: _pontoClicado!,
                ),
              },
      ),
    );
  }
}
```
### Explicação dos pontos principais:
- **onTap**: Retorna um objeto `LatLng` contendo exatamente a latitude e a longitude do ponto exato onde o usuário tocou na tela.
- **markers**: Opcional, mas útil para adicionar um marcador visual (Marker) no local que acabou de ser pressionado.

### Passos para Obter a Chave de API do Google Maps
- Acesse o Google Cloud Console.
- Crie um projeto ou selecione um existente.
- Ative a Maps SDK for Android na biblioteca de APIs.
- Vá em Credenciais, clique em Criar Credenciais e selecione Chave de API.
- Copie a chave gerada (recomenda-se restringir a chave para uso exclusivo do seu app Android antes de publicar).

### Configurar o AndroidManifest.xml
- Abra o arquivo localizado em: `android/app/src/main/AndroidManifest.xml`
- Insira a tag <meta-data> com a sua chave dentro do bloco <application>. Certifique-se também de que as permissões de internet estão ativas.
```xml
<manifest xmlns:android="http://android.com">
    
    <!-- Permissões necessárias para carregar o mapa -->
    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>

    <application
        android:label="nome_do_seu_app"
        android:name="${applicationName}"
        android:icon="@mipmap/ic_launcher">
        
        <!-- INSIRA ESTE BLOCO ABAIXO COM A SUA CHAVE DE API -->
        <meta-data 
            android:name="com.google.android.geo.API_KEY"
            android:value="SUA_CHAVE_DE_API_AQUI"/>
            
        <activity
            android:name=".MainActivity"
            ... >
            <!-- Configurações padrão da activity -->
        </activity>
    </application>
</manifest>
```

### Verificar a versão do SDK (Geralmente necessário)
O plugin do Google Maps exige uma versão mínima do SDK do Android (MinSdkVersion). Se o seu app falhar ao compilar, ajuste o arquivo `android/app/build.gradle`
- Abra android/app/build.gradle.
- Certifique-se de que o minSdkVersion seja 21 ou superior:

```gradle
android {
    defaultConfig {
        // ...
        minSdkVersion 21 // Altere de flutter.minSdkVersion se for menor que 21
        // ...
    }
}
```

## Outra alternativa: flutter_map - Gratuito e Open Source
- [flutter_map](https://pub.dev/packages/flutter_map) é um pacote gratuito e open source para Flutter que permite a integração de mapas em aplicativos móveis. Ele é baseado na biblioteca Leaflet.js, que é amplamente utilizada para criar mapas interativos na web.
- O pacote `flutter_map` oferece uma ampla gama de recursos, incluindo suporte para diferentes provedores de mapas, camadas personalizadas, marcadores, pop-ups e muito mais. Ele é altamente configurável e permite que os desenvolvedores criem experiências de mapa ricas e interativas em seus aplicativos Flutter.
- Para começar a usar o `flutter_map`, você precisa adicioná-lo ao seu arquivo `pubspec.yaml` e importar o pacote em seu código Dart. Em seguida, você pode criar um widget `FlutterMap` e configurar as opções de mapa, como a posição inicial, o nível de zoom e as camadas de mapa que deseja exibir.
- O `flutter_map` é uma excelente escolha para desenvolvedores Flutter que desejam adicionar funcionalidades de mapa aos seus aplicativos de forma rápida e fácil, sem a necessidade de depender de serviços pagos ou proprietários.

## Tutorial para obter Latitude e Longitude de um endereço
- Instalar as dependências necessárias no arquivo `pubspec.yaml`:
```yaml
dependencies:
  flutter_map: ^3.0.0
  latlong2: ^0.8.2
```
- Ou Adicione o flutter_map e o latlong2 (pacote necessário para manipular coordenadas geográficas neste plugin) ao seu projeto. No terminal, execute:
```bash
flutter pub add flutter_map latlong2
```
O código a seguir obtem a latitude e longitude de um endereço local clicado no mapa.

```dart
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong2/latlong2.dart'; // Importante para usar as coordenadas LatLng

class MapScreenOSM extends StatefulWidget {
  const MapScreenOSM({super.key});

  @override
  State<MapScreenOSM> createState() => _MapScreenOSMState();
}

class _MapScreenOSMState extends State<MapScreenOSM> {
  LatLng? _pontoClicado;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Obter Coordenadas (flutter_map)')),
      body: FlutterMap(
        options: MapOptions(
          initialCenter: const LatLng(-23.550520, -46.633308), // São Paulo
          initialZoom: 14.0,
          // Callback acionado ao clicar no mapa
          onTap: (tapPosition, latLng) {
            setState(() {
              _pontoClicado = latLng;
            });

            print('Latitude: ${latLng.latitude}, Longitude: ${latLng.longitude}');
          },
        ),
        children: [
          // Camada que renderiza o mapa visual (TileLayer)
          TileLayer(
            urlTemplate: 'https://openstreetmap.org{z}/{x}/{y}.png',
            userAgentPackageName: 'com.example.seu_app', // Substitua pelo ID do seu app
          ),
          // Camada que renderiza o marcador se houver um ponto clicado
          if (_pontoClicado != null)
            MarkerLayer(
              markers: [
                Marker(
                  point: _pontoClicado!,
                  width: 40,
                  height: 40,
                  child: const Icon(
                    Icons.location_on,
                    color: Colors.red,
                    size: 40,
                  ),
                ),
              ],
            ),
        ],
      ),
    );
  }
}
```
O código acima cria um aplicativo Flutter que exibe um mapa usando o pacote `flutter_map`. Quando o usuário clica em um ponto do mapa, a latitude e longitude desse ponto são capturadas e exibidas no console. Além disso, um marcador é adicionado ao ponto clicado para indicar visualmente a localização selecionada.

## App de Exemplo [flutter_pedal](https://github.com/wellifabio/sesi_ppdm2_flutter_pedal_gps_2026.git) utilizando Google Maps.