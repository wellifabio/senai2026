# Aula05 - Dart
## Configurar a variável de ambiente
- 1 Extrair o arquivo .zip da instalação do flutter em **c:\users\seu nome**
- 2 Vai ficar em **c:\users\seu nome\flutter**
- 3 Abrir as variáveis de ambiente do windows e procurar a variável de sistema **path**
    - 3.1 Criar uma nova linha com:
    ```
    c:\users\seu nome\flutter\bin
    ```
## Dart
- Estudo de váriávies
- Template String
- If Ternário
### P.O.O (Programação Orientada a Objetos)
- Classe
- Instância
- Objeto
#### Princípios
- Abstração
- Encapsulamento
- Polimorfismo

### Práticas
Alo mundo
- Abra uma pasta com o vscode e crie um arquivo chamado **main.dart**
```dart
void main(){
    print("Alô mundo!");
}
```
- Vamos estudar os tipos de variáveis em Dart, para saber mais sobre novas linguagens pesquise no youtube por "Akita alo mundo", altere seu programa:
```dart
void main(){
    int num = 10;
    double real = 5.22;
    print("Variável inteira num = $num");
    print("Variável ponto flutuante ou real = $real");
}
```
- Vamos criar outro arquivo chamado **variaveis.dart**
```dart
void main(){
    //Variáveis
    int numero = 2;
    String texto = "2";
    bool ativo = true;
    var naoTipada = 50.5;
    dynamic dinamica = 50;
   
    //Processamento
    numero  = numero + numero;
    naoTipada = 50;
    dinamica = 50.5;
    
    //Saídas
    print("Concatenar 2"+texto+", Soma = "+numero.toString());
    print("Usando template string a soma de 2 + 2 é $numero");
    print("Abaixo temos o resultado de um if ternário:");
    print(ativo?"Oi":"Tchau");
    print("Não tipada = $naoTipada");
    print("Dinâmica = $dinamica");
}
```
#### P.O.O
- Crie um arquivo chamado **objetos.dart**
```dart
class Animal {
    //Atributos
    int id=0;
    String nome='';
    String especie='';
    String raca='';
    double peso=0.0;
    //Métodos
    String tudoJunto(){
        return "$id, $nome, $especie, $raca, $peso";
    }
}

void main(){
    //Instância
    Animal boi;

    //Objeto
    boi = new Animal();

    //Configurando os atributos
    boi.id = 1;
    boi.nome = "Bandido";
    boi.especie = "Bovino";
    boi.raca = "Nelori";
    boi.peso = 500;

    //Exibe o método do objeto boi
    print(boi.tudoJunto());
}
```
- Vamos utilizar o construtor para melhorar a abstração e posteriormente encapsular os dados, para issom crie outro arquivo chamado **construtor.dart**
```dart
class Animal {
    //Atributos
    int id=0;
    String nome='';
    String especie='';
    String raca='';
    double peso=0.0;
    //Métodos
    Animal(this.id, this.nome, this.especie, this.raca, this.peso);
    String tudoJunto(){
        return "$id, $nome, $especie, $raca, $peso";
    }
}

void main(){
    //Instância e Objeto
    Animal boi = new Animal(1,"Bandido","Bovino","Nelori",500);
    Animal vaca = new Animal(1,"Mimosa","Bovino","Ângus",350);
    Animal gato = new Animal(1,"Tico","Felino","Angorá",1.5);
    Animal gata = new Animal(1,"Mimi","Felino","Vira latas",1.2);
    Animal cachorro = new Animal(1,"Totó","Canino","Caramelo",7.5);
    Animal cachorra = new Animal(1,"Layca","Canino","Golden",15.3);

    //Exibe o método do objeto boi
    print(boi.tudoJunto());
    print(vaca.tudoJunto());
    print(gato.tudoJunto());
    print(gata.tudoJunto());
    print(cachorro.tudoJunto());
    print(cachorra.tudoJunto());
}
```
-Agora vamos utilizar listas e encapsulamento com getters and setters, para isso crie um arquivo chamado **encapsulamento.dart**
```dart
class Animal {
  //Atributos
  int _id = 0;
  String _nome = '';
  String _especie = '';
  String _raca = '';
  double _peso = 0.0;

  //Método construtor
  Animal(this._id, this._nome, this._especie, this._raca, this._peso);

  //Métodos getters
  int get id => _id;
  String get nome => _nome;
  String get especie => _especie;
  String get raca => _raca;
  double get peso => _peso;

  //Método setter peso
  set peso(double peso) {
    _peso = peso;
  }

  //Mpetodo de saída
  String tudoJunto() {
    return "$_id, $_nome, $_especie, $_raca, $_peso";
  }
}

void main() {
  List<Animal> animais = [];
  animais.add(new Animal(1, "Totó", "Canino", "Caramelo", 2.5));
  animais.add(new Animal(2, "Pipoca", "Canino", "Caramelo", 1.5));
  animais.add(new Animal(3, "Sultão", "Canino", "Pit Bull", 25.8));
  animais.add(new Animal(4, "Mini", "Felino", "Vira latas", 1.7));
  animais.add(new Animal(5, "Tico", "Felino", "Angorá", 1.5));

  print("O primeiro animal da lista chama-se ${animais[0].nome}");
  print(
    "O peso do ${animais[0].nome} é ${animais[0].peso.toStringAsFixed(3)} kgs",
  );

  animais[0].peso = 2.8;

  print(
    "O novo peso do ${animais[0].nome} é ${animais[0].peso.toStringAsFixed(3)} kgs\n",
  );

  print("Lista de aminais");
  animais.forEach((a) {
    print(a.tudoJunto());
  });
}
```
O encapsulamento é fundamental para restringir o acesso a dados sensíveis, garantindo que regras de negócio sejam respeitadas.
