# Aula01 - Persistência de dados no celular

## Conhecimentos
- 5 Persistência de dados em dispositivos móveis 
  - 5.1 Armazenamento 
    - 5.1.1 Interno 
    - 5.1.2 Externo 
  - 5.2 Banco de dados interno
  - Temas
  - Fontes
  - Animações

## Tecnologias
- Flutter
- VsCode
- Android Studio

|Temas|WidGets|
|-|:-:|
|Tema|ThemeData.light().copyWith()|
|Imagens|Image.asset(), Icon()|
|Assincronicidade|async|
|Carregar e salvar dados em Arquivo local|path_provider|
|Conversão de dados, classe Model de MVC|CSV|
|Utilização de fontes de texto externas .ttf|assets/fonts|
|Botões de controle de conteúdos em tela|ElevatedButton()|

### Limpar o ambiente de desenvolvimento
- Limpar cache do flutter, abra o power shell como administrador e execute os comandos:

```bash
flutter clean
flutter doctor
flutter upgrade
# caso apresente erro no upgrade
flutter upgrade --force
```

## Atividade: App de Anotações
### Contextualização
Com o constate uso de celular, sempre precisamos anotar alguma informação e utilizamos diversos meios como alternativa
### Desafio
construir um App simples em flutter de um bloco de anotações personalizado que armazene os dados internamente
- Funcionalidade CRUD com arquivo de texto CSV
- Uma tela de Splas com alguma animação de entrada e/ou saída
- Uma tela com a lista de anotações contendo data, hora e texto_da_anotacao
### Telas de um App de exemplo
|Splash Screen|Home|
|-|-|
|![Splash](./info/Screenshot01.png)|![Home](./info/Screenshot02.png)|

## Tutoriais

- [DatePicker](./datepicker.md)
- [Calendar](./calendar.md)
- [SQLite](./sqlite.md)

## [Vamos iniciar juntos](https://meet.google.com/ifd-whhw-zyw)
- Inicie un novo projeto em flutter chamado flutter_anotacoes
- Baixe deste repositório os arquivos em Assets com imagens e fontes
- Crie a estrutura de pastas em lib e configure o pubspec.yaml da seguinte forma:
```
lib
    main.dart
    ui
        home.dart
        splash.dart
        style
            colors.dart
            theme.dart
    root
        file.dart
    models
        anotacao.dart
```
```
assets
    icone.png
    fonts
        PatrickHand-Regular.ttf
```
- pubspec.yaml
```yaml
dependencies:
  flutter:
    sdk: flutter
  path_provider: ^2.1.5
  intl: ^0.18.0

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

### Arquivos base
- main.dart
```dart
import 'package:flutter/material.dart';

import 'ui/splash.dart';

void main() {
  runApp(MaterialApp(title: "Anotações", home: Splash()));
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

class _SplashState extends State<Splash> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          spacing: 40,
          children: [
            Image.asset("./assets/icone.png", width: 200),
            ElevatedButton(
              onPressed: () => Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => Home()),
              ),
              child: Text("Iniciar"),
            ),
          ],
        ),
      ),
    );
  }
}
```
- models/anotacao.dart
```dart
class Anotacao{
  String data;
  String texto;
  Anotacao({required this.data, required this.texto});
  String toCSV(){
    return '$data;$texto';
  }
  factory Anotacao.fromCSV(String csv){
    List<String> partes = csv.split(';');
    return Anotacao(data: partes[0], texto: partes[1]);
  }
}
```

- ui/home.dart
```dart
import 'package:flutter/material.dart';
import '../models/anotacao.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List<Anotacao> anotacoes = [
    Anotacao(data: "2026-07-24 10:00", texto: "Tomar café da manhã"),
    Anotacao(data: "2026-07-24 12:00", texto: "Almoçar"),
    Anotacao(data: "2026-07-24 15:00", texto: "Tomar café da tarde"),
    Anotacao(data: "2026-07-24 17:00", texto: "Ir para a casa"),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Anotações"),
        actions: [
          GestureDetector(
            onTap: () {},
            child: Container(
              margin: EdgeInsets.only(right: 20),
              child: Icon(Icons.add),
            ),
          ),
        ],
      ),
      body: Center(
        child: ListView.separated(
          itemBuilder: (context, i) => ListTile(
            title: Text(anotacoes[i].data),
            subtitle: Text(anotacoes[i].texto),
            trailing: Icon(Icons.delete),
          ),
          separatorBuilder: (_, _) => Divider(),
          itemCount: anotacoes.length,
        ),
      ),
    );
  }
}
```
![Parte01](./info/parte01.png)
### Criando funcionailidades de cadastro e exclusão
Altere o arquivo a seguir:
- ui/home.dart
```dart
import '../models/anotacao.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List<Anotacao> anotacoes = [];
  String texto = "";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Anotações"),
        actions: [
          GestureDetector(
            onTap: () {
              cadastrar();
            },
            child: Container(
              margin: EdgeInsets.only(right: 20),
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.black,
              ),
              child: Icon(Icons.add, size: 40, color: Colors.white),
            ),
          ),
        ],
      ),
      body: Center(
        child: ListView.separated(
          itemBuilder: (context, i) => ListTile(
            title: Text(anotacoes[i].data),
            subtitle: Text(anotacoes[i].texto),
            trailing: GestureDetector(
              onTap: () => excluir(i),
              child: Icon(Icons.delete),
            ),
          ),
          separatorBuilder: (_, _) => Divider(),
          itemCount: anotacoes.length,
        ),
      ),
    );
  }

  void cadastrar() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Nova anotação'),
        content: TextField(
          decoration: InputDecoration(hintText: "Digite sua anotação"),
          onChanged: (value) => setState(() {
            texto = value;
          }),
        ),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.of(context).pop();
              String data = DateTime.now().toString().substring(0, 16);
              setState(() {
                anotacoes.add(Anotacao(data: data, texto: texto));
              });
            },
            child: Text("Cadastrar"),
          ),
        ],
      ),
    );
  }

  void excluir(int indice) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Excluir anotação'),
        content: Text('Confirma a exclusão desta anotação'),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.of(context).pop();
              setState(() {
                anotacoes.removeAt(indice);
              });
            },
            child: Text("Ok"),
          ),
        ],
      ),
    );
  }
}
```
![Parte02](./info/parte02.png)
### Configuramdo paleta de cores e temas
Preencha os arquivos a seguir:
- ui/style/colors.dart
```dart
import 'package:flutter/material.dart';

