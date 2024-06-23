---
title: Arquitectura ACumulador
description: comprender el funcionamiento de la computadora a traves de la arquitectura acumulador.
---

La arquitectura basada en el ACumulador se caracteriza por su diseño intuitivo y fácil de entender:

![cpu-sim-ac](../../../../assets/cpu-sim-ac.svg)  

:::caution[Simplificaciones]
Este simulador busca ser una herramienta para la enseñanza de la arquitectura de computadoras, introduciendo una arquitectura lo más simple posible.
:::

## ALU:
En las operaciones de la ALU esta prestablecido que uno de los operandos fuentes es el registro AC y su resultado siempre se almacena en el registro AC:

![ALU-AC2](../../../../assets/ALU-AC.svg)  

:::note[Tipo de datos]
Las operaciones en la ALU siempre son con datos de 1 byte (8 bits)
:::

  
## Registros:
  - Registro acumulador (AC) de 8 bits (1 byte);
  - Dos registros banderas (Flags) de 1 bit, uno denominados acarreo (Carry) y cero (Zero)
  - Registro contador de programa (PC) de 5 bits; 

## Arquitectura harvard
Dentro de los procesadoes actuales, por una cuestion de simplicidad y eficiencia se dividen los programas en dos memorias separadas una para datos y otra para código. Este diseño se denomina [arquitectura harvard](https://es.wikipedia.org/wiki/Arquitectura_Harvard#:~:text=La%20arquitectura%20de%20Harvard%20es,instrucciones%20y%20para%20los%20datos)
![harvard](../../../../assets/harvard.svg)  

### Memoria de instrucciones y de datos:
  Las memorias son de 32 bytes y cada una contiene un 8 bits (1 byte), por lo tanto es posible acceder a 32 posiciones (2**5 = 32) ya que el PC es de 5 bits.

## Sim-AC Harvard en Circuitverse(on-line)
<iframe src="https://circuitverse.org/simulator/embed/8-carga-inmediata-ldi-sim-ac-harvard?theme=default&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=true" style="border-width:; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>

:::tip[Míralo en acción]
Para poder verlo mejor es necesario presionar sobre pantalla completa
:::



