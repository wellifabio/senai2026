# Aula02 - Situações desafiadoras

## Capacidades técnicas
- 5 Projetar interfaces para dispositivos móveis
- 6 Implementar o código respeitando as características da linguagem na plataforma mobile 
- 7 Persistir dados em dispositivos móveis

|Elementos e funcionalidades|WidGets|
|-|:-:|
|Temas|ThemeData.light().copyWith()<br>ThemeData.dark().copyWith()|
|Imagens|Image.asset(), Icon()|
|Assincronicidade, Estados|async, setState|
|Carregar e salvar dados em Arquivo local|path_provider|
|Conversão de dados, classe Modelo de<br>MVC(Modelo, Visão e Controle)|.CSV|
|Botões de controle de conteúdos em tela|ElevatedButton()|
|Listas e / ou cards|ListView, Cards|

### Desafios práticos
### Contextualização
Com o intúito de nos capacitar a desenvolver pequenos aplicativos de uso local com alguns recursos nativos do framework Flutter, desenvolva os três aplicativos a seguir, como novos projetos.

### Desafio 01: [Caminhadas x calorias](https://github.com/wellifabio/senai_desafio_caminhadas_ui_mobile_persistencia_local_2026.git)

### Desafio 02: [Consumo de Água](https://github.com/wellifabio/senai_desafio_consumo_agua_ui_mobile_persistencia_local_2026.git)

### Desafio 03: [Abastecimento de Veículos](https://github.com/wellifabio/senai_desafio_abastecimento_ui_mobile_persistencia_local_2026.git)

## Entregas
- Cada aplicativo em um repositório github separado com README.md contendo:
    - Título do App
    - Tecnologias
    - Passos para testar
    - Prints das telas.
    - Arquivo .apk em /assets
- Envie os links dos repositórios neste [formulário](https://forms.gle/Yub8ux5j2xdCEQjv5)

## [Exemplo de App e entrega](https://github.com/wellifabio/sesi_ppdm2_flutter_anotacoes_arquivo_local_2026.git)

### Tutorial [GPS](./geolocation.md)

### Configurar o Ícone do aplicativo
Após iniciar um novo projeto flutter
- 1 Crie uma pasta `assets` e salve uma imagem dentro dela que será seu ícone
    - Desenhe utilizando Paint, Canvas, Draw.io, Figma ou a IA generativa que preferir
- 2 Salve como: `assets/icone.png`
- 3 Instale a dependência `flutter_launcher_icons`
    - Pelo terminal ou diretamente no arquivo `pubspec.yaml`
```bash
flutter pub add flutter_launcher_icons --dev
flutter pub get
```
- 4 Configure o `pubspec.yaml` para apontar seu ícone e acessar a pasta assets, semelhante ao script abaixo:
```yaml
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
```
- 5 Aplique as alterações com os comandos:
```bash
flutter pub get
flutter pub run flutter_launcher_icons:main
```
- Execute seu aplicativo em um emulador ou dispositovo celular para ver o ícone.

## Gerar APK
O arquivo **.apk** serve para testar o aplicativo em dispositivo **Android**
- Ao concluir uma parte do seu aplicativo, execute o comando a seguir no terminal do VsCode:
```bash
flutter build apk --release
```
O arquivo será gerado na pasta `build/app/outputs/flutter-apk/app-release.apk` e poderá ser instalado em qualquer dispositivo Android.
- Compie este arquivo pasta `assets` do seu projeto para que possa ser enviado ao github e baixado para um celular.
- Em seguida faça commit e push para o repositório remoto.
- Obs: Antes de fazer commit, execute o comando `flutter clean`
    - Este comando limpa o cache do projeto.