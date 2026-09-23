# Geolocalização
Obter dados do sensor GPS do celular
## Passos para implementar a geolocalização.
- 1 Adicionar a dependênciaAdicione o pacote no arquivo **pubspec.yaml** do seu projeto:
    - Via terminal
```bash
flutter pub add geolocator
flutter pub get
```
    - No arquivo `pubspec.yaml`
```yaml
dependencies:
  flutter:
    sdk: flutter
  geolocator: ^13.0.2
```
- 2 Configurar as permissões nativas
  - Android - Navegue até: `android/app/src/main/AndroidManifest.xml`:
    - Adicione antes da tag `<application>`
```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```
  - iOS - Navegue até: (ios/Runner/Info.plist):
    - Adicione dentro da tag <dict> principal:
```xml
<key>NSLocationWhenInUseUsageDescription</key>
<string>Precisamos da sua localização para mostrar sua posição no app.</string>
```
Segue o exemplo de uma função assíncrona que valida os serviços, pede permissão e captura as coordenadas.
```dart
import 'package:geolocator/geolocator.dart';

Future<Position?> obterCoordenadasGPS() async {
  bool servicoAtivo;
  LocationPermission permissao;

  // Verifica se o GPS está ligado no celular
  servicoAtivo = await Geolocator.isLocationServiceEnabled();
  if (!servicoAtivo) {
    return Future.error('O serviço de localização está desativado.');
  }

  // Verifica o status da permissão
  permissao = await Geolocator.checkPermission();
  if (permissao == LocationPermission.denied) {
    permissao = await Geolocator.requestPermission();
    if (permissao == LocationPermission.denied) {
      return Future.error('Permissão de localização negada.');
    }
  }

  if (permissao == LocationPermission.deniedForever) {
    return Future.error('Permissão negada permanentemente. Altere nas configurações.');
  }

  // Retorna a posição atual
  Position position = await Geolocator.getCurrentPosition(
    desiredAccuracy: LocationAccuracy.high,
  );
  
  print("Latitude: ${position.latitude}, Longitude: ${position.longitude}");
  return position;
}
```
