---
title: 0. Repertorio de instrucciones
description: Descripción repertorio de instrucciones arquitectura del CPU sim-ac
---

## Repertorio de instrucciones
El repertorio de instrucciones del Sim-AC se compone de 8 instrucciones identificadas por código único de operación (OpCode).
En la primera columna de la tabla se encuentra código de operación en decimal y la segunda en binario, que es el que maneja la máquina. En la tercera columna se muestra el código nemónico asociado. Este código es el utilizado para representar a las instrucciones en el lenguaje ensamblador, la ultima columna es la acción que lleva a cabo esa instrucción.

| # | OpCode | Nemonico             | Acción
| - |--------|----------------------|------------
| 0 | 000    | **ADD** [Dirección]  | Sumar el registro AC con el contenido de memoria xxx
| 1 | 001    | **SUB** [Dirección]  | Restar el registro AC con el contenido de memoria xxx
| 2 | 010    | **LDA** [Dirección]  | Cargar el contenido de la dirección de memoria xxx en el registro AC
| 3 | 011    | **STA** [Dirección]  | Almacenar el contenido del registro AC en la dirección de memoria xxx
| 4 | 100    | **JMP** Dirección    | Saltar a la dirección de memoria
| 5 | 101    | **JZ**  Dirección    | Saltar a la dirección de memoria, Si Z= 1
| 6 | 110    | **JC**  Dirección    | Saltar a la dirección de memoria, Si C= 1
| 7 | 111    | **HLT**              | Detiene la ejecución

  

:::caution[Instrucción HLT]
La instrccuión HLT es de 8 bits pero el campo dirección se completa con ceros y el CPU no hace nada con ese campo.
:::

:::caution[Limite de direcciones]
El rango de las direcciones es de 32 posiciones.
:::


## Tipos instrucciones
Las instrucciones se clasifican en tres tipos

|     Tipo    |                       Instruccion               | 
|:-----------:|:-----------------------------------------------:|
| Aritmetica  | **ADD** <br/> **SUB**                           |
|Transferencia| **LDA** <br/> **STA**                           |
|Control      | **JMP** <br/> **JZ** <br/> **JC** <br/> **HLT** |


