# Traçar rotas no Google Maps
Para traçar rotas no Google Maps em Flutter, você precisa usar o pacote oficial `google_maps_flutter` combinado com a **Google Directions API** (ou um pacote auxiliar de decodificação) para desenhar o caminho usando *Polylines*.

## Passos principais para criar a rota
- Adicionar dependências:
    - Instale o `google_maps_flutter` e um pacote de requisição HTTP (como http) no seu arquivo pubspec.yaml.
- Obter os pontos da rota (Coordenadas):
    - Faça uma chamada HTTP para a Google Directions API passando o ponto de partida (origin) e o destino (destination), usando a sua chave de API do Google Cloud.
- Decodificar a resposta:
    - A API retorna uma string codificada (overview_polyline). Use um pacote como flutter_polyline_points para converter essa string em uma lista de objetos LatLng.
- Desenhar a Polyline no Mapa:
    - No widget GoogleMap, utilize a propriedade polylines para renderizar a linha azul (ou da cor de sua preferência) sobre as coordenadas obtidas.

## Aplicativo de exemplo
- 1 Crie um novo app flutter
- 2 Configure o AndroidManifest.xml com a API do [Google Maps](./google_maps.md)
- 3 Adicione as dependências através do terminal:
```bash
flutter pub add google_maps_flutter
flutter pub add flutter_polyline_points
flutter pub get
```
- Confira o `pubspec.yaml`
```yaml
dependencies:
  flutter:
    sdk: flutter
  google_maps_flutter: ^2.11.0 # Use a versão mais recente
  flutter_polyline_points: ^2.1.0 # Facilita a busca e decodificação da rota
```
- Edite o `lib/main.dart`
```dart
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:flutter_polyline_points/flutter_polyline_points.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: MapScreen());
  }
}

class MapScreen extends StatefulWidget {
  const MapScreen({super.key});

  @override
  State<MapScreen> createState() => _MapScreenState();
}

class _MapScreenState extends State<MapScreen> {
  // 1. Chave da API do Google Cloud
  final String googleApiKey = "AIzaSyBPbLx2MIcbUacRcA7yFNT4vNNWKQtn8Uk";

  // 2. Pontos de Origem e Destino
  static const LatLng _pontoOrigem = LatLng(
    -23.55052,
    -46.633308,
  ); // São Paulo (Sé)
  static const LatLng _pontoDestino = LatLng(
    -23.55552,
    -46.643308,
  ); // Exemplo de destino próximo

  // 3. Controladores e coleções do mapa
  late GoogleMapController mapController;
  final Map<PolylineId, Polyline> _polylines = {};
  final Set<Marker> _markers = {};

  @override
  void initState() {
    super.initState();
    _addMarkers();
    // _getRoutePolyline();
  }

  // Adiciona os marcadores visuais de início e fim no mapa
  void _addMarkers() {
    _markers.add(
      const Marker(
        markerId: MarkerId('origem'),
        position: _pontoOrigem,
        infoWindow: InfoWindow(title: 'Origem'),
      ),
    );
    _markers.add(
      const Marker(
        markerId: MarkerId('destino'),
        position: _pontoDestino,
        infoWindow: InfoWindow(title: 'Destino'),
      ),
    );
  }

  // Busca as coordenadas da rota e gera a linha
  Future<void> _getRoutePolyline() async {
    PolylinePoints polylinePoints = PolylinePoints(apiKey: googleApiKey);

    // Faz a requisição para a Directions API de forma simplificada
    PolylineResult result = await polylinePoints.getRouteBetweenCoordinates(
      request: PolylineRequest(
        origin: PointLatLng(_pontoOrigem.latitude, _pontoOrigem.longitude),
        destination: PointLatLng(
          _pontoDestino.latitude,
          _pontoDestino.longitude,
        ),
        mode: TravelMode.driving, // Modo de viagem (dirigindo, andando, etc.)
      ),
    );

    // Se a requisição for bem-sucedida, extrai os pontos
    if (result.points.isNotEmpty) {
      List<LatLng> polylineCoordinates = [];
      for (var point in result.points) {
        polylineCoordinates.add(LatLng(point.latitude, point.longitude));
      }

      // Desenha a linha no mapa utilizando o setState
      _generatePolyline(polylineCoordinates);
    } else {
      debugPrint("Erro ao buscar rota: ${result.errorMessage}");
    }
  }

  // Cria o objeto Polyline e atualiza a tela
  void _generatePolyline(List<LatLng> coordinates) {
    PolylineId id = const PolylineId("rota_decorada");
    Polyline polyline = Polyline(
      polylineId: id,
      color: Colors.blue, // Cor da linha da rota
      points: coordinates,
      width: 5, // Espessura da linha
    );

    setState(() {
      _polylines[id] = polyline;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Traçando Rotas no Mapa')),
      body: GoogleMap(
        initialCameraPosition: CameraPosition(target: _pontoOrigem, zoom: 14.5),
        markers: _markers,
        polylines: Set<Polyline>.of(_polylines.values),
        onMapCreated: (GoogleMapController controller) {
          mapController = controller;
        },
      ),
    );
  }
}

```
## Obtenha a chave de API Directions API
- Como obter e configurar a chave de API
- Acesse o [Google Cloud Console](https://console.cloud.google.com/):
  - Entre no Google Cloud Console com a sua conta Google.
  - Crie ou selecione um projeto:
    - No painel superior, clique em selecionar um projeto ou crie um novo projeto para o seu aplicativo.
  - Ative as APIs necessárias:
    - Vá no menu lateral em APIs e Serviços > Biblioteca.
    - Pesquise e ative a **Directions API** (ou a *Routes API*, dependendo de qual você for usar no pacote).
    - Ative também o Maps SDK for Android e o Maps SDK for iOS, caso vá exibir o mapa no seu app.
- Gere a chave de API:
  - Vá em APIs e Serviços > Credenciais.
  - Clique em Criar Credenciais e selecione Chave de API (API Key).
- Restrinja a sua chave (Recomendado):
  - Clique na chave criada para editá-la.
  - Em Restrições de aplicativos, selecione os aplicativos (Android/iOS) e adicione o nome do pacote e a assinatura SHA-1 (no Android) para proteger sua chave contra uso não autorizado.
- Copie sua chave e API e cole no local indicado no códiogo.
- Execute em um emulador
```bash
flutter run
```
## Resultado
O app abrirá um Mapa com uma rota taçada.