# Aula07 - Navegação e imagens

Para navegar entre as telas podemos utilizar duas formas, push(), pop() ou pushReplacment(), o primeiro mantem a tela anterior na memória e o segundo a destroi.
![Pilha](./pilha.png)

## Passo a passo de como iniciar um novo projeto com navegação de telas
- 1 CTRL + Shift + P -> Flutter: new Project,
- 2 Escolha: Empty ..., Escolha a pasta, de um nome ao seu projeto
- 3 Crie a seguinte estura de arquivos denro da pasta **lib**
```
lib
    main.dart
    screens
        home.dart
        produtos.dart
```
- Para que possamos utilizar **imagens internas** no App, precisamos criar a pasta **assets** na raiz do projeto e apontar para ela no arquivo *pubspec.yaml*, acrescente o código a seguir no final do arquivo.

```yaml
  assets:
    - assets/
```
O aruivo **pubspec.yaml** ficará com o código semelhante ao a seguir.
```yaml
name: navegacao
description: "A new Flutter project."
publish_to: 'none'
version: 0.1.0+1

environment:
  sdk: ^3.11.0

dependencies:
  flutter:
    sdk: flutter

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^6.0.0

flutter:
  uses-material-design: true
  assets:
    - assets/
```
Agora dentro da pasta assets salve duas imagens uma para o fundo da tela e outra como logo.
#### Programando
Edite os arquivos a seguir na pasta **lib** conforme os códigos respectivos:
- main.dart
```dart
import 'package:flutter/material.dart';

import 'screens/home.dart';

void main(){
  runApp(MaterialApp(title:'Estudo de navegacao', home: Home()));
}
```
- screens/home.dart
```dart
import 'package:flutter/material.dart';

import 'produtos.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.amber[100],
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/fundo.webp"),
            fit: BoxFit.cover,
            colorFilter: ColorFilter.mode(
              Color.fromRGBO(0, 0, 0, 0.3),
              BlendMode.dstATop,
            ),
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          spacing: 40.0,
          children: [
            Center(child: Image.asset("assets/logo.png", width: 200)),
            Center(
              child: ElevatedButton(
                onPressed: () => Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => Produtos()),
                ),
                child: Text("Entrar"),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

```
- screens/produtos.dart
```dart
import 'package:flutter/material.dart';

class Produtos extends StatefulWidget {
  const Produtos({super.key});

  @override
  State<Produtos> createState() => _ProdutosState();
}

class _ProdutosState extends State<Produtos> {
  String nome = '';
  double preco = 0.0;
  int quantidade = 0;

  double subTotal() {
    return preco * quantidade;
  }

  void resultado() {
    if (mounted) {
      showDialog(
        context: context,
        builder: (BuildContext context) => AlertDialog(
          title: Text(nome),
          content: Text("O subtotal é ${subTotal().toStringAsFixed(2)}"),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/fundo.webp"),
            fit: BoxFit.cover,
            colorFilter: ColorFilter.mode(
              Color.fromRGBO(0, 0, 0, 0.3),
              BlendMode.dstATop,
            ),
          ),
        ),
        child: Padding(
          padding: const EdgeInsets.all(18.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            spacing: 40.0,
            children: [
              Center(
                child: Text(
                  "Produtos",
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18),
                ),
              ),
              TextField(
                decoration: InputDecoration(labelText: "Nome"),
                onChanged: (value) {
                  nome = value;
                },
              ),
              TextField(
                decoration: InputDecoration(labelText: "Preço"),
                onChanged: (value) {
                  preco = double.parse(value);
                },
              ),
              TextField(
                decoration: InputDecoration(labelText: "Quantidade"),
                onChanged: (value) {
                  quantidade = int.parse(value);
                },
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  ElevatedButton(
                    onPressed: () => resultado(),
                    child: Text("Calcular"),
                  ),
                  ElevatedButton(
                    onPressed: () => Navigator.pop(context),
                    child: Text("Sair"),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```
## Exeutano
Para exutar o projeto, scolha o navegador **Chrome**, navegue até o **main.dart** e clique em play.
<br>![Play](./play.png)

## Resultado
![Play](./screenshot.png)

## Flutter comandos

|Ação|Comando|
|-|-|
|Executar um projeto flutter|flutter run|
|Verificar se está tudo OK|flutter doctor|
|Verificar se está tudo OK com mais detalhes|flutter doctor -v|
|Atualizar as dependencias do projeto|flutter pub get|
|Iniciar um novo projeto| flutter create nome_do_seu_app|
|Iniciar um novo projeto vazio|flutter create --empty nome_do_seu_app|
|Iniciar um novo projeto com o template de aplicativo|flutter create --template=app nome_do_seu_app|
|Atualizar o Flutter|flutter upgrade|

