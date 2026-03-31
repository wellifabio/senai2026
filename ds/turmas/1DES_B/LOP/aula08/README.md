# Aula08 - Introdução ao Github
- Crie uma conta no Github, utilize um e-mail pessoal, pois após o término do curso a conta será sua e o histórico pode ser importante para futuros processos seletivos.

- Enquanto aguarda seus colegas criar suas contas no github, treine seu raciocínio lógico resolvendo o problema a seguir:

## Conjectura de Collatz
Recebeu este nome em referência ao matemático alemão Lothar Collatz.
A Conjectura de Collatz, ou problema, é um enigma matemático simples: para qualquer inteiro positivo, se par, divida por 2; se ímpar, multiplique por 3 e some 1. A conjectura afirma que, repetindo o processo, todos os números chegam ao ciclo que é 1.
- Apesar de testada até números altíssimos, nunca foi provada.
### Desafio:
- Crie um programa em **C** que teste esta conjuctura e informe quantos passos são necessários para chegar a 1, a partir de um número inteiro positivo informado pelo usuário.
- O programa deve retornar o número de passos e a sequência de números gerada.

## Baixe o git bash (Git for Windows) em seu computador
![Git](./git.png)
### Principais comandos git

| Comando | Descrição |
|-|-|
|git init|Inicia um repositório git|
|git add .|Adiciona os arquivos para o stage|
|git commit -m "mensagem"|Realiza o commit dos arquivos|
|git log|Exibe o histórico de commits|
|git checkout <código do commit>|Permite voltar para um commit específico|
|git remote add origin <url>|Adiciona o repositório remoto|
|git push -u origin master|Envia os arquivos para o repositório remoto|

## Atividade prática
- Crie um repositório público no github e envie o programa que você criou para testar a conjectura de Collatz.