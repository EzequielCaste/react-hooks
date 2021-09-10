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

useMemo almacena el valor que retorna una función para básicamente crear **propiedades computadas** (valor memorizado). Pasa una función de "crear" y un arreglo de dependencias. useMemo solo volverá a calcular el valor memorizado cuando una de las dependencias haya cambiado. Esta optimización ayuda a evitar cálculos costos en cada render.



memoriza un valor calculado es decir nos va a servir para poder realizar propiedades computadas como por ejemplo lo que hicimos de crear una constante que guarde lo que tienen los users pero aplicándoles un filtro eso sería una propiedad computada y específicamente para procesos pesados cualquier función que tú consideres que su ejecución puede ralentizar un poco la ejecución como tal de todo lo que sigue la aplicación es mejor memorizarlo para que no esté ejecutándose ese proceso pesado a cada rato ahora igual que el memo lo recomendable es usarlo lo menos posible si un proceso es muy sencillo es mejor ni siquiera llamar a useMemo pues además de hacer el código un poco más extenso no mucho pero pues aporta algo más también estas comprobaciones internas que hace React hasta que en lugar de optimizar estamos volviendo a la aplicación más lenta







### useCallback

useCallback para almacenar la definición de una función guardarla memorizada.



es una función que recibe dos argumentos donde el primero es una función y el segundo es un arreglo de dependencias y en este caso la función que vamos a recibir aquí va a ser la función que queremos memorizar su definición.



y dentro de estas dependencias vamos a colocar aquellos estados que nos van a indicar cuándo debe volver a memorizar se la definición de una función



fíjate en las diferencias que tienen con el **useMemo**: 

ambos reciben un arreglo de dependencias pero mientras que el **useCallback** recibe en su primer argumento *la función a memorizar su definición*. 

el **useMemo** recibe en su primer argumento *una función que retorna un valor* y ese valor es el *proceso que queremos memorizar*. En general ese proceso también debe retornar un valor porque básicamente estamos guardando algo como una propiedad computada.

el useMemo nos serviría para crear propiedades computadas que se memoriza.

el useCallback nos serviría para guardar definiciones de funciones para evitar renderizados cuando estamos utilizando el useMemo.







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













memo se encarga de memorizar un componente completo y lo vuelve a memorizar al cambiar las properties con el objetivo de evitar re-renders. 

cuando debemos usarlo y cuando no?

debemos evitar utilizarla casi siempre pues cuando los componentes son muy sencillos es más costosa la tarea de memorizar el componente y realizar comprobaciones a cada render que la tarea de ejecutar el componente en sí. 

Un caso fijo cuando tenemos que utilizarla si o si es cuando tenemos muchísimos elementos en una lista, cuando ya en nuestra misma aplicación nos muestra que al usar un determinado componente este componente es un poco pesado. Y caso fijo fijo cuando un componente llama a una API porque este es un comportamiento que debemos evitar que se repita a toda costa que no esté realizando petición tras petición cada vez que ocurre un render no por el mismo sino por componentes padres.
