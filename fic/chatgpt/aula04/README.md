# Aula04 - API REST

## API
Uma API REST é um modelo de comunicação entre sistemas de software que utiliza o protocolo HTTP para a troca de dados de forma simples e padronizada

## REST
O termo REST vem de Representational State Transfer (Transferência de Estado Representacional), que é um estilo de arquitetura de software.

## REST Full
REST FUll API do protocolo HTTP trabalha com pelo menos 4 verbos
- GET
- POST
- PUT / PACTH
- DELETE

## Analogia
Pense na API como um garçom em um restaurante: o cliente (aplicação) faz um pedido, o garçom (API) leva o pedido até a cozinha (servidor), e depois traz o prato pronto de volta para o cliente.

## Chave de API
É um código criptografado que obtemos do dono da API que permite-nos usá-la.
### Exemplo API do Google para usar o GEMINI
- Faça login com sua conta gmail em uma janela anonima, 
- Acesse o [Google AI Studio](https://aistudio.google.com/app/api-keys)
- Clique em **Criar chave de API**, dê um nome para ela, mantenha segura, e não se esqueça de excluí-lá após usar.
- Teste no [ChatBot do professor](https://wellifabio.github.io/chatbot_gemini_eu_prof_2026/)

## Exemplos de APIs externas públicas
- [Via CEP](https://viacep.com.br/) - Obter endereços através do CEP
- [Banco Central do Brasil](https://bcb.gov.br/) - Obter dados financeiros
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - API educacional
- [DummyJSON](https://dummyjson.com/docs/auth) - API de autenticação, para fazer login com segurança JWT(JSON Web Token)

### Inicialmente vamos explorar estas APIS