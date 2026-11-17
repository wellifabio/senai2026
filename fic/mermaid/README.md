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
Caso beta
```mermaid
usecase-beta
    actor Cliente
    actor Admin as "Administrador"

    systemBoundary Sistema["Loja Online"] {
        usecase UC1("Fazer Pedido")
        usecase UC2("Realizar Pagamento")
        usecase UC3("Gerenciar Estoque")
    }

    Cliente --> UC1
    UC1 ..> UC2 : include
    Admin --> UC3
```