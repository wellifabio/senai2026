# Exemplos

## Exercícios com máscadas básicas
A partir dos endereços IP a seguir informe: Gateway, Broadcast e Escopo/Range (Total de hosts)

- 1 IP: 192.168.0.3/24
```
Máscara:255.255.255.0
Gateway: 192.168.0.1
Broadcast: 192.168.0.255
Escopo: 192.168.0.0 - 192.168.0.255 - 256 hosts
```
- 2 IP: 172.16.0.36/24
```
Máscara: 255.255.255.0
Gateway: 172.16.0.1
Broadcast: 172.16.0.255
Escopo: 172.16.0.0 - 172.16.0.255 - 256 hosts
```
- 3 IP: 10.0.100.100/24
```
Máscara: 255.255.255.0
Gateway: 10.0.100.1
Broadcast: 10.0.100.255
Escopo: 10.0.100.0 - 10.0.100.255 - 256 hosts
```
- 4 IP: 192.168.24.20/24
```
Máscara: 255.255.255.0
Gateway: 192.168.24.1
Broadcast: 192.168.24.255
Escopo: 192.168.24.0 - 192.168.24.255 - 256 hosts
```
- 5 IP: 172.16.8.120/16
```
Máscara: 255.255.0.0
Gateway: 172.16.0.1
Broadcast: 172.16.255.255
Escopo: 172.16.0.0 - 172.16.255.255 - 65536 hosts
```
- 6 IP: 10.0.103.125/16
```
Máscara: 255.255.0.0
Gateway: 10.0.0.1
Broadcast: 10.0.255.255
Escopo: 10.0.0.0 - 10.0.255.255 - 65536 hosts
```
- 7 IP: 192.168.24.20/16
```
Máscara: 255.255.0.0
Gateway: 192.168.0.1
Broadcast: 192.168.255.255
Escopo: 192.168.0.0 - 192.168.255.255 - 65536 hosts
```
- 8 IP: 172.16.8.120/24
```
Máscara: 255.255.255.0
Gateway: 172.16.8.1
Broadcast: 172.16.8.255
Escopo: 172.16.8.0 - 172.16.8.255 - 256 hosts
```
- 9 IP: 10.80.110.121/8
```
Máscara: 255.0.0.0
Gateway: 10.0.0.1
Broadcast: 10.255.255.255
Escopo: 10.0.0.0 - 10.255.255.255 - 16777216 hosts
```
- 10 IP: 172.16.32.99/8 (Reservado)
```
Máscara: 255.0.0.0
Gateway: 172.16.0.1
Broadcast: 172.32.255.255
Escopo: 172.16.0.0 - 172.32.255.255 - 1048576 hosts
```