# Aula07 - Home Screen Widget e Widget personalizado
Para criar um widget personalizado que exibe uma informação na tela do seu aplicativo Flutter, você deve definir uma classe que estende StatelessWidget (se o conteúdo for estático) ou StatefulWidget (se a informação mudar ao longo do tempo)

## [Documentação oficial](https://docs.flutter.dev/learn/pathway/tutorial/widget-fundamentals)

## [Widget personalizado](./widget_personalizado.md)

<details>
<summary><h2> Home Screen Widget </h2></summary>

Essa "telinha que parece um ícone" na verdade se chama **Home Screen Widget** (ou App Widget no Android e WidgetKit no iOS).
Como esses widgets rodam diretamente no sistema operacional do celular (fora do app), o Flutter não consegue desenhá-los na tela de forma 100% direta. A forma mais fácil e recomendada de fazer isso é usando o pacote chamado home_widget. Ele serve como uma ponte para enviar dados ou até mesmo uma imagem gerada no Flutter direto para a tela inicial.
- Aqui está o resumo prático de como estruturar isso para exibir uma imagem:

### 1 Crie um novo App
Crie um novo App flutter chamado `flutter_home_widget` com a seguinte estrutura de pastas:
```
flutter_home_widget/
  assets/
    logo.png
  lib/
    main.dart
  pubspec.yaml
```
### 2 Instale as dependências
Instale as dependências necessárias no arquivo pubspec.yaml, configurando o pacote home_widget, apontando a pasta assets para a imagem que será exibida no widget e adicionando as permissões necessárias para o Android e iOS.
```bash
flutter pub add home_widget
```
```yaml
dependencies:
  flutter:
    sdk: flutter
  home_widget: ^0.10.0

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^6.0.0

flutter:
  uses-material-design: true
  assets:
    - assets/
```
```bash
flutter pub get
```
### 3 Configure a imagem como icone do aplicativo
- Baixe o arquivo `icone.png` e coloque na pasta `assets/` do projeto.
- Dê o comando a seguir para configurar o ícone do aplicativo com a imagem que você baixou:
```bash
flutter pub run flutter_launcher_icons:main
```
</details>

## Exemplo: [App Receitas](https://github.com/wellifabio/sesi_ppdm2_receitas_flutter_api_2026.git)
App de receitas que consome uma API REST para exibir informações sobre pratos e receitas.
- O app utiliza widgets personalizados que mostra o nome e foto de uma receita aleatória e ao ser clicado abre a tela home com a lista de receitas.

## Atividade prática
- Crie um **Home Screen Widget** em um de seus projetos Flutter, que exiba informações relevantes para o seu aplicativo.
### Entrega
- Teste o widget no seu aplicativo e tire um print da tela mostrando o widget em ação.
- Acrescente o print da tela no README.md do seu repositório GitHub.
- Apresente o repositório para o professor vistar e avaliar a atividade.