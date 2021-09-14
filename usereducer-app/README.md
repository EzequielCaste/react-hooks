# React Hooks - useReducer

**useReducer** nos permite manejar estados complejos de una forma más ordenada. Es una alternativa al hook **useState()**.

```javascript
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

Acepta un **reducer** de tipo `(state, action) => newState` y devuelve el estado actual emparejado con un método **dispatch**.

Hook useReducer:

- acepta una función **reducer** y el **estado inicial**.
- devuelve el **estado actual** y el método **dispatch**.

```javascript
const reducer = (state, action) => {
  switch(action.type) {
    case types.increment:
      return state + 1;
    default:
      return state;
  }
}
```

El **dispatch** recibe una acción. Una acción es un objeto que tiene una propiedad `type`. Se podría pensar que una acción como un *evento* que describe algo que sucedió en la aplicación.

`{ type: 'increment', payload: '1'}`

Normalmente colocamos en el campo `action.payload` la información adicional necesaria para describir lo que está sucediendo.

```jsx
<button 
    onClick={() => dispatch({ 
        type: TYPES.INCREMENT 
    })}
>
    Increment
</button>
```



Los **Types** se guardan en una variable const para evitar errores de sintaxis.

```javascript
const types = {
  increment: 'increment',
  decrement: 'decrement',
  reset: 'reset'
}
```



### ¿Qué es un Reducer?

**Reducer**: son funciones que toman el estado actual `state` y una `action` como argumentos y devuelven un nuevo `state`. `(state, action) => newState`

Los **reducers** son **funciones puras**:

- Son aquellas que operan utilizando solo los parámetros de entrara `state` y `action` sin recurrir o afectar a ningún otro elemento fuera de ellas.
- Debe cumplir estas dos condiciones:
  - Dado unos parámetros de entrada de idéntico valor, la función siempre devolverá el mismo resultado.
  - El cómputo de la función, su lógica, no implica ningún efecto secundario observable fuera de ella

**Nota:** un "efecto secundario" es cualquier cambio al `state` o comportamiento que puede ser visto fuera de devolver un valor desde la función. Por ejemplo: mostrar un valor por consola, guardar un archivo, realizar una petición AJAX HTTP, entre otros. 

### Actualizaciones Inmutables

**Mutación**: modificar valores existentes de un objeto/arreglo.

**Inmutabilidad**: tratar los valores como algo que no puede ser cambiado.

Nuestros **reducers** nunca pueden mutar los valores del estado original / actual. Solo pueden realizar copias de los valores originales y luego pueden mutar las copias.

```javascript
// ✅ Esto es seguro porque hicimos una copia
return {
  ...state,
  value: 123
}
```

### Reducer Puro

- Retornará el mismo estado, si se dispara la misma acción con el mismo payload.
- Los parámetros de entrada (state, action) no deben ser mutados, (alterado). Debes utilizar funciones que no modifiquen el valor original sino que retornen uno nuevo, como **filter**, **find**, **map** y **reduce**.



### Parametro Init 

```react
const initialState = 10.25;

const init = (value) => {
  return parseInt(value);
}

const [counter, dispatch] = useReducer(reducer, initialState, init);
```

Consiste en básicamente hacer un **mutador** del estado inicial es decir nosotros podemos realizar con ella ciertas modificaciones al estado inicial.

```react
const reducer = (state, action) => {
  switch(action.type) {
    case types.reset:
      return init(initialState);
    default:
      return state;
  }
}
```



### ¿Cuando usar useReducer?

- Cuando se tiene una lógica compleja que involucra subvalores.
- Cuando el próximo estado depende del anterior.
- Cuando sobre un estado se realizan muchas acciones distintas para actualizarlo.

**useReducer** además te permite optimizar el rendimiento para componentes que activan actualizaciones profundas, porque puedes pasar hacia abajo **dispatch** en lugar de callbacks.





