# Aula01
- Manual do aluno
- Preparação do ambiente
    - VsCode
    - XAMPP
    - Node.js
    - Insomnia
- Revisão de JavaScript / HTML
- UI (User Interface) Web / Front-end
    - HTML
    - CSS
    - JavaScript

## Demonstração
- 1 Desenvolva uma UI(interface) Web que leia o preço de um produto e se o preço for maior do que 1000 reais aplique um desconto de 8%. Mostre o preço final.
    - exp1.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desconto</title>
</head>
<style>
    body {
        font-family: Arial, sans-serif;
        text-align: center;
    }
    h1 {
        color: #333;
    }
    input {
        padding: 5px;
        margin: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    button {
        padding: 5px 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #333;
        color: #fff;
        cursor: pointer;
    }
    button:hover {
        background-color: #444;
    }
    p {
        margin: 10px;
        color: #333;
    }
</style>
<body>
    <h1>Cálculo de desconto</h1>
    <input type="number" id="preco" placeholder="Preço">
    <button onclick="reajustar()">Calcular desconto</button>
    <p id="resultado"></p>
</body>
<script>
    function reajustar() {
        let preco = Number(document.getElementById('preco').value);
        let resultado = document.getElementById('resultado');
        let desconto = 0;
        if (preco > 1000)
            desconto = preco * 8 / 100;
        let precoComDesconto = Number(preco - desconto);
        resultado.innerHTML = `Desconto de R$ ${desconto.toFixed(2)} <br>Preço final R$ ${precoComDesconto.toFixed(2)}`;
    }
</script>
</html>
```


# Lista de Exercícios – Estruturas Condicionais (JavaScript)

## Exercício 1 – Bônus Salarial
Crie uma página HTML com JavaScript que:
- Receba o **salário** de um funcionário.
- Se o salário for **maior que R$ 2.000**, aplique **10% de bônus**.
- Mostre:
  - O valor do bônus.
  - O salário final.

---

## Exercício 2 – Frete Grátis
Crie uma página HTML com JavaScript que:
- Receba o **valor da compra**.
- Se o valor for **maior ou igual a R$ 150**, o frete será **gratuito**.
- Caso contrário, o frete custará **R$ 20**.
- Mostre:
  - O valor do frete.
  - O valor total da compra.

---

## Exercício 3 – Desconto em Combustível
Crie uma página HTML com JavaScript que:
- Receba o **valor total abastecido**.
- Se o valor for **maior que R$ 200**, aplique **5% de desconto**.
- Mostre:
  - O valor do desconto.
  - O valor final a pagar.

---

## Exercício 4 – Taxa de Serviço
Crie uma página HTML com JavaScript que:
- Receba o **valor da conta**.
- Se a conta for **maior que R$ 100**, cobre **10% de taxa de serviço**.
- Caso contrário, não cobre taxa.
- Mostre:
  - O valor da taxa.
  - O valor total da conta.

---

## Exercício 5 – Multa por Atraso
Crie uma página HTML com JavaScript que:
- Receba o **valor da mensalidade**.
- Receba a **quantidade de dias de atraso**.
- Se houver atraso (**dias > 0**), aplique **2% de multa**.
- Mostre:
  - O valor da multa.
  - O valor total a pagar.

---

## Exercício 6 – Compra com Cashback
Crie uma página HTML com JavaScript que:
- Receba o **valor da compra**.
- Se o valor for **maior que R$ 300**, gere **5% de cashback**.
- Mostre:
  - O valor do cashback.
  - O valor líquido da compra.
