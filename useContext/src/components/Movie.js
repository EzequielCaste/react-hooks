import React, { useContext } from 'react'
import UserContext from '../contexts/userContext';

const Movie = ({ movie }) => {  
  const {title, imageUrl, id} = movie;

  const { user, toggleFavoriteMovie } = useContext(UserContext);

  const imgStyles = {
    height: '260px',
    objectFit: 'cover',
  }

  const isFavorite = user?.favoriteMovies?.includes(id);

  return (
    <div className="card">
      <img 
        src={imageUrl} 
        alt={title} 
        className="card-img-top"
        style={imgStyles}
      />
      <div className="card-body">
        <h4>{title}</h4>
        {
          user?.id && 
          <button onClick={() => toggleFavoriteMovie(id)} className={`btn ${isFavorite ? 'btn-success' : 'btn-outline-primary'}`}>Favorito</button>
        }
      </div>     
    </div>
  )
}

export default Movie;