# Nocturna Fest, versión con fallos

> ⚠️ **Esta web tiene fallos de accesibilidad a propósito.** No copies su código: la versión corregida está en [a11y-nocturnafest-fixed](https://github.com/parrabalpiedra-a11y/a11y-nocturnafest-fixed).

Web de un festival de música inventado que se usa en la charla «Programar para personas, no para pantallas», en el juego del Cazafallos. Parece una web normal, pero quien use teclado, lector de pantalla, zoom o un móvil se va a encontrar con problemas.

Nocturna Fest no existe: el nombre, los grupos y las ilustraciones son ficticios.

**Ver en línea:** https://parrabalpiedra-a11y.github.io/a11y-nocturnafest/

## Cómo probarla

No necesita instalar nada: abre `index.html` en el navegador o sírvela con cualquier servidor estático, por ejemplo:

```bash
npx http-server -c-1 .
```

Para cazar fallos:

1. Navega solo con el teclado (`Tab`, `Shift + Tab`, `Enter`, `Escape`).
2. Activa un lector de pantalla (NVDA, VoiceOver o TalkBack).
3. Haz zoom al 200 % o abre la web en el móvil y gíralo.
4. Pasa [axe DevTools](https://www.deque.com/axe/devtools/) o Lighthouse y compara lo que detectan con lo que has encontrado tú.

## Qué fallos tiene

<details>
<summary>Spoiler: la lista completa</summary>

| Fallo | Criterio WCAG |
|---|---|
| Sin `lang` en el `<html>`, título poco descriptivo y sin `header`, `nav`, `main` ni enlace para saltar al contenido | 3.1.1, 2.4.2, 1.3.1, 2.4.1 |
| Texto gris con poco contraste | 1.4.3 |
| El foco no se ve al navegar con el teclado | 2.4.7 |
| `div` que hacen de botón y de enlace, e iconos sin nombre (carrito, menú, favoritos, redes) | 4.1.2, 2.1.1 |
| Imágenes informativas sin `alt` | 1.1.1 |
| Formulario sin etiquetas visibles, con errores que solo se marcan en rojo y sin `type` ni `autocomplete` | 3.3.2, 3.3.1, 1.4.1, 1.3.5 |
| Fecha de nacimiento en tres desplegables sin agrupar ni nombre | 1.3.1, 4.1.2 |
| La disponibilidad de entradas se indica solo con color y los gastos solo aparecen al pasar el ratón | 1.4.1, 1.4.13 |
| La cinta de artistas se mueve sin poder pararla y la frase de la portada cambia sola | 2.2.2 |
| El temporizador de compra se acaba sin avisar y borra lo escrito | 2.2.1 |
| El pop-up no se cierra con `Escape` y su cierre es una «x» diminuta | 2.1.2, 2.5.8 |
| El aviso de cookies tapa el contenido y «rechazar» es un texto diminuto y casi invisible, al lado de un botón grande de «Aceptar todo» | 2.4.11, 1.4.3 |
| En el móvil: no deja hacer zoom, bloquea la orientación, el cartel es un carrusel que solo va con gestos y los botones son muy pequeños | 1.4.4, 1.3.4, 2.5.1, 2.5.8 |

</details>

### Lo que detectan las herramientas automáticas

axe-core (WCAG 2.2 AA) solo encuentra cinco tipos de fallo: contraste, falta de `lang`, imágenes sin `alt`, el `viewport` que bloquea el zoom y los desplegables sin nombre. Todo lo demás (foco, teclado, pop-up, temporizador, movimiento, formulario…) solo se descubre probando la web como la usaría una persona.

## Estructura

```
index.html      Página única
css/styles.css  Estilos
js/main.js      Comportamiento (pop-up, temporizador, carrusel, formulario)
img/            Ilustraciones SVG
```

## Licencia

[MIT](LICENSE) © Paula Arrabal Piedra
