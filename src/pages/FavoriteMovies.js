import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FavoriteMovies({movie}) {
  const {name, image, favorite, id} = movie
  const [ isFavorite, setIsFavorite ] = useState(favorite)
  const navigate = useNavigate()


  function toggleFavorite() {
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
      navigate("/")
  }
  
  
  return(
    <li className="card">
      <div className="image">
        <img src={image} alt={name}/>
      </div>
      <div className="details">
        <strong>{name}</strong>
      </div>
      <button onClick={toggleFavorite}>Remove from Favorites</button>
    </li>
  )
}

export default FavoriteMovies;