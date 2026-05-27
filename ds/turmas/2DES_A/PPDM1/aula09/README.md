# [Aula09 - Consumo de API](https://meet.google.com/nhx-wcmc-tqs)
## Assuntos estudados
- Consumir API REST
- Estudar documentação de API com Swagger
- Utilizar Autenticação JWT
## Tema da API
- No repositório do link a seguir temos a API de um sistema de gestão rural [AgroTech](https://github.com/wellifabio/agro-api-jserver-swagger.git).
## Passos para estudo
- 1 Acesse este [repositório](https://github.com/wellifabio/agro-api-jserver-swagger.git),
- 2 Clone-o em seu computador
- 3 Siga as instruções em **Readme.md** para executar e testar com **Swagger**.

## Vamos testar a API
- Criando usuário
- Fazendo login
- Recebendo o token
- Armazenando em 'Authorize'
- Listando os usuários
- Cadastando um animal
- Listando os animais cadastrados
- Fazendo upload de imagem
## Prit da tela do Swagger
![Print do Swagger no repositorio](https://github.com/wellifabio/agro-api-jserver-swagger/raw/main/swagger.png)

## Wrefame da UI(User Interface)
![Wireframe](./wireframes.png)
## Vamos desenvolver uma UI Web
- Para compreender o processo de segurança com autenticação JWT
- Página de login
- Página home, potegida pelas credenciais
- Listar Animais enviando o *Bearear token*
## Agora desenvolver uma UI Flutter
- Com base nos wireframes.

```dart
import 'package:flutter/material.dart';
import 'colors.dart';

abstract class AppTheme {
  static ThemeData appTheme = ThemeData.light().copyWith(
    scaffoldBackgroundColor: AppColors.p4,
    primaryColor: AppColors.p1,
    appBarTheme: AppBarTheme(
      backgroundColor: AppColors.p1,
      foregroundColor: AppColors.p4,
      titleTextStyle: TextStyle(
        fontFamily: 'PatrickHand',
        color: AppColors.p4,
        fontSize: 26,
        fontWeight: FontWeight.bold,
      ),
    ),
    textTheme: TextTheme(
      bodyMedium: TextStyle(
        fontFamily: 'PatrickHand',
        color: AppColors.p3,
        fontSize: 16,
      ),
      displayMedium: TextStyle(
        fontFamily: 'PatrickHand',
        color: AppColors.p3,
        fontSize: 16,
      ),
      labelMedium: TextStyle(
        fontFamily: 'PatrickHand',
        color: AppColors.p3,
        fontSize: 16,
      ),
      titleMedium: TextStyle(
        fontFamily: 'PatrickHand',
        color: AppColors.p3,
        fontSize: 18,
        fontWeight: FontWeight.bold,
      ),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: AppColors.p2,
        foregroundColor: AppColors.p4,
        textStyle: TextStyle(fontFamily: 'PatrickHand', fontSize: 22),
        elevation: 5,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      ),
    ),
    dialogTheme: DialogThemeData(
      backgroundColor: AppColors.p4,
      titleTextStyle: TextStyle(
        fontFamily: 'PatrickHand',
        color: AppColors.p1,
        fontSize: 22,
        fontWeight: FontWeight.bold,
      ),
      contentTextStyle: TextStyle(
        fontFamily: 'PatrickHand',
        color: AppColors.p2,
        fontSize: 16,
      ),
    ),
    inputDecorationTheme: InputDecorationTheme(
      filled: true,
      fillColor: AppColors.p4,
      hintStyle: TextStyle(
        fontFamily: 'PatrickHand',
        color: AppColors.p2,
        fontSize: 16,
      ),
      labelStyle: TextStyle(
        fontFamily: 'PatrickHand',
        color: AppColors.p1,
        fontSize: 16,
      ),
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(12),
        borderSide: BorderSide(color: AppColors.p2, width: 2),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(12),
        borderSide: BorderSide(color: AppColors.p1, width: 2),
      ),
    ),
    textButtonTheme: TextButtonThemeData(
      style: TextButton.styleFrom(
        foregroundColor: AppColors.p1,
        textStyle: TextStyle(
          fontFamily: 'PatrickHand',
          fontSize: 16,
          fontWeight: FontWeight.bold,
        ),
      ),
    ),
  );
}
```