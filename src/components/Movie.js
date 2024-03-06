import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Movie({movie, deleteMovie, updateMovie}) {

  const {name, image, favorite, id} = movie
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
        <strong>{name}</strong>
      </div>
      <Link to={`/profile/${id}`}>View Movies Details</Link>
      <button onClick={toggleFavorite}>Add to Favorite</button>
      <button onClick={handleMovieDeleteButton}>Delete Movie</button>
    </li>
  )
}

export default Movie;