import { useState } from "react";
import { Link } from "react-router-dom";

function Movie({movie}) {

  const {name, image, favorite, id} = movie
  const [ isFavorite, setIsFavorite ] = useState(favorite)

  function toggleFavorite() {
    setIsFavorite(!isFavorite)
    movie.favorite = !isFavorite
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
    </li>
  )
}

export default Movie;