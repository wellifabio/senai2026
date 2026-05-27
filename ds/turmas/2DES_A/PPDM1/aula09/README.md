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

## Adicionar fontes ao aplicativo
Baixe no google fonts ou deste repositório o arquivo de fonte [PatrickHands](./PatrickHand-Regular.ttf)
Salve em /assets/fonts em seu aplicativo
- Baixe o ícone do aplicativo também
- Altere o arquivo pubspec.yaml para habilitar o ícone e a fonte

```dart
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