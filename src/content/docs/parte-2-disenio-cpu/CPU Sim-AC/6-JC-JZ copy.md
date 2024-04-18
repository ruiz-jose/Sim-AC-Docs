---
title: 6. Saltos condicionales (JZ-JC)
description: comprender el funcionamiento de la computadora a traves de la arquitectura acumulador.
---


## Banderas (Flags)
La ALU implementa dos indicadores indicadores o banderas (flags):

-	Z (**Zero**): toma valor 1 cuando el resultado de la ALU tiene valor cero. 

    JZ: Salta si el flag Z = 1, entonces PC =  Mem[Dirección]

-	C(**Carry**) : toma valor 1 cuando cuando el resultado de la ALU cae fuera del rango {0...255}, es decir, se puede dar: 
    -  En la operación suma cuando el resultado supera 255 
    -  En la operación resta cuando el resultado es menor que 0, este último indica que el valor del registro acumulador es menor que el dato de memoria (AC < Mem[Dirección])

Estos dos indicadores o flags se almacenan en registros de un bit, llamados Z y C, y solo se actualizan ante una operación artimética (ADD o SUB),pudiendo tomar 0 o 1 dependiendo del resultado de la última operación aritmética.

<iframe src="https://circuitverse.org/simulator/embed/6-saltos-condicionales-jz-jc-sim-ac-harvard?theme=default&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=true" style="border-width:; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>