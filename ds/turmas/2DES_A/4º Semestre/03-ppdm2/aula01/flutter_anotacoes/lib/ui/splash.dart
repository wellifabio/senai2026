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
