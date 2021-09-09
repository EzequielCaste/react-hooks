# React Hooks - useRef

El **useRef** Hook nos permitirá interactuar directamente con del DOM y disponer de referencias mutables.

```
const refContainer = useRef(initialValue);
```

**useRef** devuelve un objeto ref mutable cuya propiedad ___.current___ se inicializa con el argumento pasado (initialValue). El objeto devuelto se mantendrá persistente durante la vida completa del componente.

**useRef** no notifica cuando su contenido cambia. Mutar la propiedad ___.current___ no causa otro renderizado.
