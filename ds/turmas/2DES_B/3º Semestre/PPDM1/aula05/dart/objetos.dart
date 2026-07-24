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