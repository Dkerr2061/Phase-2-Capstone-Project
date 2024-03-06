import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Movie({movie, deleteMovie, updateMovie}) {

  const {name, image, favorite, id, likes} = movie
  const [ isFavorite, setIsFavorite ] = useState(favorite)
  const navigate = useNavigate()
 
  function handleMovieDeleteButton() {
       deleteMovie(id)
  }

  function toggleFavorite() {
    const updatedFavoriteStatus = !isFavorite
    const favoriteObj = { favorite: updatedFavoriteStatus}
    updateMovie(id, favoriteObj)
    setIsFavorite(updatedFavoriteStatus)
    navigate("/favorite_movies")
  }


  return(
    <li className="card">
      <div className="image">
        <img src={image} alt={name}/>
      </div>
      <div className="details">
        <h3 className="card-h3">{name}</h3>
        <br/>
        <a className="likes-text">Likes: {likes}</a>
      </div>
      <Link className="link" to={`/profile/${id}`}>View Movies Details</Link>
      <button 
      className="favorite-button" 
      onClick={toggleFavorite}
      >
      Add to Favorite
      </button>
      <br/>
      <button
      className="delete-button" 
      onClick={handleMovieDeleteButton}
      >
      Delete Movie
      </button>
    </li>
  )
}

export default Movie;