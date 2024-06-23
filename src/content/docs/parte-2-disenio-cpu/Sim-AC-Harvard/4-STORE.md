---
title: 4. Almacenar en memoria (STA)
description: comprender el funcionamiento de la computadora a traves de la arquitectura acumulador.
---

Almacenar en memoria (STORE)

| # | OpCode | Nemonico             | Acción
| - |--------|----------------------|------------
| 0 | 000    | **ADD** [Dirección]  | Sumar el registro AC con el contenido de memoria xxx
| 1 | 001    | **SUB** [Dirección]  | Restar el registro AC con el contenido de memoria xxx
| 2 | 010    | **LDA** [Dirección]  | Cargar el contenido de la dirección de memoria xxx en el registro AC
| 3 | 011    | **STA** [Dirección]  | Almacenar el contenido del registro AC en la dirección de memoria xxx

<iframe src="https://circuitverse.org/simulator/embed/ac-4-almacenar-en-memoria-store-sim-ac-harvard-3e667b92-d597-4aea-a2bb-558192f7b0eb?theme=default&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=true" style="border-width:; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>