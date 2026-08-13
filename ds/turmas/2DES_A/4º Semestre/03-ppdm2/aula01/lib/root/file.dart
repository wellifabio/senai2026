import 'dart:io';
import 'package:path_provider/path_provider.dart';

abstract class GerenciarArquivo {
  static Future<String> get _caminhoLocal async {
    final diretorio = await getApplicationDocumentsDirectory();
    return diretorio.path;
  }

  static Future<File> get _arquivoLocal async {
    final caminho = await _caminhoLocal;
    return File('$caminho/anotacoes.csv');
  }

  static Future<File> salvar(String texto) {
    return _arquivoLocal.then((arquivo) => arquivo.writeAsString(texto));
  }

  static Future<String> abrir() async {
    try {
      final arquivo = await _arquivoLocal;
      return await arquivo.readAsString();
    } catch (e) {
      return '';
    }
  }
}
