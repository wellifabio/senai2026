# Aula01 - Banco de dados

### Capacidades Técnicas
- 1 Identificar as características de banco de dados relacionais e não-relacionais
- 2 Configurar o ambiente para utilização de banco de dados relacional

## Conhecimentos
- 1 Sistema Gerenciador de Banco de Dados (SGBD)
  - 1.1 Definição
  - 1.2 Tipos
    - 1.2.1 Relacional
    - 1.2.2 Não relacional

## Atividade 01 - Coleta de dados
### Contextualização:
O objetivo desta atividade é coletar dados de diferentes fontes e formatos, para que possamos analisar e compreender a importância da estruturação dos dados.
### Desafio A:
Colete dados de três colegas de turma e anote em um bloco de notas, ou word, ou excel, ou qualquer outro formato que desejar, salve e envie para o professor
### Entrega
Envie os dados para este formulário: [Formulário de coleta de dados](https://forms.gle/4LLZpbvsPoDqPcSC6)

### Evolução dos dados
- Dados
- Informação
- Conhecimento
- Inteligência

### Exemplo
| Dado                        | Informação        | Conhecimento                | Inteligência         |
| --------------------------- | ----------------- | --------------------------- | -------------------- |
| Nome, Nascimento            | Idade             | Fórmula para calcular idade | Classificação        |
| Ana Maria Silva, 01/01/1980 | 43                | Hoje - Nascimento           | Pessoa de meia idade |
| **Dados Brutos**            | **Tomar decisão** | **Fórmula e=mc2**           | **Chat GPT**         |

### Previsão de Evolução

- Dados - Apenas registros brutos
- Informações - Faz sentido para a pessoa que os utiliza
- Conhecimento - Faz sentido para outras pessoas
- Inteligência Artificial - Capacidade de aprender, decidir
- Consciência - Autoconhecimento
- Sabedoria - Saber o que fazer com tudo isso

## Tipos de dados
- Não Estruturados
- Semi Estruturados
- Estruturados

#### Exemplo de tipos de dados
#### Não estruturados
- PDF
- DOCX (Word)
- XLSX (Excel)
- TXT
- Imagens

```txt
Poema do Cume

No alto daquele cume,
Plantei uma roseira.
O vento no cume bate,
A rosa no cume cheira.

Quando vem a chuva fina,
Salpicos no cume caem.
Formigas no cume entram,
Abelhas do cume saem.

Quando cai a chuva grossa,
A água do cume desce.
O barro do cume escorre,
O mato no cume cresce.

Então, quando cessa a chuva,
No cume volta a alegria.
Pois torna a brilhar de novo,
O Sol que no cume ardia. 
```

##### Semi Estruturados
- XML
- JSON
###### Exemplos
```xml
<possoas>
    <pessoa1>
        <id>1</id>
        <nome>Ana Maria</nome>
        <nascimento>2000-01-01</nascimento>
    </pessoa1>
    <pessoa2>
        <id>2</id>
        <nome>Maria silva</nome>
        <nascimento>2002-03-18</nascimento>
    </pessoa2>
    <pessoa3>
        <id>3</id>
        <nome>Marcos Paulo</nome>
        <nascimento>2003-04-25</nascimento>
    </pessoa3>
    <pessoa4>
        <id>4</id>
        <nome>Mariana Lima</nome>
        <nascimento>2001-01-13</nascimento>
    </pessoa4>
</pessoas>
```
```json
[
    {   
        "id": 1,
        "nome": "Ana Maria",
        "nascimento": "2000-01-01"
    },
    {   
        "id": 2,
        "nome": "Maria silva",
        "nascimento": "2002-03-18"
    },
    {   
        "id": 3,
        "nome": "Marcos Paulo",
        "nascimento": "2003-04-25"
    },
    {   
        "id": 4,
        "nome": "Mariana Lima",
        "nascimento": "2001-01-13"
    }
]
```
#### Por que JSON é Semi estruturado?
Porque permite modificações nos campos
```json
[
    {   
        "id": 1,
        "nome": "Ana Maria",
        "nascimento": "2000-01-01"
    },
    {   
        "id": 2,
        "nome": "Maria silva",
    },
    {   
        "id": 3,
        "nome": "Marcos Paulo",
        "nascimento": "2003-04-25",
        "telefone": "19 44577-7897"
    },
        {   
        "id": 4,
        "nome": "Mariana Lima",
        "pedidos":[
            {
                "data":"2023-01-02",
                "valor":5000.00
            },
            {
                "data":"2023-01-20",
                "valor":505.50
            },
        ]
    }
]
```

##### Estruturados
- CSV - Não relacional, Linguagem de estruturação universal de dados sem (SGBD)
- SQL - Relacional, Linguagem de Banco de dados (SGBD)
###### Exemplos
- CSV, Linguagem de estruturação universal de dados sem (SGBD)
```csv
id,nome,nascimento
1,Ana Maria,2000-01-01
2,Maria silva,2002-03-18
3,Marcos Paulo,2003-04-25
4,Mariana Lima,2001-01-13
```
- SQL, Linguagem de Banco de dados relacional (SGBD)
```sql
CREATE TABLE(
    id int primary key,
    nome varchar(100),
    nascimento date
);
INSERT INTO tabela (id, nome, nascimento) VALUES
(1, 'Ana Maria', '2000-01-01'),
(2, 'Maria silva', '2002-03-18'),
(3, 'Marcos Paulo', '2003-04-25'),
(4, 'Mariana Lima', '2001-01-13');
```