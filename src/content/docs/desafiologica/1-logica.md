---
title: Desafío lógica
description: Descripción repertorio de instrucciones arquitectura del CPU sim-ac
---


La computación se basa en bits. Los bits solo pueden tener dos valores: 0 o 1. Verdadero o Falso. Este principio se utiliza para tomar decisiones como, por ejemplo, decidir si un número es mayor que otro.


## Operaciones a nivel de bit (bitwise)

Trabajar con números en su representación binaria muchas veces es
la forma más rápida de hacer ciertas pruebas; dado que, de hecho, el
número ya está en esa representación, hacer ciertas operaciones
es más rápido que hacerlo de otra forma. Por ejemplo,
los números pasados a binario tienen un `1` como último bit si son
impares, y `0` si son pares. Para comprobar si este último bit está
*encendido* (o sea, es un 1), se compara bit a bit con `1`

```python
33 & 1
1
30 & 1
0
```

`&` es el *y bit a bit*, o *bitwise and*, que toma cada bit de los dos
operandos y lo compara, haciendo la operación lógica correspondiente y
dando el resultado. De la misma forma se puede también multiplicar y
dividir por 2 o cualquier potencia de 2, usando  los operadores que corren a la izquierda `<<` o
derecha ``>>`` el número de bits que le digamos.

```python
333 >> 1
166
888 << 1
1776
```

Así, ``<<`` puede ser una forma rápida de hallar potencias de 2

```python
2 << 36
137438953472
```


