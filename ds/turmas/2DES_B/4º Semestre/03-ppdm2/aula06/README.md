# Aula06 - App com dados de uma API própria

Consumir dados de uma API Back-end própria com um app Flutter

---
## [Exemplo App TehcMAN](https://github.com/wellifabio/flutter_techman_2025.git)
---

## Passos
- 1 Implante sua API na [Vercel(Aula03 de projetos)](../../05-psof3/aula03/README.md) ou outro serviço de nuvem.
- 2 Acrescente no seu App as dependência `http` para consumir dados da sua API e `shared_preferences` para compartilhar entre as telas:

```bash
flutter pub add http
flutter pub add shared_preferences
flutter pub get
```
- Confira o arquivo `pubspec.yaml`:

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

- 4 Desenvolva e teste seu **App**, ao concluir gere o `.APK` para instalar e testar em um aparelho Android.

## Tutorial: Livro de Receitas
Projeto Mobile (Flutter) com Full Stack
- API de um livro de Receitas implantada na **Vercel** [https://receitasapi-b-2025.vercel.app/](https://receitasapi-b-2025.vercel.app/)
- Repositório da API no [Github](https://github.com/wellifabio/receitasapp-expo-2025.git)
- [Front End do livro de Receitas](https://wellifabio.github.io/receitas-web-2025/) consumindo a API
- Repositório do Front-End no [Github](https://github.com/wellifabio/receitasapi-b-2025)

### Passos
- 1 Criar um novo projeto Flutter
- 2 Instalar as dependências
```bash
flutter pub add http
flutter pub add shared_preferences
flutter pub get
```