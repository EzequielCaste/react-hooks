# React Hooks - useContext

Context API nos permite proveer de un estado global de fácil acceso a todo el árbol de componentes (o alguna sección)

```javascript
const value = useContext(MyContext);
```

El hook **useContext** acepta un objeto de contexto (el valor devuelto de *React.createContext*) y devuelve el valor de contexto actual. 

El valor actual del contexto es determinado por la propiedad ***value*** del `<MyContext.Provider>` ascendentemente más cercado en el árbol al componente que hace la llamada.

Cuando el `<MyContext.Provider>` ascendente más cercano en el árbol se actualiza, el Hook activa una renderización con el ***value*** más reciente del contexto pasado a ese proveedor ***MyContext***.



```javascript
const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(initialUser)

  const login = () => {
    setUser(initialUser)
  }

  const logout = () => {
    setUser(null)
  }

  const toggleFavoriteMovie = (movieId) => {

    const isFavorite = user.favoriteMovies.includes(movieId);
    const favoriteMovies = isFavorite
    ? user.favoriteMovies.filter(favMovId => favMovId !== movieId)
    : [...user.favoriteMovies, movieId]

    setUser( prev => ({
      ...prev,
      favoriteMovies,
    })
    )
  }
	
  // Este objeto contiene un estado y funciones para modificar ese estado
  const data= {
    user,
    login,
    logout,
    toggleFavoriteMovie,
  }

  // Pasamos el objeto data como prop value para que los hijos puedan acceder al estado global y las funciones para modificar ese estado
  return (
    <UserContext.Provider value={data}>
      { children }
    </UserContext.Provider>
  )
}

export { UserProvider };
export default UserContext;
```

