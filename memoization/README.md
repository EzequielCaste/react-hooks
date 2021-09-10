# Memoización

En Informática, el término memoización (del inglés *memoization*) es una técnica de optimización que se usa principalmente para acelerar los tiempos de cálculo, **almacenando los resultados** de la llamada a una subrutina en una memoria intermedia o búfer **y devolviendo esos mismos valores cuando se llame de nuevo a la subrutina o función con los mismos parámetros de entrada**.

Una función *memoizada* "***recuerda***" los resultados correspondientes a un determinado conjunto de valores de entrada. Posteriores llamadas que usen los mismos valores obtendrán el resultado previamente almacenado, en vez de realizar todo el cálculo de nuevo. De esta forma se evitan todos los cálculos, excepto el realizado en la primera llamada. 

La **API memo** de React, junto a **useMemo** y **useCallback** Hooks nos permitirán memorizar componentes, propiedades computadas y definición de funciones.

- **API memo**: Evitar renderizaciones innecesarias, memorizando componentes.
- **useMemo**: Crear propiedades computadas.
- **useCallback**: Solucionar problema que surge al: 



## React.memo

React.memo es un componente de orden superior (***Higher-Order Component***). Es similar a lo que hace *React.PureComponent*, pero para componentes funcionales.

Si el componente renderiza el **mismo resultado** dadas las **mismas props**, se puede envolver en una llamada a `React.memo` para una mejora en el desempeño en algunos casos memoizando el resultado. Esto significa que React omitirá renderizar el componente y reusará el último resultado renderizado.

`React.memo` solamente verifica los cambios en las **props**. Si tu componente de función envuelto en `React.memo` tiene un Hook [`useState`](https://es.reactjs.org/docs/hooks-state.html), [`useReducer`](https://es.reactjs.org/docs/hooks-reference.html#usereducer) o [`useContext`](https://es.reactjs.org/docs/hooks-reference.html#usecontext) en su implementación, continuará volviéndose a renderizar cuando el estado o el contexto cambien.

Por defecto solo comparará superficialmente objetos complejos en el objeto de **props**. Si se desea controlar la comparación, se puede proporcionar también una función de comparación personalizada como el segundo argumento.

La memorización puede ser un proceso más pesado que imprime el componente de nuevo en sí. Cuando haces la memorización de un componente cada vez que se va a representar la nueva pantalla se hacen ciertas comprobaciones internas en React y este proceso puede ser un poco más pesado que la misma representación de nuevo del componente. 

Entonces cuando lo usamos y cuando no? 

Básicamente la regla general es no usarlo o al menos no hasta que te des cuenta que tu aplicación se está poniendo un poco lenta. 

Unos ejemplos donde ocurre esto es en listas que tienen una gran cantidad de elementos. En estos casos casi siempre lo conveniente es memorizar dichos componentes. 

Otro caso que siempre debes memorizar es en el que los componentes ejecutan llamadas a las APIs pues imagínate que este componente esté cargando cada vez que hacemos el cambio en el input y aquí tengamos alguna petición con **fetch** o con **axios**. Se estaría llamando múltiples veces lo que es un poco delicado sobre todo cuando trabajamos con un back-end que está en cloud pues generalmente estos back-end suelen cobrar por el número de peticiones. Esto es algo que es claramente no deseado en este caso siempre es recomendable memorizar el componente.



### useMemo

useMemo almacena el valor que retorna una función para básicamente crear propiedades computadas.