### Desafios:
- A Utilizando o Figma crie protótipos funcionais para cada um dos três desafios.
- B Utilizando o framework flutter desenvolva as três UIs em projetos separados, cada projeto deve conter uma pasta assets com as imagens utilizadas e um arquivo README.md com a descrição do projeto, print das telas, tecnologias e passo a passo de como executar.

#### Exemplo [Calculadora de IMC](https://github.com/wellifabio/flutter-imc-2026.git)


|Wireframes01|Wireframes02|Wireframes03|Desafios|
|-|-|-|-|
|![Financ 0](./prints/financ0.png)|![Financ 1](./prints/financ1.png)|![Financ 2](./prints/financ2.png)|**Contextualização:** As taxas de juros continuam autíssimas dificultando a aquisição de bens e serviços. Antes de comprar um bem financiado como um carro, uma moto, um imóvel ou até mesmo um eletrodoméstico, é importante simular o valor das parcelas e o custo total do financiamento.<br>**Objetivo:** Desenvolver um aplicativo semelhante ao da imagem ao lado que recebe como entrada o valor do bem, o número de parcelas, a taxa de juros mensal e as taxas adicionais e exibe o valor da parcela e o Montante total do financiamento.|
|![Invest 0](./prints/invest0.png)|![invest 1](./prints/invest1.png)|![Invest 2](./prints/invest2.png)|**Contextualização:** Uma alternativa ao financiamento é a paciência, quando a aquisição de um bem não é de necessidade básica ou essencial. Neste caso, é possível investir o dinheiro e esperar o tempo necessário para adquirir o bem à vista.<br>**Objetivo:** Desenvolver um aplicativo semelhante ao da imagem ao lado que recebe como entrada o valor mensal que podemos investir o número de meses e a taxa de juros mensal e exibe o montante acumulado sem juros e com juros compostos.|
|![Bitola](./prints/bitola0.png)|![Bitola](./prints/bitola1.png)|![Bitola](./prints/bitola2.png)|**Contextualização:** O professor de instalações elétricas ensina seus alunos como calcular a bitola adequada para cada uso de uma instalação. Solicitou que os alunos de Desenvolvimento de sistemas criem um aplicativo que faça este cálculo.<br>**Objetivo:** Desenvolver um aplicativo semelhante ao da imagem ao lado que recebe como entrada a corrente elétrica em ampères e a distância em metros e exibe a bitola do fio em milímetros quadrados, tanto para tensão de 110V quanto para 220V.<br>**Fórmula:**<br>bitola110 = (2 * corrente * distância) / 294.64<br>bitola220 = (2 * corrente * distância) / 510.4|

Faça os exercícios utilizando a IDE **VsCode**, testando no Navegador ou no Emulador do Android Studio, se preferir pode utilizar a IDE do Android Studio ou **IDX (Firebase Studio)**

## Entregas
- Cada projeto deve estar em um **repositório público separado no GitHub**.
- Nomes sugeridos para os repositórios:
  - financiamento2026
  - investimento2026
  - bitola2026
- Os links dos repositórios devem ser enviados para o professor neste **[Form](https://forms.gle/22yAfByNi16LATq3A)**.
- Todos os repositórios devem ter no arquivo **README.md**
  - Descrição do projeto
  - Print das telas (salvos em uma pasta assets no projeto)
  - Tecnologias
  - Passo a passo de como executar

## Critérios de avaliação
|Criticidade|Capacidades Básicas e Socioemocionais|Critérios|
|-|:-:|-|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|1 Identificar as características de programação de dispositivos móveis|Design: Criou o prototipo configurando um **dispositivo** mobile especificado|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|2 Preparar o ambiente necessário ao desenvolvimento do sistema para a plataforma mobile|Configurou o abiente flutter, Android Studio no computador Local e/ou criou projeto remoto|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|3 Interpretar os requisitos do sistema, tendo em vista a elaboração dos componentes em ambiente mobile|Implementou os componentes visuais conforme especificado|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|4 Definir os elementos de entrada, processamento e saída para a codificação das funcionalidades mobile|Implementou os requisitos de design ou funcionais conforme descrito|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|5 Projetar interfaces para dispositivos móveis|Criou o protótipo funcional, Implementou as funcionalidades conforme wireframes|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|6. Implementar o código respeitando as características da linguagem na plataforma mobile|Implementou na linguagem **Dart** em ambiente local ou remoto|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|1 Demonstrar autogestão|Utilizou IA apenas como apoio tentando entender a solução, contou com ajuda de colegas ou ajudou com objetivo de melhorar o aprendizado|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|2 Demonstrar pensamento analítico|Compreende como o Wireframes, Protótipos e Ambientes de desenvolvimento Mobile se relacionam, Compreende o fluxo de dados entre API, App e Locais|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|3 Demonstrar inteligência emocional|Se dedicou ao aprendizado para compreender o mínimo do componente|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|4 Demonstrar autonomia|Questionou os intrutores ou colegas sobre dúvidas ou problemas ocorridos durante o desenvolvimento. Se propôs a resolver os problemas|