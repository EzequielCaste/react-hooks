# React Hooks 

Los _hooks_ son una nueva incorporación a partir de **React 16.8.0**, que nos permiten "**enganchar**" el estado y el ciclo de vida en componentes funcionales.

<hr />

#### Estado

El estado (***state***) son los valores internos que manejan la lógica y los datos de un componente, permite que éste reaccione a cualquier cambio lo que hará que se vuelva a renderizar en la interfaz.

<details><summary>Leer más</summary>

##### 3 características de state

- Es inmutable.
- No se puede modificar directamente.
- Es asíncrono.

Para hacer cambios hay que usar el método ***setState().***

El estado de un componente no es accesible desde otro componente excepto de aquel que lo posee y lo asigna.

La **propagación del estado** fluye de forma **unidireccional** y **descendiente**, esto significa que un componente padre puede pasar valores de su estado a componentes hijos que lo recibirán como **propiedades** (*props*).

En el momento que los valores del estado del padre cambien esto causará que tanto el padre como los hijos que recibieron esos valores como propiedades se rendericen nuevamente y reaccionen a dicho cambio.

Cada componente que se defina como una clase cuenta con un objeto para almacenar información llamado ***state***.

Cada vez que cambia el ***state***, React vuelve a renderizar el componente en la vista.

</details>

------



#### Ciclo de Vida

