# Aula07 - Widget personalizado
Para criar um widget personalizado que exibe uma informação na tela do seu aplicativo Flutter, você deve definir uma classe que estende StatelessWidget (se o conteúdo for estático) ou StatefulWidget (se a informação mudar ao longo do tempo)

## [Documentação oficial](https://docs.flutter.dev/learn/pathway/tutorial/widget-fundamentals)
## [Exemplo de App de Receitas com um Widget que mostra uma receita aleatoria](https://github.com/wellifabio/sesi_ppdm2_receitas_flutter_api_2026.git

### Passo 1: Criar a classe do Widget
Crie um arquivo Dart separado ou use o mesmo arquivo da sua tela para definir o componente visual. Utilize widgets nativos como Container, Padding, Card e Text para estruturar a informação.
```dart
import 'package:flutter/material.dart';

// 1. Definição de um StatelessWidget customizado
onst MeuInfoWidget({super.key, required this.informacao});

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
class MinhaTela extends StatelessWidget {
  const MinhaTela({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Exemplo de Widget'),
      ),
      body: const Column(
        children: [
          // 2. Chamando o widget personalizado na tela
          MeuInfoWidget(
            informacao: 'Esta é a informação exibida no meu widget personalizado!',
          ),
        ],
      ),
    );
  }
}
```