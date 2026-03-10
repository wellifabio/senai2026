# Aula06 - Flutter

Após instalar o ambiente flutter vamos criar um alô mundo:
- Abra o vscode, pressione CTRL + Shift + P e digite **flutter**, clique em **New Project**, escolha **"Empty..."** projeto vazio.
- Selecione a pasta de origem e coloque o nome do projeto.
- Pronto, um Alô Mundo será criado. basta executar em um navegador como o Chrome ou no Emulador.

## Alterando o código
Vamos criar um botão e um **alert** que abre ao clicar no botão
```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  void click(BuildContext context) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text("OK"),
          content: Text("Você clicou em OK"),
          actions: <Widget>[
            ElevatedButton(
              child: Text("Fechar"),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Builder(
          builder: (context) => Center(
            child: ElevatedButton(
              onPressed: () {
                click(context);
              },
              child: const Text("Ok"),
            ),
          ),
        ),
      ),
    );
  }
}
```
![Screenshot](./screenshot01.png)

### Inputs
Vamos criar um novo aplicativo chamado **inputs**
- Alterar o código para acrescentar dois TextFields para ler o título e o texto do alerta.
- Ao clicar no botão o alerta deve ser aberto com o título e texto informados
- O aplicativo anterior não possuía entrada de dados nem alteração nos atributos (Variáveis da classe) por isso é sem estado **StatelessWidget** (stl),  este deve ser **StatefulWidget** (stf) com alteração de estados.
```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatefulWidget {
  const MainApp({super.key});

  @override
  State<MainApp> createState() => _MainAppState();
}

class _MainAppState extends State<MainApp> {
  String? titulo;
  String? texto;

  void alert(BuildContext context) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text(titulo ?? "Sem título"),
          content: Text(texto ?? "Sem descrição"),
          actions: <Widget>[
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: Text("Fechar"),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Padding(
          padding: const EdgeInsets.all(12.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            spacing: 20.0,
            children: [
              TextField(
                decoration: InputDecoration(labelText: "Título"),
                onChanged: (text) {
                  titulo = text;
                },
              ),
              TextField(
                decoration: InputDecoration(labelText: "Texto"),
                onChanged: (text) {
                  texto = text;
                },
              ),
              Center(
                child: Builder(
                  builder: (buttonContext) => ElevatedButton(
                    onPressed: () {
                      alert(buttonContext);
                    },
                    child: Text('Abrir alerta'),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```
- Estamos utilizando o navegador "Chrome para testar", tente utilizar o Emulador do Android Studio para testar desta vez.
- A primeira vez que o utilizamos pode demorar um pouco, porém aos poucos vai ficando mais rápido.
