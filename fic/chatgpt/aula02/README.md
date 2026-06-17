# Aula08 - Github
- Após criar uma conta no Github, utilizando um e-mail pessoal, pois após o término do curso a conta será sua e o histórico pode ser importante para futuros processos seletivos.

- Enquanto aguarda seus colegas criar suas contas no github, treine seu raciocínio lógico resolvendo o problema a seguir:

## Conjectura de Collatz
Recebeu este nome em referência ao matemático alemão Lothar Collatz.
A Conjectura de Collatz, ou problema, é um enigma matemático simples: para qualquer inteiro positivo, se par, divida por 2; se ímpar, multiplique por 3 e some 1. A conjectura afirma que, repetindo o processo, todos os números chegam ao ciclo que é 1.
- Apesar de testada até números altíssimos, nunca foi provada.

### Desafio:
- Crie um programa que teste esta conjectura e informe quantos passos são necessários para chegar a 1, a partir de um número inteiro positivo informado pelo usuário.
- O programa deve retornar o número de passos e a sequência de números gerada.
- Pode escoher a linguagem de programação que desejar, não se preocupe com a beleza da UI (User Interface) neste momento.
- Salve o programa em uma pasta em sua áre det trabalho, pois ele será versionado no git e enviado para o github.
- Claro que pode contar com a ajuda de uma IA, como o ChatGPT, para ajudá-lo a desenvolver o programa.

## Baixe o git bash (Git for Windows) em seu computador
![Git](./git.png)
- Este é o shell do git, que permite executar os comandos do git em seu computador.

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

## [Exemplo prático de versionamento de um programa no git](./versionamento.md)
## Passos para enviar um projeto para o github
- Para enviar os arquivos para o repositório remoto, após iniciar um repositório local `git init`, execute os comandos abaixo para adicionar o repositório remoto e enviar os arquivos para o github:
```bash
git remote add origin <url do repositório remoto>
git push -u origin master
```
- Porém antes de enviar, é necessário criar um repositório no **Github**, para isso, acesse o Github e clique em "New repository", informe o nome do repositório e clique em "Create repository".
- Após criar o repositório, copie a url do repositório e execute os comandos acima para enviar os arquivos para o repositório remoto.
- Pronto, agora os arquivos estão no github e você pode acessar o repositório para visualizar os arquivos e o histórico de commits.