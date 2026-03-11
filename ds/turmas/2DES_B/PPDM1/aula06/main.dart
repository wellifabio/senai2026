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
  String? nome;
  double peso = 0.0;
  double altura = 0.0;
  double imc = 0.0;
  String? resultado = 'Resultado';

  void processar(BuildContext context) {
    setState(() {
      imc = peso / (altura * altura);
      if (imc < 20) {
        resultado =
            "$nome seu IMC é ${imc.toStringAsFixed(1)} você é magrinho(a)";
      } else {
        resultado =
            "$nome seu IMC é ${imc.toStringAsFixed(1)} você é gordinho(a)";
      }
    });
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text("Diagnóstico"),
          content: Text("$resultado"),
          actions: [
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: Text("Ok"),
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
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            spacing: 22.0,
            children: [
              Text(
                'Índice de massa corpórea',
                style: TextStyle(
                  color: Color.fromARGB(255, 100, 0, 0),
                  fontWeight: FontWeight.bold,
                  fontSize: 22.0,
                ),
              ),
              TextField(
                decoration: InputDecoration(labelText: 'Nome'),
                onChanged: (value) {
                  nome = value;
                },
              ),
              TextField(
                decoration: InputDecoration(labelText: 'Peso'),
                keyboardType: TextInputType.numberWithOptions(),
                onChanged: (value) {
                  peso = double.parse(value);
                },
              ),
              TextField(
                decoration: InputDecoration(labelText: 'Altura'),
                onChanged: (value) {
                  altura = double.parse(value);
                },
              ),
              ElevatedButton(
                onPressed: () {
                  processar(context);
                },
                child: Text("Calcuar"),
              ),
              Text("$resultado"),
            ],
          ),
        ),
      ),
    );
  }
}
