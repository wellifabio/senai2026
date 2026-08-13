import 'package:intl/intl.dart';

import '../root/file.dart';
import '../models/anotacao.dart';
import 'package:flutter/material.dart';

List<Anotacao> filtrarAnotacoes(List<Anotacao> lista, String filtro) {
  final valor = filtro.trim().toLowerCase();
  if (valor.isEmpty) {
    return lista;
  }

  return lista.where((anotacao) {
    final texto = anotacao.texto.toLowerCase();
    final data = anotacao.data.toLowerCase();
    return texto.contains(valor) || data.contains(valor);
  }).toList();
}

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List<Anotacao> anotacoes = [];
  String texto = "", data = "", hora = "";
  String filtro = "";

  @override
  void initState() {
    super.initState();
    carregarDados();
  }

  void carregarDados() async {
    List<String> linhas = (await GerenciarArquivo.abrir()).split('\n');
    setState(() {
      anotacoes = linhas.map((linha) => Anotacao.fromCSV(linha)).toList();
    });
  }

  void salvarDados() {
    String conteudo = anotacoes.map((anotacao) => anotacao.toCSV()).join('\n');
    GerenciarArquivo.salvar(conteudo);
  }

  @override
  Widget build(BuildContext context) {
    final anotacoesFiltradas = filtrarAnotacoes(anotacoes, filtro);

    return Scaffold(
      appBar: AppBar(
        title: Text("Anotações"),
        actions: [
          GestureDetector(
            onTap: () {
              cadastrar();
            },
            child: Container(
              margin: EdgeInsets.only(right: 20),
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.black,
              ),
              child: Icon(Icons.add, size: 40, color: Colors.white),
            ),
          ),
        ],
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(12.0),
            child: TextField(
              decoration: InputDecoration(
                hintText: "Buscar anotação ou data",
                prefixIcon: Icon(Icons.search),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
              onChanged: (value) => setState(() {
                filtro = value;
              }),
            ),
          ),
          Expanded(
            child: ListView.separated(
              itemBuilder: (context, i) {
                final anotacao = anotacoesFiltradas[i];
                final indice = anotacoes.indexOf(anotacao);

                return ListTile(
                  title: Text(anotacao.data),
                  subtitle: Text(anotacao.texto),
                  trailing: GestureDetector(
                    onTap: () => excluir(indice),
                    child: Icon(Icons.delete),
                  ),
                  onTap: () => alterar(indice),
                );
              },
              separatorBuilder: (_, _) => Divider(),
              itemCount: anotacoesFiltradas.length,
            ),
          ),
        ],
      ),
    );
  }

  void cadastrar() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Nova anotação'),
        content: TextField(
          decoration: InputDecoration(hintText: "Digite sua anotação"),
          onChanged: (value) => setState(() {
            texto = value;
          }),
        ),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.of(context).pop();
              String agora = DateTime.now().toString().substring(0, 16);
              setState(() {
                anotacoes.add(Anotacao(data: agora, texto: texto));
              });
              salvarDados();
            },
            child: Text("Cadastrar"),
          ),
        ],
      ),
    );
  }

  void alterar(int indice) {
    setState(() {
      data = anotacoes[indice].data.substring(0, 10);
      hora = anotacoes[indice].data.substring(11, 16);
      texto = anotacoes[indice].texto;
    });
    showDialog(
      context: context,
      builder: (context) {
        return StatefulBuilder(
          builder: (context, setDialogState) {
            return AlertDialog(
              title: Text('Alterar anotação'),
              content: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        DateFormat(
                          'dd/MM/yyyy',
                          'pt_BR',
                        ).format(DateTime.parse(data)),
                        style: TextStyle(fontSize: 16),
                      ),
                      IconButton(
                        icon: Icon(Icons.calendar_today),
                        onPressed: () async {
                          final novaData = await selecionarData(context);
                          setDialogState(() {
                            data = novaData;
                          });
                        },
                      ),
                      Text(
                        DateFormat(
                          'HH:mm',
                          'pt_BR',
                        ).format(DateTime.parse('$data $hora')),
                        style: TextStyle(fontSize: 16),
                      ),
                      IconButton(
                        icon: Icon(Icons.access_time),
                        onPressed: () async {
                          final novaHora = await selecionarHora(context);
                          setDialogState(() {
                            hora = novaHora;
                          });
                        },
                      ),
                    ],
                  ),
                  TextField(
                    maxLines: null,
                    controller: TextEditingController(text: texto),
                    decoration: InputDecoration(
                      hintText: "Digite sua anotação",
                    ),
                    onChanged: (value) {
                      setDialogState(() {
                        texto = value;
                      });
                    },
                  ),
                ],
              ),
              actions: [
                TextButton(
                  onPressed: () {
                    Navigator.of(context).pop();
                    String agora = "$data $hora";
                    setState(() {
                      anotacoes[indice] = Anotacao(data: agora, texto: texto);
                    });
                    salvarDados();
                  },
                  child: Text("Salvar alterações"),
                ),
              ],
            );
          },
        );
      },
    );
  }

  void excluir(int indice) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text('Excluir anotação'),
        content: Text('Confirma a exclusão desta anotação'),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.of(context).pop();
              setState(() {
                anotacoes.removeAt(indice);
              });
              salvarDados();
            },
            child: Text("Ok"),
          ),
        ],
      ),
    );
  }

  Future<String> selecionarData(BuildContext context) async {
    // ignore: use_build_context_synchronously
    final DateTime? picked = await showDatePicker(
      context: context,
      initialDate: data.isNotEmpty ? DateTime.parse(data) : DateTime.now(),
      firstDate: DateTime.now(),
      lastDate: DateTime(2030),
    );

    if (picked != null && picked.toString().substring(0, 10) != data) {
      return picked.toString().substring(0, 10);
    }
    return data;
  }

  Future<String> selecionarHora(BuildContext context) async {
    // ignore: use_build_context_synchronously
    final TimeOfDay? picked = await showTimePicker(
      context: context,
      initialTime: hora.isNotEmpty
          ? TimeOfDay(
              hour: int.parse(hora.split(':')[0]),
              minute: int.parse(hora.split(':')[1]),
            )
          : TimeOfDay.now(),
    );

    if (picked != null && picked.format(context) != hora) {
      return picked.format(context);
    }
    return hora;
  }
}
