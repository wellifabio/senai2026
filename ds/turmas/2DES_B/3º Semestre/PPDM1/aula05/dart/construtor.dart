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