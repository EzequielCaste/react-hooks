import React, { createContext, useState } from 'react';

const UserContext = createContext();

const initialUser = {
  id: 1,
  name: 'Carlos',
  favoriteMovies: [1,3],
}

const UserProvider = ({ children}) => {

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

  const data= {
    user,
    login,
    logout,
    toggleFavoriteMovie,
  }

  return (
    <UserContext.Provider value={data}>
      { children }
    </UserContext.Provider>
  )
}

export { UserProvider };
export default UserContext;