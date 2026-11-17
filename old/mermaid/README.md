# Mermaid

## Mapa mental
```mermaid
flowchart LR
    A(["Início"])
    A --> B{"Decisão"}
    B --> C["Opção 1"]
    B --> D("Opção 2 cantos arredondados")
    D --> E("Outro um caminho")
    D --> F("Mais um caminho")
    style B stroke:#cc0000
    style C stroke:#cc0000,fill:#ffffcc
    style D stroke:#0000cc,fill:#cc00cc,color:#ffffff
    style E stroke-width:3px
    style F fill:#ffffff,stroke:#2b6cb0,stroke-width:2px
    
```
## Fluxograma
```mermaid
flowchart TD
    A([início]) --> B@{ shape: manual-input, label: "Entrada, leia, inputs"}
    B --> C["Processamento"]
    C --> D@{ shape: curv-trap, label: "Saída, escreva, print"}
    D --> E["Outro processamento"]
    E --> F@{ shape: decision, label: "Se, If,<br>decisão" }
    F -->|Sim| G@{ shape: curv-trap, label: "Display, Saída se sim"}
    F -->|Não| H@{ shape: curv-trap, label: "Display, Saída se não"}
    G --> I([fim])
    H --> I([fim])
```

## DER Conceitual
```mermaid
flowchart LR
    %% Entidades (Retângulos)
    Cliente[CLIENTE]
    Pedido[PEDIDO]

    %% Relacionamento (Losango)
    Relacao{Realiza}

    %% Atributos do Cliente (Elipses)
    Cli_ID((<u>CPF</u>))
    Cli_Nome((Nome))
    Cli_Tel((Telefone))
    Cli_Nascto((Nascimento))

    %% Atributos do Pedido (Elipses)
    Ped_ID((<u>Número</u>))
    Ped_Data((Data))

    %% Conexões
    Cli_ID --- Cliente
    Cli_Nome --- Cliente
    Cli_Tel --- Cliente
    Cli_Nascto --- Cliente
    Cliente ---|1| Relacao
    Relacao ---|N| Pedido
    Pedido --- Ped_ID
    Pedido --- Ped_Data
```

## UML - DCU
UML(Unified Modeling Language), DCU(Diagrama de Casos de Uso)
```mermaid
graph TB
    subgraph Sistema de E-commerce
        A((Fazer Login))
        B((Navegar no Catálogo))
        C((Adicionar ao Carrinho))
        D((Finalizar Compra))
        E((Gerenciar Produtos))
        F((Listar Produtos))
        D .-> |<< include >>| A
        F .-> |<< extends >>| B
    end

    Admin([Administrador]) --> A
    Admin([Administrador]) --> E

    Cliente([Cliente]) --> A
    Cliente([Cliente]) --> B
    Cliente([Cliente]) --> C
    Cliente([Cliente]) --> D
```

## UML - DC
UML(Unified Modeling Language), DC(Diagrama Classes)
```mermaid
classDiagram
      Animal <|-- Duck
      Animal <|-- Fish
      Animal <|-- Zebra
      Animal : +int age
      Animal : +String gender
      Animal: +isMammal()
      Animal: +mate()
      class Duck{
          +String beakColor
          +swim()
          +quack()
      }
      class Fish{
          -int sizeInFeet
          -canEat()
      }
      class Zebra{
          +bool is_wild
          +run()
      }
```