# Aula06 - App com dados de uma API própria

Consumir dados de uma API Back-end própria com um app Flutter

---
## [Exemplo App TehcMAN](https://github.com/wellifabio/flutter_techman_2025.git)
---

## Passos
- 1 Implante sua API na [Vercel(Aula03 de projetos)](../../05-psof3/aula03/README.md) ou outro serviço de nuvem.
- 2 Acrescente no seu App as dependência `http` para consumir dados da sua API, `intl` para conversões de tipos de dados e `shared_preferences` para compartilhar entre as telas:

```bash
flutter pub add http
flutter pub add intl
flutter pub add shared_preferences
flutter pub get
```
- Confira o arquivo `pubspec.yaml`:

```yaml
dependencies:
  flutter:
    sdk: flutter
  http: ^1.1.0
  intl: ^0.20.3
  shared_preferences: ^2.2.2
```
- 3 Acrescente a linha a seguir no arquivo `./android/app/src/main/AndroidManifest.xml` antes da tag `<application>` para que as permissões de internet sejam habilitadas a API responda.

```xml
<uses-permission android:name="android.permission.INTERNET"/>
```

- 4 Desenvolva e teste seu **App**, ao concluir gere o `.APK` para instalar e testar em um aparelho Android.

## Livro de Receitas
Projeto Mobile (Flutter) com Full Stack
- API de um livro de Receitas implantada na **Vercel** [https://receitasapi-b-2025.vercel.app/](https://receitasapi-b-2025.vercel.app/)
- Repositório da API no [Github](https://github.com/wellifabio/receitasapp-expo-2025.git)
- [Front End do livro de Receitas](https://wellifabio.github.io/receitas-web-2025/) consumindo a API
- Repositório do Front-End no [Github](https://github.com/wellifabio/receitasapi-b-2025)

### Desafio!
Crie um aplicativo de um livro de receitas que consuma esta API, modele semelhante ao wireframe abaixo, aplique tema, splash screen com animação e um design profissional.
<br>![wireframe](./wireframe.png)

### Entrega
- Envie para o Github com o arquivo [APK](../aula02/README.md) na pasta assets.
- Apresente o **App** ao instrutor em um aparelho celular Android, utilize um dos dispositivos disponibilizados pelo SESI.

---

<details>
<summary><h2>Tutorial App Receitas</h2></summary>

#### Configuração a estrutura do App
- 1 Criar um **novo projeto** Flutter
- 2 Instalar as dependências
```bash
flutter pub add http
flutter pub add shared_preferences
flutter pub add flutter_launcher_icons --dev
flutter pub get
```
- 3 Acrescente a linha a seguir no arquivo `./android/app/src/main/AndroidManifest.xml` antes da tag `<application>` 
```xml
<uses-permission android:name="android.permission.INTERNET"/>
```
- 4 Crie a seguinte estrutura de pastas em lib
```
lib
  ui
    style
      colors.dart
      theme.dart
    home.dart
    nova.dart
    splash.dart
  api.dart
  main.dart
```
- 5 Crie uma pasta `assets` em seu aplicativo
  - baixe o [icone.png](./icone.png) do aplicativo dentro dela
  - dentro de assets crie uma pasta fonts `assets/fonts` e baixe a font [PatrickHand-Regular.ttf](./PatrickHand-Regular.ttf) para dentro dela
```
assets
  fonts
    PatrickHand-Regular.ttf
  icone.png
```
  - acrescente os caminhos e confira o `pubspec.yaml` conforme modelo a seguir:
```yaml
dependencies:
  flutter:
    sdk: flutter
  http: ^1.6.0
  shared_preferences: ^2.5.6

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^6.0.0
  flutter_launcher_icons: ^0.14.4

flutter_launcher_icons:
  android: true
  ios: true
  image_path: "assets/icone.png"
  remove_alpha_ios: true

flutter:
  uses-material-design: true
  assets:
    - assets/
  fonts:
    - family: PatrickHand
      fonts:
        - asset: assets/fonts/PatrickHand-Regular.ttf
```
- 6 Execute os seguinte comando no terminal do VsCode para configurar o logo:
```bash
flutter pub get
flutter pub run flutter_launcher_icons:main
```
#### Desenvolvimento as telas
- main.dart
```dart
import 'package:flutter/material.dart';

import 'ui/splash.dart';
import 'ui/style/theme.dart';

void main() {
  runApp(
    MaterialApp(
      title: "Anotações",
      theme: AppTheme.temaClaro,
      darkTheme: AppTheme.temaEscuro,
      themeMode: ThemeMode.system,
      home: Splash(),
    ),
  );
}
```
- api.dart
```dart
class Api {
  static String baseUrl = 'https://receitasapi-b-2025.vercel.app/';
  static String getEndPoint(String endpoint) {
    return '$baseUrl$endpoint';
  }
}
```
- ui/style/colors.dart
```dart
import 'package:flutter/material.dart';

abstract class AppColors {
  static const Color c1 = Color(0xFF664422);
  static const Color c2 = Color(0xFF886644);
  static const Color c3 = Color(0xFFBB9988);
  static const Color c4 = Color(0xFFDDAA99);
  static const Color c5 = Color(0xFFFFFAEE);
}
```
- ui/style/theme.dart
```dart
import 'package:flutter/material.dart';

import 'colors.dart';

abstract class AppTheme {
  static ThemeData temaClaro = ThemeData.light().copyWith(
    scaffoldBackgroundColor: AppColors.c5,
    primaryColor: AppColors.c1,
    drawerTheme: DrawerThemeData(
      backgroundColor: AppColors.c5,
      scrimColor: AppColors.c2,
    ),
    iconTheme: IconThemeData(color: AppColors.c1),
    floatingActionButtonTheme: FloatingActionButtonThemeData(
      backgroundColor: AppColors.c1,
      foregroundColor: AppColors.c5,
      shape: CircleBorder(),
    ),
    appBarTheme: AppBarTheme(
      backgroundColor: AppColors.c1,
      foregroundColor: AppColors.c4,
      titleTextStyle: TextStyle(
        color: AppColors.c5,
        fontSize: 20,
        fontWeight: FontWeight.bold,
        fontFamily: 'PatrickHand',
      ),
    ),
    textButtonTheme: TextButtonThemeData(
      style: ButtonStyle(foregroundColor: WidgetStatePropertyAll(AppColors.c1)),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: AppColors.c1,
        foregroundColor: AppColors.c5,
        textStyle: TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.bold,
          fontFamily: 'PatrickHand',
        ),
      ),
    ),
    dialogTheme: DialogThemeData(
      backgroundColor: AppColors.c5,
      titleTextStyle: TextStyle(
        color: AppColors.c1,
        fontSize: 20,
        fontWeight: FontWeight.bold,
        fontFamily: 'PatrickHand',
      ),
      contentTextStyle: TextStyle(
        color: AppColors.c1,
        fontSize: 16,
        fontFamily: 'PatrickHand',
      ),
    ),
    listTileTheme: ListTileThemeData(
      textColor: AppColors.c1,
      iconColor: AppColors.c2,
      style: ListTileStyle.list,
      titleTextStyle: TextStyle(
        color: AppColors.c1,
        fontSize: 16,
        fontWeight: FontWeight.bold,
        fontFamily: 'PatrickHand',
      ),
    ),
    bottomNavigationBarTheme: BottomNavigationBarThemeData(
      backgroundColor: AppColors.c5,
      selectedIconTheme: IconThemeData(color: AppColors.c1),
      selectedItemColor: AppColors.c1,
      selectedLabelStyle: TextStyle(
        fontWeight: FontWeight.bold,
        fontSize: 18,
        fontFamily: 'PatrickHand',
      ),
    ),
  );
  static ThemeData temaEscuro = ThemeData.dark().copyWith(
    scaffoldBackgroundColor: AppColors.c1,
    primaryColor: AppColors.c5,
    drawerTheme: DrawerThemeData(
      backgroundColor: AppColors.c1,
      scrimColor: AppColors.c5,
    ),
    iconTheme: IconThemeData(color: AppColors.c5),
    floatingActionButtonTheme: FloatingActionButtonThemeData(
      backgroundColor: AppColors.c5,
      foregroundColor: AppColors.c1,
      shape: CircleBorder(),
    ),
    appBarTheme: AppBarTheme(
      backgroundColor: AppColors.c5,
      foregroundColor: AppColors.c2,
      titleTextStyle: TextStyle(
        color: AppColors.c1,
        fontSize: 20,
        fontWeight: FontWeight.bold,
        fontFamily: 'PatrickHand',
      ),
    ),
    textButtonTheme: TextButtonThemeData(
      style: ButtonStyle(foregroundColor: WidgetStatePropertyAll(AppColors.c5)),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: AppColors.c3,
        foregroundColor: AppColors.c1,
        textStyle: TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.bold,
          fontFamily: 'PatrickHand',
        ),
      ),
    ),
    dialogTheme: DialogThemeData(
      backgroundColor: AppColors.c1,
      titleTextStyle: TextStyle(
        color: AppColors.c5,
        fontSize: 20,
        fontWeight: FontWeight.bold,
        fontFamily: 'PatrickHand',
      ),
      contentTextStyle: TextStyle(
        color: AppColors.c4,
        fontSize: 16,
        fontFamily: 'PatrickHand',
      ),
    ),
    listTileTheme: ListTileThemeData(
      textColor: AppColors.c5,
      iconColor: AppColors.c4,
      style: ListTileStyle.list,
      titleTextStyle: TextStyle(
        color: AppColors.c5,
        fontSize: 16,
        fontWeight: FontWeight.bold,
        fontFamily: 'PatrickHand',
      ),
    ),
    bottomNavigationBarTheme: BottomNavigationBarThemeData(
      backgroundColor: AppColors.c1,
      selectedIconTheme: IconThemeData(color: AppColors.c5),
      selectedItemColor: AppColors.c5,
      selectedLabelStyle: TextStyle(
        fontWeight: FontWeight.bold,
        fontSize: 18,
        fontFamily: 'PatrickHand',
      ),
    ),
  );
}
```
- ui/nova.dart
```dart
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import '../api.dart';
import 'splash.dart';
import 'home.dart';

class Nova extends StatefulWidget {
  const Nova({super.key});

  @override
  State<Nova> createState() => _NovaState();
}

class _NovaState extends State<Nova> {
  String nome = '';
  String tipo = 'SALGADA';
  String ingredientes = '';
  String modoFazer = '';
  String img = '';
  double custoAproximado = 0.0;
  final List<String> _tipos = ['DOCE', 'SALGADA', 'BEBIDA'];
  int _tabIndice = 2;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('receitas')),
      body: Center(
        child: Padding(
          padding: EdgeInsets.all(18.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            spacing: 20,
            children: [
              TextField(
                decoration: InputDecoration(
                  hintText: 'Nome da receita',
                  labelText: 'Nome da receita:',
                ),
                onChanged: (value) => setState(() {
                  nome = value;
                }),
              ),
              DropdownButton<String>(
                value: tipo,
                hint: const Text('Selecione o tipo'),
                isExpanded: true,
                items: _tipos.map((String item) {
                  return DropdownMenuItem<String>(
                    value: item,
                    child: Text(item),
                  );
                }).toList(),
                onChanged: (String? novoValor) {
                  setState(() {
                    tipo = novoValor!;
                  });
                },
              ),
              TextField(
                decoration: InputDecoration(
                  hintText: 'Ingredientes',
                  labelText: 'Ingredientes:',
                ),
                onChanged: (value) => setState(() {
                  ingredientes = value;
                }),
              ),
              TextField(
                decoration: InputDecoration(
                  hintText: 'Modo de fazer',
                  labelText: 'Modo de fazer:',
                ),
                onChanged: (value) => setState(() {
                  modoFazer = value;
                }),
              ),
              TextField(
                decoration: InputDecoration(
                  hintText: 'URL da imagem',
                  labelText: 'URL da imagem:',
                ),
                onChanged: (value) => setState(() {
                  img = value;
                }),
              ),
              Image.network(
                img,
                width: 200,
                height: 180,
                fit: BoxFit.cover,
                errorBuilder: (context, error, stackTrace) =>
                    Icon(Icons.image_not_supported, size: 200),
              ),

              TextField(
                keyboardType: TextInputType.numberWithOptions(decimal: true),
                decoration: InputDecoration(
                  hintText: 'Custo R\$ aproximado',
                  labelText: 'Custo R\$ aproximado:',
                ),
                onChanged: (value) => setState(() {
                  custoAproximado = double.parse(value);
                }),
              ),
              ElevatedButton(
                onPressed: () => enviarReceita(),
                child: Text('Registrar Receita'),
              ),
            ],
          ),
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _tabIndice,
        onTap: (indice) {
          setState(() {
            _tabIndice = indice;
          });
          if (indice == 0) {
            Navigator.pushReplacement(
              context,
              MaterialPageRoute(builder: (context) => Splash()),
            );
          }
          if (indice == 1) {
            Navigator.pushReplacement(
              context,
              MaterialPageRoute(builder: (context) => Home()),
            );
          }
        },
        type: BottomNavigationBarType.fixed,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.flash_on), label: 'Splash'),
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.add), label: 'Nova'),
        ],
      ),
    );
  }

  Future<void> enviarReceita() async {
    String dados = '';
    if (img != '') {
      dados =
          '{"nome":"$nome", "tipo":"$tipo", "ingredientes":"$ingredientes", "modoFazer":"$modoFazer", "img":"$img", "custoAproximado":$custoAproximado}';
    } else {
      dados =
          '{"nome":"$nome", "tipo":"$tipo", "ingredientes":"$ingredientes", "modoFazer":"$modoFazer", "custoAproximado":$custoAproximado}';
    }
    if (nome != '' &&
        ingredientes != '' &&
        modoFazer != '' &&
        custoAproximado != 0) {
      try {
        final url = Uri.parse(Api.getEndPoint('receitas'));
        final response = await http.post(
          url,
          headers: {'Content-Type': 'application/json'},
          body: dados,
        );
        if (response.statusCode == 201) {
          if (mounted) {
            Navigator.pushReplacement(
              context,
              MaterialPageRoute(builder: (context) => Home()),
            );
          }
        } else {
          if (mounted) {
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text('Erro ao registar receita na API'),
                duration: Duration(seconds: 2),
              ),
            );
          }
        }
      } catch (_) {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text('Erro ao se comunicar com a API'),
              duration: Duration(seconds: 2),
            ),
          );
        }
      }
    } else {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Preencha todos os campos obrigatórios'),
            duration: Duration(seconds: 2),
          ),
        );
      }
    }
  }
}

```
- ui/home.dart
```dart
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import '../api.dart';
import 'nova.dart';
import 'splash.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List<dynamic> receitas = [];
  bool _carregando = true;
  int _tabIndice = 1;

  @override
  void initState() {
    super.initState();
    carregarReceitas();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('receitas')),
      body: _carregando
          ? Center(child: CircularProgressIndicator())
          : receitas.isEmpty
          ? Center(child: Text('Nenhuma receita encontrada'))
          : ListView.separated(
              padding: EdgeInsets.all(12),
              itemCount: receitas.length,
              separatorBuilder: (context, index) => Divider(height: 1),
              itemBuilder: (context, index) {
                final item = receitas[index] as Map<String, dynamic>;
                final nome = item['nome']?.toString() ?? 'Receita';
                final img = item['img']?.toString() ?? '';
                return ListTile(
                  contentPadding: EdgeInsets.symmetric(vertical: 8),
                  leading: SizedBox(
                    width: 56,
                    height: 56,
                    child: img.isNotEmpty
                        ? Image.network(
                            img,
                            width: 56,
                            height: 56,
                            fit: BoxFit.cover,
                            errorBuilder: (context, error, stackTrace) =>
                                Icon(Icons.image_not_supported),
                          )
                        : Icon(Icons.restaurant, size: 32),
                  ),
                  title: Text(nome),
                  trailing: GestureDetector(
                    onTap: () => confirmaExcluir(item['id']),
                    child: Icon(Icons.delete),
                  ),
                );
              },
            ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _tabIndice,
        onTap: (indice) {
          setState(() {
            _tabIndice = indice;
          });
          if (indice == 0) {
            Navigator.pushReplacement(
              context,
              MaterialPageRoute(builder: (context) => Splash()),
            );
          }
          if (indice == 2) {
            Navigator.pushReplacement(
              context,
              MaterialPageRoute(builder: (context) => Nova()),
            );
          }
        },
        type: BottomNavigationBarType.fixed,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.flash_on), label: 'Splash'),
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.add), label: 'Nova'),
        ],
      ),
    );
  }

  Future<void> carregarReceitas() async {
    setState(() {
      _carregando = true;
    });
    try {
      final url = Uri.parse(Api.getEndPoint('receitas'));
      final response = await http.get(url);
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data is List) {
          setState(() {
            receitas = data;
          });
          return;
        }
      }
      setState(() {
        receitas = [];
      });
    } catch (_) {
      setState(() {
        receitas = [];
      });
    } finally {
      setState(() {
        _carregando = false;
      });
    }
  }

  void confirmaExcluir(int id) {
    if (mounted) {
      showDialog(
        context: context,
        builder: (BuildContext context) => AlertDialog(
          title: Text("Confirma exclusão"),
          content: Text('Deseja realmente excluir a receita número: $id'),
          actions: [
            TextButton(
              child: const Text('Cancelar'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
            ElevatedButton(
              child: const Text('Confirmar'),
              onPressed: () {
                Navigator.of(context).pop();
                excluirReceita(id);
              },
            ),
          ],
        ),
      );
    }
  }

  Future<void> excluirReceita(int id) async {
    try {
      final url = Uri.parse(Api.getEndPoint('receitas/$id'));
      final response = await http.delete(url);
      if (response.statusCode == 204) {
        carregarReceitas();
      } else {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text('Erro ao excluir receita!'),
              duration: Duration(seconds: 2),
            ),
          );
        }
      }
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Erro ao se comunicar com a API!'),
            duration: Duration(seconds: 2),
          ),
        );
      }
    }
  }
}

```
- ui/splash.dart
```dart
import 'package:flutter/material.dart';

import 'home.dart';

class Splash extends StatefulWidget {
  const Splash({super.key});

  @override
  State<Splash> createState() => _SplashState();
}

class _SplashState extends State<Splash> with TickerProviderStateMixin {
  late AnimationController aumentar;
  double tamanho = 0;

  @override
  void initState() {
    super.initState();
    animacao();
  }

  void animacao() {
    aumentar = AnimationController(vsync: this, duration: Duration(seconds: 2))
      ..addListener(() {
        setState(() {
          tamanho = aumentar.value;
        });
      });
    aumentar.forward().then((value) => irParaHome());
  }

  void irParaHome() async {
    await Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (context) => Home()),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Transform.scale(
          scale: tamanho,
          child: Image.asset("assets/icone.png", width: 300),
        ),
      ),
    );
  }
}
```
- Salve e execute no navegador ou emulador
```bash
flutter pub get
flutter run
```
</details>