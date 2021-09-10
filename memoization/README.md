# Memoización

En Informática, el término memoización (del inglés *memoization*) es una técnica de optimización que se usa principalmente para acelerar los tiempos de cálculo, **almacenando los resultados** de la llamada a una subrutina en una memoria intermedia o búfer **y devolviendo esos mismos valores cuando se llame de nuevo a la subrutina o función con los mismos parámetros de entrada**.

Una función *memoizada* "***recuerda***" los resultados correspondientes a un determinado conjunto de valores de entrada. Posteriores llamadas que usen los mismos valores obtendrán el resultado previamente almacenado, en vez de realizar todo el cálculo de nuevo. De esta forma se evitan todos los cálculos, excepto el realizado en la primera llamada. 

La **API memo** de React, junto a **useMemo** y **useCallback** Hooks nos permitirán memorizar componentes, propiedades computadas y definición de funciones.

- **API memo**: Evitar renderizaciones innecesarias, memorizando componentes.
- **useMemo**: Crear propiedades computadas.
- **useCallback**: Solucionar problema que surge al: 



## React.memo

React.memo se encarga de memorizar un componente completo y lo vuelve a memorizar al cambiar las properties con el objetivo de evitar re-renders. 

#### ¿Cuando debemos usarlo y cuando no?

Debemos evitar utilizarla casi siempre pues cuando los componentes son muy sencillos es más costosa la tarea de memorizar el componente y realizar comprobaciones a cada render que la tarea de ejecutar el componente en sí. 

Un caso fijo cuando tenemos que utilizarla si o si es cuando tenemos **muchísimos elementos en una lista**, cuando ya en nuestra misma aplicación nos muestra que al usar un determinado componente este componente es un poco pesado. Otro caso fijo es **cuando un componente llama a una API** porque este es un comportamiento que debemos evitar que se repita a toda costa que no esté realizando petición tras petición cada vez que ocurre un render no por el mismo sino por componentes padres.

<details><summary>Leer más</summary>
React.memo es un componente de orden superior (***Higher-Order Component***). Es similar a lo que hace *React.PureComponent*, pero para componentes funcionales.

Si el componente renderiza el **mismo resultado** dadas las **mismas props**, se puede envolver en una llamada a `React.memo` para una mejora en el desempeño en algunos casos memoizando el resultado. Esto significa que React omitirá renderizar el componente y reusará el último resultado renderizado.

`React.memo` solamente verifica los cambios en las **props**. Si tu componente de función envuelto en `React.memo` tiene un Hook [`useState`](https://es.reactjs.org/docs/hooks-state.html), [`useReducer`](https://es.reactjs.org/docs/hooks-reference.html#usereducer) o [`useContext`](https://es.reactjs.org/docs/hooks-reference.html#usecontext) en su implementación, continuará volviéndose a renderizar cuando el estado o el contexto cambien.

Por defecto solo comparará superficialmente objetos complejos en el objeto de **props**. Si se desea controlar la comparación, se puede proporcionar también una función de comparación personalizada como el segundo argumento.

La memorización puede ser un proceso más pesado que imprime el componente de nuevo en sí. Cuando haces la memorización de un componente cada vez que se va a representar la nueva pantalla se hacen ciertas comprobaciones internas en React y este proceso puede ser un poco más pesado que la misma representación de nuevo del componente. 

</details>

### useMemo

useMemo almacena el valor que retorna una función para básicamente crear **propiedades computadas** (valor memorizado). Pasa una función de "crear" y un arreglo de dependencias. useMemo solo volverá a calcular el valor memorizado cuando una de las dependencias haya cambiado. Esta optimización ayuda a evitar cálculos costos en cada render.

Nos va a servir para procesos pesados, cualquier función que tú consideres que su ejecución puede ralentizar un poco la ejecución como tal.

### useCallback

Es una función que recibe dos argumentos donde el primero es una *función* y el segundo es un *arreglo de dependencias*. La función que vamos a recibir va a ser la función que queremos memorizar su definición. Dentro de las dependencias vamos a colocar aquellos estados que nos van a indicar **cuándo** debe volver a memorizarse la definición de una función.

Diferencias que tienen con el **useMemo**: 

Ambos reciben un arreglo de dependencias pero mientras que el **useCallback** recibe en su primer argumento *la función a memorizar su definición*, el **useMemo** recibe en su primer argumento *una función que retorna un valor* y ese valor es el *proceso que queremos memorizar*. En general ese proceso también debe retornar un valor porque básicamente estamos guardando algo como una **propiedad computada**.



### Resumen

**memo** memoriza un componente.

- Vuelve a memorizar al cambiar las props
- Evita Re-renders

**useMemo** memoriza un valor calculado.

- Para propiedades computadas
- Para procesos pesados

**useCallback** memoriza la definición de una función para no volver a definirla en cada render.

 - Usarlo siempre que se pase una función por props a un componente memorizado.
 - Usarlo siempre que se pase una función como argumento de un efecto.