abstract class AppColors {
  static const Color c1 = Color(0xFF001133);
  static const Color c2 = Color(0xFF334499);
  static const Color c3 = Color(0xFF7788AA);
  static const Color c4 = Color(0xFF99AADD);
  static const Color c5 = Color(0xFFF1FFFF);
}

```
- ui/style/theme.dart
```dart
import 'package:flutter/material.dart';
import 'colors.dart';

abstract class AppTheme {
  static final ValueNotifier<ThemeMode> modo = ValueNotifier(ThemeMode.light);
  static void alternarTema() {
    if (modo.value == ThemeMode.light) {
      modo.value = ThemeMode.dark;
    } else {
      modo.value = ThemeMode.light;
    }
  }
  static ThemeData temaClaro = ThemeData.light().copyWith(
    scaffoldBackgroundColor: AppColors.c5,
    primaryColor: AppColors.c1,
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
  );
  static ThemeData temaEscuro = ThemeData.dark().copyWith(
    scaffoldBackgroundColor: AppColors.c1,
    primaryColor: AppColors.c5,
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
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: AppColors.c5,
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
        color: AppColors.c5,
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
  );
}
```
Vamos configurar o main.dart para que o App utilize o tema claro ou escuro de acordo com a configuração do sistema operacional do celular.

- main.dart
```dart
import 'package:flutter/material.dart';
import 'ui/splash.dart';
import 'ui/style/theme.dart';

void main() {
  runApp(MaterialApp(
    title: "Anotações",
    theme: AppTheme.temaClaro,
    darkTheme: AppTheme.temaEscuro,
    themeMode: ThemeMode.system,
    home: Splash(),
  ));
}
```

### Tema claro e tema escuro com alternância de tema
Altere os arquivos a seguir: 
- main.dart
```dart
import 'package:flutter/material.dart';

import 'ui/splash.dart';
import 'ui/style/theme.dart';

void main() {
  runApp(
    ValueListenableBuilder<ThemeMode>(
      valueListenable: AppTheme.modo,
      builder: (context, themeMode, _) {
        return MaterialApp(
          title: "Anotações",
          theme: AppTheme.temaClaro,
          darkTheme: AppTheme.temaEscuro,
          themeMode: themeMode,
          home: Splash(),
        );
      },
    ),
  );
}
```
- ui/splash.dart
```dart
import 'package:flutter/material.dart';

import 'home.dart';
import 'style/theme.dart';

class Splash extends StatefulWidget {
  const Splash({super.key});

  @override
  State<Splash> createState() => _SplashState();
}

class _SplashState extends State<Splash> {
  @override
  Widget build(BuildContext context) {
    final temaEscuro = AppTheme.modo.value == ThemeMode.light ? false : true;

    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          spacing: 20,
          children: [
            Image.asset('./assets/icone.png', width: 200),
            SizedBox(
              width: 200,
              child: SwitchListTile(
                title: Text("Tema escuro"),
                value: temaEscuro,
                onChanged: (value) {
                  setState(() {
                    AppTheme.modo.value = value
                        ? ThemeMode.dark
                        : ThemeMode.light;
                  });
                },
              ),
            ),
            ElevatedButton(
              onPressed: () => Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => Home()),
              ),
              child: Text("Iniciar"),
            ),
          ],
        ),
      ),
    );
  }
}
```
![Parte03](./info/parte03.png)

## Gerenciar o arquivo local
Agora para os dados persistirem no em um arquivo `.CSV` no celular, vamos editar o arquivo:
- /root/file.dart
```dart
import 'dart:io';
import 'package:path_provider/path_provider.dart';

