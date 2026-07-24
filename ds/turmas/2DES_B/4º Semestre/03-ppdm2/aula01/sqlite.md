# SQLite
Armazenar dados estruturados como datas e anotações no Flutter é idealmente feito com SQLite utilizando o pacote sqflite, que fornece uma API para gerenciar bancos de dados relacionais locais. Aqui estão os passos para usar SQLite em um aplicativo Flutter:

## 1. Configuração do Projeto
- Adicione a dependência no pubspec.yaml:
```yaml
dependencies:
  flutter:
    sdk: flutter
  sqflite: ^2.3.0
  path: ^1.9.0
```

## 2. Criar a Classe Modelo e Helper do Banco

- Crie uma classe modelo para representar os dados, por exemplo, uma anotação:
```dart
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

class Annotacao {
  int? id;
  String data;
  String conteudo;

  Annotacao({this.id, required this.data, required this.conteudo});

  // Converter de Map para Objeto (para ler do banco)
  factory Annotacao.fromMap(Map<String, dynamic> json) => Annotacao(
        id: json['id'],
        data: json['data'],
        conteudo: json['conteudo'],
      );

  // Converter de Objeto para Map (para salvar no banco)
  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'data': data,
      'conteudo': conteudo,
    };
  }
}

class DatabaseHelper {
  static final DatabaseHelper instance = DatabaseHelper._init();
  static Database annotacaoDB;

  DatabaseHelper._init();

  Future<Database> get database async {
    if (annotacaoDB != null) return annotacaoDB;
    annotacaoDB = await _initDB('anotacoes.db');
    return annotacaoDB;
  }

  Future<Database> _initDB(String filePath) async {
    final dbPath = await getDatabasesPath();
    final path = join(dbPath, filePath);
    return await openDatabase(path, version: 1, onCreate: _createDB);
  }

  Future _createDB(Database db, int version) async {
    await db.execute('''
      CREATE TABLE anotacoes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        data TEXT NOT NULL,
        conteudo TEXT NOT NULL
      )
    ''');
  }

  // Inserir Anotação
  Future<int> addAnnotacao(Annotacao annotacao) async {
    final db = await instance.database;
    return await db.insert('anotacoes', annotacao.toMap());
  }

  // Ler todas as anotações
  Future<List<Annotacao>> getAllAnnotacoes() async {
    final db = await instance.database;
    final result = await db.query('anotacoes', orderBy: 'data DESC');
    return result.map((json) => Annotacao.fromMap(json)).toList();
  }
}
```

## 3. Usar os dados no aplicativo
- No seu código Flutter, você pode salvar os dados assim:
```dart
void salvarAnotacao() async {
  Annotacao novaAnotacao = Annotacao(
    data: DateTime.now().toString(), // Salva a data atual
    conteudo: "Minha anotação importante",
  );
  
  await DatabaseHelper.instance.addAnnotacao(novaAnotacao);
  print("Anotação salva!");
}
```

## Principais Dicas:
- Data no SQLite: O SQLite não tem um tipo de data nativo. A melhor prática é salvar a data como TEXT (no formato ISO8601: YYYY-MM-DD HH:MM:SS) ou INTEGER (timestamp).
- Boas Práticas: Use o path_provider para encontrar o caminho correto de documentos do dispositivo.
- Onde usar: O SQLite é indicado para dados estruturados, com muitas operações de escrita e leitura.

#### Nota:
Este documento baseia-se em práticas de 2026 e na biblioteca sqflite. 