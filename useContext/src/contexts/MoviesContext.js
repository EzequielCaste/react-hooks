import React from 'react'
import { createContext } from 'react/cjs/react.development'
import initialMovies from '../consts/initialMovies';

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const data = {movies: initialMovies}
  return (
    <MoviesContext.Provider value={data}>
      { children }
    </MoviesContext.Provider>
  )
}

export { MoviesProvider };
export default MoviesContext;