import { useState } from "react";
import { Link } from "react-router-dom";

function Movie({movie, deleteMovie}) {

  const {name, image, favorite, id} = movie
  const [ isFavorite, setIsFavorite ] = useState(favorite)
 
  function toggleFavorite() {
    console.log(id)
    fetch(`http://localhost:3000/movieList/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify({
        favorite: !isFavorite
      })
    })
      .then(res => res.json())
      .then(updatedData => setIsFavorite(movie, updatedData))

      setIsFavorite(!isFavorite)
  }

  function handleMovieDeleteButton() {
       deleteMovie(id)
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
      <button onClick={() => toggleFavorite()}>Add to Favorite</button>
      <button onClick={handleMovieDeleteButton}>Delete Movie</button>
    </li>
  )
}

export default Movie;