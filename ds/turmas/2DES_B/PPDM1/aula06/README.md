# Aula06 - Flutter

Após instalar o ambiente flutter vamos criar um alô mundo:
- Abra o vscode, pressione CTRL + Shift + P e digite **flutter**, clique em **New Project**, escolha **"Empty..."** projeto vazio.
- Selecione a pasta de origem e coloque o nome do projeto.
- Pronto, um Alô Mundo será criado. basta executar em um navegador como o Chrome ou no Emulador.

## Alterando o código
Vamos criar um botão e um alert que abre ao clicar no botão
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