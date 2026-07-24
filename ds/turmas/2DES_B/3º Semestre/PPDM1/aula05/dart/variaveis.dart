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