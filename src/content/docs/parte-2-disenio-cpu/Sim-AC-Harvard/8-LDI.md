---
title: 8. Carga inmediata (LDI)
description: Descripción repertorio de instrucciones arquitectura del CPU sim-ac
---

Es posible liberar el código de operación OpCode = **111** de la instrucción **HLT**, y utilizarla para una nueva instrucción **LDI**. La instrucción **HLT** se puede codificar con el código de operación OpCode = **100** con una particularidad **JMP DirecciónJMP**, donde el operando de la instrucción **DirecciónJMP** apunta a la ubicación de memoria donde se encuentra la instrucción **JMP DirecciónJMP**.
De esta manera, se libera el código de operación OpCode = **111** pero la  instrucción **HLT** sigue existiendo cómo una seudo instrucción representada por el código de operación OpCode = **100** y la particularidad del operando **JMP DirecciónJMP**.  

## Repertorio de instrucciones
El nuevo repertorio de instrucciones del CPU quedaría:

| # | OpCode | Nemonico             | Acción
| - |--------|----------------------|------------
| 0 | 000    | **ADD** [Dirección]  | Sumar el registro AC con el contenido de memoria xxx
| 1 | 001    | **SUB** [Dirección]  | Restar el registro AC con el contenido de memoria xxx
| 2 | 010    | **LDA** [Dirección]  | Cargar el contenido de la dirección de memoria xxx en el registro AC
| 3 | 011    | **STA** [Dirección]  | Almacenar el contenido del registro AC en la dirección de memoria xxx
| 4 | 100    | **JMP** Dirección    | Saltar a la dirección de memoria
| 5 | 101    | **JZ**  Dirección    | Saltar a la dirección de memoria, Si Z= 1
| 6 | 110    | **JC**  Dirección    | Saltar a la dirección de memoria, Si C= 1
| 7 | 111    | **LDI**   Valor      | Carga valor en el registro AC

:::caution[Detener programa HLT]
Para detener el programa se utiliza la instrucción JMP xxx, donde el destino del salto es la dirección donde se encuentra la instrucción JMP.
De está manera el procesador entra en un ciclo infinito ejecutando siempre la misma instrucción JMP xxx.
:::

<iframe src="https://circuitverse.org/simulator/embed/8-carga-inmediata-ldi-sim-ac-harvard?theme=default&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=true" style="border-width:; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>