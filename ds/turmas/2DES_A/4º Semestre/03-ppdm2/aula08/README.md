# Aula08 - Testes Automatizados
Um dos testes de **integração** ou **ponto a ponto** mais comuns consiste em preencher automaticamente **formulários**, enviar os dados e verificar os resultados (sucesso ou analizar os erros retornados no processo).

## Preencher Formulário
Preencher formulários automaticamente é uma parte fundamental dos testes de **widget** e **testes de integração** no Flutter. Podemos simular interações reais de usuário, como digitação e cliques em botões, para garantir que o formulário funcione conforme o esperado.

## passo a passo:
Criando um novo aplicativo que calcula financiamentos e testando o aplicativo.

### 1 Criar e configurar um novo aplicativo
Crie um novo App vazio chamado `flutter_financiamentos_testes`
- Abra o terminal `CTRL + '` e instale as dependências:
    - `path_provider`que vamos utilizar para o App salvar dados localmente no celular,
    - `intl` para conversões de data e hora,
    - `flutter_test` como dependência **dev** (em desenvolvimento).
```bash
flutter pub add path_provider
flutter pub add intl
flutter pub add flutter_test --dev
```
Confira a estrutura do arquivo de configurações `pubspeck.yaml`
```yaml
name: flutter_financiamentos_testes
description: "A new Flutter project."
publish_to: 'none'
version: 0.1.0+1

environment:
  sdk: ^3.13.5

dependencies:
  flutter:
    sdk: flutter
  intl: ^0.20.2
  path_provider: ^2.1.6

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^6.0.0

flutter:
  uses-material-design: true
```
```bash
flutter pub get
```
- Crie a seguinte extrutura de arquivos em seu **App**.
```txt
flutter_financiamentos_testes/
    integration_test/
        preencher_form.dart
    ...
    ...
    ...
    lib/
        root/
            models.dart
            file.dart
        ui/
            home.dart
            lista.dart
        main.dart
```
### 2 Códigos dos arquivos do App
- **main.dart** (Apenas cria o MaterialApp e chama a **Home()**)
```dart
import 'package:flutter/material.dart';

import './ui/home.dart';

void main() {
  runApp(MaterialApp(title: "Financiamentos", home: Home()));
}
```
- **ui/home.dart** (Formulário para simular financiamentos, botão para calcular e em seguida para salvar localmente e direcionar para lista de simulações)
```dart
import 'package:flutter/material.dart';

import '../root/file.dart';
import 'lista.dart';
import '../root/models.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List<Financiamento> dados = [];
  final _f = Financiamento();

  double _parseDouble(String value) {
    final text = value.trim();
    if (text.isEmpty) return 0;

    var normalized = text.replaceAll(' ', '');
    if (normalized.contains(',') && normalized.contains('.')) {
      normalized = normalized.replaceAll('.', '').replaceAll(',', '.');
    } else if (normalized.contains(',')) {
      normalized = normalized.replaceAll(',', '.');
    }

    return double.tryParse(normalized) ?? 0;
  }

  int _parseInt(String value) {
    final text = value.trim();
    if (text.isEmpty) return 0;
    return int.tryParse(text) ?? 0;
  }

  void _atualizarDados() {
    setState(() {
      _f.calcular();
    });
  }

  @override
  void initState() {
    super.initState();
    _carregarDados();
  }

  void _salvarDados() {
    final novaSimulacao = Financiamento(
      data: DateTime.now().toIso8601String(),
      valor: _f.valor,
      taxa: _f.taxa,
      parcelas: _f.parcelas,
      custos: _f.custos,
    )..calcular();

    final listaAtualizada = [...dados, novaSimulacao];

    setState(() {
      dados = listaAtualizada;
      _f.data = novaSimulacao.data;
      _f.montante = novaSimulacao.montante;
      _f.valorParcela = novaSimulacao.valorParcela;
    });

    GerenciaArquivo.salvarArquivo(
      listaAtualizada.map((a) => a.toCSV()).join('\n'),
    );

    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => const Lista()),
    );
  }

  void _carregarDados() async {
    final conteudo = await GerenciaArquivo.lerArquivo();
    final linhas = conteudo.split('\n');

    setState(() {
      dados = linhas
          .where((linha) => linha.trim().isNotEmpty)
          .map((linha) {
            try {
              return Financiamento.fromCSV(linha);
            } catch (_) {
              return null;
            }
          })
          .whereType<Financiamento>()
          .toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Financiamentos'),
        actions: [
          ElevatedButton(
            onPressed: () => Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => const Lista()),
            ),
            child: const Text(
              'Simulações',
              style: TextStyle(
                color: Colors.black,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ],
      ),
      body: SafeArea(
        child: Center(
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                const Text(
                  'Valor do Financiamento:',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
                ),
                const SizedBox(height: 8),
                TextField(
                  key: const Key('valor'),
                  keyboardType: TextInputType.number,
                  style: const TextStyle(color: Colors.red),
                  decoration: const InputDecoration(
                    labelText: 'Digite o valor',
                    hintText: 'Ex: 10000',
                  ),
                  onChanged: (value) {
                    setState(() {
                      _f.valor = _parseDouble(value);
                    });
                  },
                  textAlign: TextAlign.right,
                ),
                const SizedBox(height: 20),
                const Text(
                  'Taxa de juros ao mês:',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
                ),
                const SizedBox(height: 8),
                TextField(
                  key: const Key('taxa'),
                  keyboardType: TextInputType.number,
                  style: const TextStyle(color: Colors.red),
                  decoration: const InputDecoration(
                    labelText: 'Digite a taxa de juros',
                    hintText: 'Ex: 0.75',
                    suffixText: '%',
                  ),
                  onChanged: (value) {
                    setState(() {
                      _f.taxa = _parseDouble(value);
                    });
                  },
                  textAlign: TextAlign.right,
                ),
                const SizedBox(height: 20),
                const Text(
                  'Número de parcelas:',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
                ),
                const SizedBox(height: 8),
                TextField(
                  key: const Key('parcelas'),
                  keyboardType: TextInputType.number,
                  style: const TextStyle(color: Colors.red),
                  decoration: const InputDecoration(
                    labelText: 'Digite o número de parcelas',
                    hintText: 'Ex: 12',
                  ),
                  onChanged: (value) {
                    setState(() {
                      _f.parcelas = _parseInt(value);
                    });
                  },
                  textAlign: TextAlign.right,
                ),
                const SizedBox(height: 20),
                const Text(
                  'Demais taxas e custos:',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
                ),
                const SizedBox(height: 8),
                TextField(
                  key: const Key('custos'),
                  keyboardType: TextInputType.number,
                  style: const TextStyle(color: Colors.red),
                  decoration: const InputDecoration(
                    labelText: 'Digite o total de taxas e custos adicionais',
                    hintText: 'Ex: 500',
                  ),
                  onChanged: (value) {
                    setState(() {
                      _f.custos = _parseDouble(value);
                    });
                  },
                  textAlign: TextAlign.right,
                ),
                const SizedBox(height: 24),
                ElevatedButton(
                  onPressed: _atualizarDados,
                  key: const Key('calcular'),
                  child: const Text(
                    'Calcular Financiamento',
                    style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                const SizedBox(height: 8),
                ElevatedButton(
                  onPressed: _f.montante != 0 ? _salvarDados : null,
                  key: const Key('salvar'),
                  child: const Text(
                    'Salvar simulação',
                    style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                const SizedBox(height: 24),
                Text(
                  'Valor total a ser pago: R\$ ${_f.montante.toStringAsFixed(2).replaceAll('.', ',')}',
                  style: const TextStyle(fontSize: 18),
                ),
                const SizedBox(height: 12),
                Text(
                  'Valor da parcela: R\$ ${_f.valorParcela.toStringAsFixed(2).replaceAll('.', ',')}',
                  style: const TextStyle(fontSize: 18),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
```
- **ui/lista.dart** (Tela para listar as simulações armazenadas)
```dart
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import '../root/file.dart';
import '../root/models.dart';

class Lista extends StatefulWidget {
  const Lista({super.key});

  @override
  State<Lista> createState() => _ListaState();
}

class _ListaState extends State<Lista> {
  List<Financiamento> dados = [];

  @override
  void initState() {
    super.initState();
    _carregarDados();
  }

  void _carregarDados() async {
    final conteudo = await GerenciaArquivo.lerArquivo();
    final linhas = conteudo.split('\n');

    setState(() {
      dados = linhas
          .where((linha) => linha.trim().isNotEmpty)
          .map((linha) {
            try {
              return Financiamento.fromCSV(linha);
            } catch (_) {
              return null;
            }
          })
          .whereType<Financiamento>()
          .toList();
    });
  }

  void _salvarDados() {
    String conteudo = dados.map((a) => a.toCSV()).join('\n');
    GerenciaArquivo.salvarArquivo(conteudo);
  }

  void _modalDelete(int indice) {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Text('Excluir Simulação'),
          content: Text('Tem certeza que deseja excluir esta simulação?'),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
                setState(() {
                  dados.removeAt(indice);
                });
                _salvarDados();
              },
              child: Text('Sim'),
            ),
            TextButton(
              onPressed: () => Navigator.of(context).pop(),
              child: Text('Não'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Simulações')),
      body: Center(
        child: ListView.separated(
          itemBuilder: (context, i) {
            return ListTile(
              title: Text(
                '${DateFormat('dd/MM/yyyy').format(DateTime.parse(dados[i].data.toString()))} - ${DateFormat('hh:mm').format(DateTime.parse(dados[i].data.toString()))}',
              ),
              subtitle: Text(
                'Valor: R\$ ${dados[i].valor.toStringAsFixed(2).replaceAll('.', ',')},'
                ' Taxa: ${dados[i].taxa.toStringAsFixed(2).replaceAll('.', ',')}%,'
                '\nCustos: R\$ ${dados[i].custos.toStringAsFixed(2).replaceAll('.', ',')},'
                ' Montante: R\$ ${dados[i].montante.toStringAsFixed(2).replaceAll('.', ',')},'
                '\n${dados[i].parcelas} parcelas de: R\$ ${dados[i].valorParcela.toStringAsFixed(2).replaceAll('.', ',')}',
              ),
              trailing: GestureDetector(
                onTap: () {
                  _modalDelete(i);
                },
                child: Container(
                  padding: const EdgeInsets.all(8),
                  decoration: const BoxDecoration(
                    color: Colors.red,
                    shape: BoxShape.circle,
                  ),
                  child: const Icon(Icons.delete, color: Colors.white),
                ),
              ),
            );
          },
          separatorBuilder: (_, _) => Divider(),
          itemCount: dados.length,
        ),
      ),
    );
  }
}

```
- **root/models.dart** (Classe modelo com os atributos e métodos principais da lógica de cálculo e armazenamento de dados)
```dart
import 'dart:math';

class Financiamento {
  String data = '';
  double valor = 0;
  double taxa = 0;
  int parcelas = 0;
  double custos = 0;
  double montante = 0;
  double valorParcela = 0;

  Financiamento({
    this.data = '',
    this.valor = 0,
    this.taxa = 0,
    this.parcelas = 0,
    this.custos = 0,
  });

  void calcular() {
    montante = valor * pow(1 + taxa / 100, parcelas) + custos;
    valorParcela = parcelas == 0 ? 0 : montante / parcelas;
  }

  String toCSV() {
    return '$data,$valor,$taxa,$parcelas,$custos';
  }

  factory Financiamento.fromCSV(String linha) {
    final partes = linha.split(',');
    if (partes.length < 5) {
      throw const FormatException('Linha de CSV inválida');
    }

    final financiamento = Financiamento(
      data: partes[0],
      valor: double.tryParse(partes[1]) ?? 0,
      taxa: double.tryParse(partes[2]) ?? 0,
      parcelas: int.tryParse(partes[3]) ?? 0,
      custos: double.tryParse(partes[4]) ?? 0,
    );

    financiamento.calcular();
    return financiamento;
  }
}

```
- **root/file.dart** (Classe para armazenar e recuperar dados localmente no dispositivo[celular])
```dart
import 'dart:io';

import 'package:path_provider/path_provider.dart';

abstract class GerenciaArquivo {
  static Future<String> get _caminhoLocal async {
    final diretorio = await getApplicationDocumentsDirectory();
    return diretorio.path;
  }

  static Future<File> get _arquivoLocal async {
    final caminho = await _caminhoLocal;
    return File('$caminho/simulacoes.csv');
  }

  static Future<File> salvarArquivo(String texto) {
    return _arquivoLocal.then((arquivo) => arquivo.writeAsString(texto));
  }

  static Future<String> lerArquivo() async {
    try {
      final arquivo = await _arquivoLocal;
      String conteudo = await arquivo.readAsString();
      return conteudo;
    } catch (e) {
      return '';
    }
  }
}
```
### 3 Estrutura básica do arquivo de testes
Utilizando o pacote *flutter_test* e a função **testWidgets** para criar os testes.
- **integration_test/preencher_form.dart** (Preecha o arquivo de testes com os dados a seguir) observando os comentários no arquivo/script.
```dart
import '../lib/ui/home.dart';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('Teste de simulação de financiamento', (
    WidgetTester tester,
  ) async {
    await tester.pumpWidget(MaterialApp(title: 'Financiamentos', home: Home()));
    // Aguarde a renderização do widget Simulacao
    await tester.pumpAndSettle();
    await tester.enterText(find.byKey(Key('valor')), '10000');
    await tester.pump(const Duration(seconds: 1));
    await tester.enterText(find.byKey(Key('taxa')), '0.78');
    await tester.pump(const Duration(seconds: 1));
    await tester.enterText(find.byKey(Key('parcelas')), '24');
    await tester.pump(const Duration(seconds: 1));
    await tester.enterText(find.byKey(Key('custos')), '800');
    await tester.pump(const Duration(seconds: 1));
    await tester.tap(find.byKey(Key('calcular')));
    await tester.pumpAndSettle();
    await tester.pump(const Duration(seconds: 1));
    await tester.tap(find.byKey(Key('salvar')));
    await tester.pumpAndSettle();
    await tester.pump(const Duration(seconds: 1));
    //Aguardar mais 10 na outra tela para garantir que os dados sejam processados e exibidos corretamente
    await tester.pump(const Duration(seconds: 10));
    // Verificar se o widget com o texto "Simulações" está presente na árvore de widgets
    expect(find.text('Simulações'), findsOneWidget);
    // Verificar se os widget com o texto contendo "R$ 12849,93" e "R$ 535,41" estão listados nesta página, confirmando que o resultado do cálculo foi exibido corretamente.
    expect(find.textContaining('R\$ 12849,93'), findsOneWidget);
    expect(find.textContaining('R\$ 535,41'), findsOneWidget);
  });
}

/*
Dados calculados com Excel para validar os resultados do aplicativo:
Valor	Taxa	Parcelas	Custos	Montante	Valor Parcela
50000	0,75	36	1200	 66632,27 	 1850,90 
10000	0,78	24	800	 12849,93 	 535,41 
*/

/*
  1. O teste inicia renderizando o widget Simulacao dentro de um MaterialApp, garantindo que o tema seja aplicado corretamente.
  2. O teste aguarda a renderização completa do widget usando pumpAndSettle().
  3. O teste simula a entrada de dados nos campos de texto para valor, taxa, parcelas e custos, usando enterText() e aguardando um breve período entre cada entrada.
  4. O teste simula o clique no botão "Calcular" e depois no botão "Salvar", aguardando um breve período após cada ação para garantir que as operações sejam processadas.
  5. Finalmente, o teste verifica se o widget Simulacao está presente na árvore de widgets, confirmando que a interface foi renderizada corretamente após as interações.
*/
```
- Acrescente as duas linhas a seguir em `dev_dependencies:` no arquivo **`pubspec.
yaml`**:
```yaml:
dev_dependencies:
  flutter_test:
    sdk: flutter
  integration_test:
    sdk: flutter
```
- Confira se ficou semelhante ao a seguir:
```yaml
name: flutter_financiamentos_testes
description: "A new Flutter project."
publish_to: 'none'
version: 0.1.0+1

environment:
  sdk: ^3.13.5

dependencies:
  flutter:
    sdk: flutter
  intl: ^0.20.2
  path_provider: ^2.1.6

dev_dependencies:
  flutter_test:
    sdk: flutter
  integration_test:
    sdk: flutter
  flutter_lints: ^6.0.0

flutter:
  uses-material-design: true
```

### Dicas Importantes
- findsOneWidget: Valida que o elemento está presente.
- pumpAndSettle(): Essencial para validar formulários que fecham após um clique, pois garante que o Flutter processou todas as mudanças de tela.
- Keys: Utilizar Key (Key('campo_email')) no código de produção facilita muito a localização de widgets específicos nos testes.
- Testes de Integração: Para testes que rodam em simuladores reais ou dispositivos físicos, utilize o pacote *integration_test*.

## Executar no emulador
Com o **emulador** aberto, execute o comando a seguir:
```bash
flutter test integration_test/preencher_formulario.dart
```

