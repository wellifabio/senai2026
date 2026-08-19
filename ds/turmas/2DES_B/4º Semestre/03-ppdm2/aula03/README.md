# Aula03

## Capacidades técnicas
- 5 Projetar interfaces para dispositivos móveis
- 6 Implementar o código respeitando as características da linguagem na plataforma mobile 

## Conhecimentos
- 2 Criação de interface 
  - 2.1 Leiaute de tela 
    - 2.1.1 Estrutura 
    - 2.1.2 Tipos 
    - 2.1.3 Gerenciadores 
    - 2.1.4 Componentes de tela 
    - 2.1.5 Menu 
- 3 Recursos de hardware 
  - 3.1 Bluetooth 
  - 3.2 GPS 
  - 3.3 Wifi 
  - 3.4 Acelerômetro 
  - 3.5 Multimídia 
    - 3.5.1 Áudio 
    - 3.5.2 Câmera

## Menu sadwish
Para criar um menu sanduíche (conhecido como Drawer no Flutter) que navega entre telas e possui um botão para sair do aplicativo, utilize o widget **Scaffold** com a propriedade **drawer** combinada com ListView e ListTile para os ítens do menu com Navigator.push() ou Navigator.pushReplacement() para navegar entre as telas.
- SystemNavigator.pop() para fechar o app.
- ListView e ListTile para os ítens do menu
- Navigator.push() ou Navigator.pushReplacement() para navegar entre as telas.
- Abaixo segue um exemplo de uma pagina `home.dart` com menu para navegar para outras duas telas (splash.dart e trajetos.dart) e fechar o aplicativo.

```dart
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'splash.dart';
import 'trajetos.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Home")),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            ListTile(
              trailing: Icon(Icons.chevron_left, size: 50),
              onTap: () => Navigator.pop(context),
            ),
            DrawerHeader(child: Icon(Icons.person, size: 100)),
            ListTile(
              leading: Icon(Icons.splitscreen),
              title: Text('Splash'),
              onTap: () => Navigator.pushReplacement(
                context,
                MaterialPageRoute(builder: (context) => Splash()),
              ),
            ),
            ListTile(
              leading: Icon(Icons.home),
              title: Text('Home'),
              onTap: () => Navigator.pop(context),
            ),
            ListTile(
              leading: Icon(Icons.directions_bike),
              title: Text('Trajetos'),
              onTap: () => Navigator.pushReplacement(
                context,
                MaterialPageRoute(builder: (context) => Trajetos()),
              ),
            ),
            ListTile(
              leading: Icon(Icons.exit_to_app),
              title: Text('Sair'),
              onTap: () => SystemNavigator.pop(),
            ),
          ],
        ),
      ),
      body: Center(child: Text("Home")),
    );
  }
}

```
<img alt="Print01" src="./assets/print01.png" width=350>

## Geolocalização
### Passos para implementar a geolocalização.
- 1 Adicionar a dependênciaAdicione o pacote no arquivo **pubspec.yaml** do seu projeto:
```yaml
dependencies:
  flutter:
    sdk: flutter
  geolocator: ^13.0.2
```
- 2 Configurar as permissões nativas
  - Android (android/app/src/main/AndroidManifest.xml):
    - Adicione antes da tag `<application>`
```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```
  - iOS (ios/Runner/Info.plist):
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
A seguir um exemplo no mesmo arquivo `home.dart` com o menu e utilizando a função para obter a localização, latitude e longitude:
```dart
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:geolocator/geolocator.dart';

import 'splash.dart';
import 'trajetos.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  String latitude = "";
  String longitude = "";
  Position? p;

  @override
  initState() {
    obterCoordenadasGPS();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Home")),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            ListTile(
              trailing: Icon(Icons.chevron_left, size: 50),
              onTap: () => Navigator.pop(context),
            ),
            DrawerHeader(child: Icon(Icons.person, size: 100)),
            ListTile(
              leading: Icon(Icons.splitscreen),
              title: Text('Splash'),
              onTap: () => Navigator.pushReplacement(
                context,
                MaterialPageRoute(builder: (context) => Splash()),
              ),
            ),
            ListTile(
              leading: Icon(Icons.home),
              title: Text('Home'),
              onTap: () => Navigator.pop(context),
            ),
            ListTile(
              leading: Icon(Icons.directions_bike),
              title: Text('Trajetos'),
              onTap: () => Navigator.pushReplacement(
                context,
                MaterialPageRoute(builder: (context) => Trajetos()),
              ),
            ),
            ListTile(
              leading: Icon(Icons.exit_to_app),
              title: Text('Sair'),
              onTap: () => SystemNavigator.pop(),
            ),
          ],
        ),
      ),
      body: Center(
        child: Text(
          'Você está em \nlatitude: $latitude \nlongitude: $longitude',
        ),
      ),
    );
  }

  Future<void> obterCoordenadasGPS() async {
    bool servicoAtivo;
    LocationPermission permissao;

    servicoAtivo = await Geolocator.isLocationServiceEnabled();
    if (!servicoAtivo) {
      return Future.error('O serviço de localização está desativado.');
    }

    permissao = await Geolocator.checkPermission();
    if (permissao == LocationPermission.denied) {
      permissao = await Geolocator.requestPermission();
      if (permissao == LocationPermission.denied) {
        return Future.error('Permissão de localização negada.');
      }
    }

    if (permissao == LocationPermission.deniedForever) {
      return Future.error(
        'Permissão negada permanentemente. Altere nas configurações.',
      );
    }

    Position position = await Geolocator.getCurrentPosition(
      locationSettings: LocationSettings(),
    );

    setState(() {
      latitude = position.latitude.toString();
      longitude = position.longitude.toString();
    });
  }
}
```
<img alt="Print02" src="./assets/print02.png" width=350>

## Exemplo [flutter_pedal](https://github.com/wellifabio/sesi_flutter_pedal_gps_2026.git)


