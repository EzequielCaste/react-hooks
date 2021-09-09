# React Hooks 

Los _hooks_ son una nueva incorporación a partir de **React 16.8.0**, que nos permiten "**enganchar**" el estado y el ciclo de vida en componentes funcionales.

<hr />

## Estado

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



## Ciclo de Vida

Son métodos que se ejecutan automáticamente en un **Componente de Clase**, ocurren en 3 fases:

1. Montaje.
2. Actualización.
3. Desmontaje.

<details><summary>Leer más</summary>

### Montaje
Estos métodos se ejecutan cuando se **crea** un componente y se **inserta** en el árbol del DOM.
- **constructor()**: Se ejecuta al crear la instancia del componente, en el constructor puedes inicializar el estado y enlazar manejadores de eventos.

- **render()**: Es el único método requerido, cuando se ejecuta, examina el estado y las propiedades y **dibuja** el componente en el árbol del DOM.

- **componentDidMount()**: Se invoca inmediatamente después de que un componente se ha **insertado** al árbol del DOM. Es útil para ejecutar suscripciones o peticiones asíncronas a API's, bases de datos, servicios, etc.

### Actualización
Estos métodos son ejecutados por cambios en el estado o las propiedades de los componentes.
- **render()**: redibuja el componente cuando detecta cambios en el estado o las propiedades del componente.

- **componenteDidUpdate()**: Se ejecuta inmediatamente después de que la actualización del estado o las propiedades sucede, al igual que *componentDidMount* es un método ideal para hacer peticiones externas.

### Desmontaje

Estos métodos son ejecutados una vez que el componente ha sido eliminado del árbol del DOM.

- **componenteWillUnmount():** Se ejecuta antes de destruir el componente del árbol del DOM, es un método útil para hacer tareas de limpieza.  

  </details>

