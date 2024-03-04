import { useState } from "react";

function Movie({movie}) {

  const {name, image, favorite} = movie
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
      <button onClick={toggleFavorite}>Add to Favorite</button>
    </li>
  )
}

export default Movie;