## flutter_map - Gratuito e Open Source
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