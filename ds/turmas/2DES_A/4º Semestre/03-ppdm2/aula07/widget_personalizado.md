# Widget personalizado
Para criar um widget personalizado que exibe uma informação na tela do seu aplicativo Flutter, você deve definir uma classe que estende StatelessWidget (se o conteúdo for estático) ou StatefulWidget (se a informação mudar ao longo do tempo)

## [Documentação oficial](https://docs.flutter.dev/learn/pathway/tutorial/widget-fundamentals)

## Exemplo: [App Receitas](https://github.com/wellifabio/sesi_ppdm2_receitas_flutter_api_2026.git)
App de receitas que consome uma API REST para exibir informações sobre pratos e receitas.
- O app utiliza widgets personalizados que mostra o nome e foto de uma receita aleatória e ao ser clicado abre a tela home com a lista de receitas.

### Passo 1: Criar a classe do Widget
- 1 Crie um novo App flutter chamado `flutter_widget_externo` ou abra o projeto existente.
<details>
  <summary>Exemplo de estrutura de pastas</summary>
  
  ```
  flutter_widget_externo/
  ├── lib/
  │   ├── main.dart
  │   ├── ui/
  │   │   └── home.dart
  │   └── meu_info_widget.dart
  └── pubspec.yaml
  ```
  - main.dart: arquivo principal do app, onde é definido o ponto de entrada e a tela inicial.
  ```dart
  import 'package:flutter/material.dart';
  
  import 'ui/home.dart';
  void main() {
    runApp(MaterialApp(title: "Widget Externo Flutter", home: Home()));
  }
  ```
  - home.dart: arquivo que contém a tela principal do app, onde o widget personalizado será utilizado.
  ```dart
  import 'package:flutter/material.dart';

  class Home extends StatefulWidget {
    const new({super.key});

    @override
    State<Home> createState() => _HomeState();
  }

  class _HomeState extends State<Home> {
    @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(title: const Text("Widget Externo Flutter")),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [Center(child: Text("Hello World!"))],
        ),
      );
    }
  }
  ```

</details>

- 2 Crie uma nova classe que estende StatelessWidget ou StatefulWidget, dependendo da necessidade.
- 3 Crie um arquivo `meu_info_widget.dart` separado ou use o mesmo arquivo da sua tela para definir o componente visual.
  - Utilize widgets nativos como Container, Padding, Card e Text para estruturar a informação.
```dart
import 'package:flutter/material.dart';

// 1. Definição de um StatelessWidget customizado
class MeuInfoWidget extends StatelessWidget {
  final String informacao;

  const MeuInfoWidget({super.key, required this.informacao});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(16.0),
      padding: const EdgeInsets.all(16.0),
      decoration: BoxDecoration(
        color: Colors.blue.shade50,
        borderRadius: BorderRadius.circular(12.0),
        border: Border.all(color: Colors.blue.shade200),
      ),
      child: Row(
        children: [
          const Icon(Icons.info_outline, color: Colors.blue, size: 28),
          const SizedBox(width: 12),
          Expanded(
            child: Text(
              informacao,
              style: const TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w500,
                color: Colors.black87,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
```

### Passo 2: Inserir o Widget na Árvore de Componentes da Tela
Chame o seu novo widget dentro do método build da sua tela principal (dentro de uma Column, ListView ou qualquer outro widget de layout), passando os dados necessários:
```dart
import 'package:flutter/material.dart';

import '../meu_info_widget.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Widget Externo Flutter")),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          MeuInfoWidget(
            informacao:
                'Esta é a informação exibida no meu widget personalizado!',
          ),
          Center(child: Text("Hello World!")),
        ],
      ),
    );
  }
}

```
- Ou através de um botão que ao ser clicado exibe o widget na tela:
```dart
import 'package:flutter/material.dart';

import '../meu_info_widget.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  bool _widgetCriado = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Widget Externo Flutter")),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          ElevatedButton(
            onPressed: () {
              setState(() {
                _widgetCriado = true;
              });
            },
            child: const Text('Criar widget'),
          ),
          if (_widgetCriado)
            const MeuInfoWidget(
              informacao:
                  'Esta é a informação exibida no meu widget personalizado!',
            ),
        ],
      ),
    );
  }
}
```

### Resultado final
|Tela do App|Widget Personalizado|
|---|---|
|![Tela do App](./tela_app.png)|![Widget Personalizado](./widget_personalizado.png)|