abstract class GerenciarArquivo {
  static Future<String> get _caminhoLocal async {
    final diretorio = await getApplicationDocumentsDirectory();
    return diretorio.path;
  }

  static Future<File> get _arquivoLocal async {
    final caminho = await _caminhoLocal;
    return File('$caminho/anotacoes.csv');
  }

  static Future<File> salvar(String texto) {
    return _arquivoLocal.then((arquivo) => arquivo.writeAsString(texto));
  }

  static Future<String> abrir() async {
    try {
      final arquivo = await _arquivoLocal;
      return await arquivo.readAsString();
    } catch (e) {
      return '';
    }
  }
}
```
- Editar o arquivo `home.dart` acrescentando as funções carregarDados() e salvarDados() para efetivar a persistência de dados no celular
- /ui/home.dart
```dart
import '../root/file.dart';
import '../models/anotacao.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List<Anotacao> anotacoes = [];
  String texto = "";

  @override
  void initState() {
    super.initState();
    carregarDados();
  }

  void carregarDados() async{
    List<String> linhas = (await GerenciarArquivo.abrir()).split('\n');
    setState(() {
      anotacoes = linhas.map((linha) => Anotacao.fromCSV(linha)).toList();
    });
  }

  void salvarDados() {
    String conteudo = anotacoes.map((anotacao) => anotacao.toCSV()).join('\n');
    GerenciarArquivo.salvar(conteudo);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Anotações"),
        actions: [
          GestureDetector(
            onTap: () {
              cadastrar();
            },
            child: Container(
              margin: EdgeInsets.only(right: 20),
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.black,
              ),
              child: Icon(Icons.add, size: 40, color: Colors.white),
            ),
          ),
        ],
      ),
      body: Center(
        child: ListView.separated(
          itemBuilder: (context, i) => ListTile(
            title: Text(anotacoes[i].data),
            subtitle: Text(anotacoes[i].texto),
            trailing: GestureDetector(
              onTap: () => excluir(i),
              child: Icon(Icons.delete),
            ),
          ),
          separatorBuilder: (_, _) => Divider(),
          itemCount: anotacoes.length,
        ),
      ),
    );
  }

  void cadastrar() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Nova anotação'),
        content: TextField(
          decoration: InputDecoration(hintText: "Digite sua anotação"),
          onChanged: (value) => setState(() {
            texto = value;
          }),
        ),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.of(context).pop();
              String data = DateTime.now().toString().substring(0, 16);
              setState(() {
                anotacoes.add(Anotacao(data: data, texto: texto));
              });
              salvarDados();
            },
            child: Text("Cadastrar"),
          ),
        ],
      ),
    );
  }

  void excluir(int indice) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Excluir anotação'),
        content: Text('Confirma a exclusão desta anotação'),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.of(context).pop();
              setState(() {
                anotacoes.removeAt(indice);
              });
              salvarDados();
            },
            child: Text("Ok"),
          ),
        ],
      ),
    );
  }
}
```
### Testando o Aplicativo
- Por envolver arquivo local, não é possível testar no navegador WEB a persistência de dados
- Abra o emulador do Android Studio e execute o aplicativo para testar.

#### Comando para configurar o ícone do aplicativo
Ao instalar o APK ou testar no emulador, mesmo já configurado no pubspec.yaml, o ícone do aplicativo ainda é o padrão do Flutter, para alterar o ícone do aplicativo, siga os passos:
- Execute o comando no terminal do VsCode:
```bash
flutter pub run flutter_launcher_icons:main
```

## Gerar o arquivo .apk para testar em dispositivo Android
Execute o comando no terminal do VsCode:
```bash
flutter build apk --release
```
O arquivo será gerado na pasta `build/app/outputs/flutter-apk/app-release.apk` e poderá ser instalado em qualquer dispositivo Android.
- Compie este arquivo e salve na pasta `assets` deste repositório para que possamos instalar em nossos celulares e testar a persistência de dados.
- Em seguida faça commit e push para o repositório remoto.
  - Não se esqueça de criar um bom Readme.md para o seu projeto, com imagens e explicações de como utilizar o aplicativo.
- Obs:
  - Antes de fazer commit, de o comando `flutter clean` para limpar o cache do projeto e não enviar arquivos desnecessários para o repositório remoto.

## [Exemplo do aplicativo em repositório público no github](https://github.com/wellifabio/sesi_ppdm2_flutter_anotacoes_arquivo_local_2026.git)

## Desafio: Melhorar o aplicativo
- Adicionar a funcionalidade de editar uma anotação
- Adicionar a funcionalidade de pesquisar uma anotação

## Referências
- [Flutter](https://flutter.dev/)