class Anotacao {
  String data;
  String texto;
  Anotacao({required this.data, required this.texto});
  String toCSV() {
    return '$data;$texto';
  }

  factory Anotacao.fromCSV(String csv) {
    List<String> partes = csv.split(';');
    return Anotacao(data: partes[0], texto: partes[1]);
  }
}
