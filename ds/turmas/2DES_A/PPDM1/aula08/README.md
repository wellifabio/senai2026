# Aula08

## Objetivos
- Splash Screen
    - Animações, movimento e escala
- Passar informações entre telas
    - Biblioteca: shared_preferences.dart / SharedPreferences
- Tema
    - Paleta de cores
    - Estilização de tema para o App
- Leitura de dados de aquivo local de texto JSON
    - rootBundle.loadString()
- Builder
    - Criar o arquivo **.apk** para testar em celular Android

## Projetos de exemplo
- Primeiro desafio [SplashScreen](https://github.com/wellifabio/flutter-splash-shared-2026.git): Animação e passar dados entre telas
    - Teste este projeto
    - Estude os códigos do diretório **lib**
    - Apos testar com seu VsCode, feche o projeto e o VsCode
    - Faça a atividade proposta criando um novo app do Zero
- Segundo desafio [SplashScreen](https://github.com/wellifabio/flutter-estilo-mokup-json-2026.git): Carregar dados de arquivo de texto Mockup.
    - Teste este projeto
    - Estude os códigos do diretório **lib**
    - Apos testar com seu VsCode, feche o projeto e o VsCode
    - Faça a atividade proposta criando um novo app do Zero

## Tutoriais
#### Iniciar um novo projeto flutter
- Abra o vscode, pressione CTRL + Shift + P e digite **flutter**, clique em **New Project**, escolha **"Empty..."** projeto vazio.
- Selecione a pasta "Área de trabalho" por exemplo
- Coloque o nome do projeto, todas em minúsculas sem espaços ex: "flutter_splash_aula08"
- Pronto, um Alô Mundo será criado. basta executar em um navegador como o **Chrome** ou no Emulador do Android Estudio.
    - Encontre o arquivo lib/main e clique em play.
    - Configure o pubspec.yaml com as dependências necessárias
    - No terminal dê o comando flutter pub get para atualizar e execute o projeto novamente
    ```bash
    flutter pub get
    flutter run
    ```