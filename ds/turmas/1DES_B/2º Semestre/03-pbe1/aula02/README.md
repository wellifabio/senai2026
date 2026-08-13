# Manipulação de Strings e Arrays no JavaScript

Este documento explica algumas funções nativas do JavaScript usadas para
manipular **strings** e **arrays**.

------------------------------------------------------------------------

# Strings

Strings representam textos.

``` js
let nome = "João Silva";
```

## .length

Retorna o tamanho da string.

``` js
let nome = "Ana";
console.log(nome.length); // 3
```

Também funciona para arrays.

------------------------------------------------------------------------

## .trim()

Remove espaços no início e no final da string.

``` js
let texto = "   Olá mundo   ";
console.log(texto.trim()); 
// "Olá mundo"
```

Não altera a string original, retorna uma nova.

------------------------------------------------------------------------

## .toLowerCase()

Converte todos os caracteres para minúsculo.

``` js
let email = "TESTE@EMAIL.COM";
console.log(email.toLowerCase());
// "teste@email.com"
```

------------------------------------------------------------------------

## .toUpperCase()

Converte todos os caracteres para maiúsculo.

``` js
let nome = "joão";
console.log(nome.toUpperCase());
// "JOÃO"
```

------------------------------------------------------------------------

## .includes()

Verifica se a string contém determinado valor.

Retorna `true` ou `false`.

``` js
let email = "teste@email.com";

console.log(email.includes("@"));
// true
```

------------------------------------------------------------------------

## .split()

Divide uma string em partes e retorna um array.

``` js
let nomeCompleto = "João Silva";
let partes = nomeCompleto.split(" ");

console.log(partes);
// ["João", "Silva"]
```

O parâmetro define onde a divisão será feita.

------------------------------------------------------------------------

## .endsWith()

Verifica se a string termina com determinado valor.

``` js
let arquivo = "documento.pdf";

console.log(arquivo.endsWith(".pdf"));
// true
```

------------------------------------------------------------------------

## .replace(" ", "")

Substitui a primeira ocorrencia em uma string.

``` js
let frase = "olá mundo, olá novamente";
frase.replace("olá", "oi");
//oi mundo, olá novamente
```

------------------------------------------------------------------------

## .replaceAll(" ", "")

Substitui todas as ocorrencias em uma string.

``` js
let frase = "olá mundo, olá novamente";
frase.replaceAll("olá", "oi");
//oi mundo, oi novamente
```

------------------------------------------------------------------------

## .typeof(variavel)

Retorna o tipo da variável informada.

``` js
let numero = 1234;
typeof(numero);
//number

let texto = "1234";
typeof(texto);
//string
```

------------------------------------------------------------------------

# Arrays

Arrays armazenam listas de valores.

``` js
let numeros = [1, 2, 3, 4];
```

------------------------------------------------------------------------

## .push()

Adiciona um elemento ao final do array.

``` js
let lista = [1, 2];
lista.push(3);

console.log(lista);
// [1, 2, 3]
```

------------------------------------------------------------------------

## .splice()

Remove ou adiciona elementos em posições específicas.

Removendo:

``` js
let lista = [1, 2, 3];
lista.splice(1, 1);

console.log(lista);
// [1, 3]
```

------------------------------------------------------------------------

## .forEach()

Percorre todos os elementos do array.

``` js
let numeros = [1, 2, 3];

numeros.forEach(n => {
  console.log(n);
});
```

Não retorna novo array.

------------------------------------------------------------------------

## .map()

Percorre o array e retorna um novo array transformado.

``` js
let numeros = [1, 2, 3];

let dobrado = numeros.map(n => n * 2);

console.log(dobrado);
// [2, 4, 6]
```

------------------------------------------------------------------------

## .filter()

Retorna um novo array com elementos que atendem a uma condição.

``` js
let numeros = [1, 2, 3, 4];

let pares = numeros.filter(n => n % 2 === 0);

console.log(pares);
// [2, 4]
```

------------------------------------------------------------------------

## .find()

Retorna o primeiro elemento que atende à condição.

``` js
let numeros = [1, 2, 3, 4];

let resultado = numeros.find(n => n > 2);

console.log(resultado);
// 3
```

------------------------------------------------------------------------

## .some()

Verifica se pelo menos um elemento atende à condição.

Retorna `true` ou `false`.

``` js
let numeros = [1, 2, 3];

let existeMaiorQue2 = numeros.some(n => n > 2);

console.log(existeMaiorQue2);
// true
```

------------------------------------------------------------------------

## .every()

Verifica se todos os elementos atendem à condição.

``` js
let numeros = [2, 4, 6];

let todosPares = numeros.every(n => n % 2 === 0);

console.log(todosPares);
// true
```

------------------------------------------------------------------------

# Observação

-   Strings são imutáveis (não mudam o valor original).
-   Muitos métodos retornam um novo valor.
-   Métodos como `map`, `filter` e `find` usam funções como parâmetro.
