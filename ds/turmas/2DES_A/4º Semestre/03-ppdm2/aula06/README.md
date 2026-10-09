# Aula06 - App com dados de uma API própria
Para consumir dados de uma API Back-end próprio

## App TehcMAN [Exemplo](https://github.com/wellifabio/flutter_techman_2025.git)

## Passos
- 1 Implante sua API na [Vercel(Aula03 de projetos)](../../05-psof3/aula03/README.md) ou outro serviço de nuvem.
- 2 Acrescente no seu App as dependência `http` para consumir dados da sua API e `shared_preferences` para compartilhar entre as telas
```bash
flutter pub add http
flutter pub add shared_preferences
flutter pub get
```` 
- Confira o arquivo `pubspec.yaml`
```yaml
dependencies:
  flutter:
    sdk: flutter
  http: ^1.1.0
  shared_preferences: ^2.2.2
```
- 3 Acrescente a linha a seguir no arquivo `./android/app/src/main/AndroidManifest.xml` antes da tag `<application>` para que as permissões de internet sejam habilitadas a API responda.
```xml
<uses-permission android:name="android.permission.INTERNET"/>
```
