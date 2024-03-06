import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FavoriteMovies({movie, updateMovie}) {
  const {name, image, favorite, id} = movie
  const [ isFavorite, setIsFavorite ] = useState(favorite)
  const navigate = useNavigate()

  function toggleFavorite() {
    const updatedFavoriteStatus = !isFavorite
    const favoriteObj = { favorite: updatedFavoriteStatus}
    updateMovie(id, favoriteObj)
    setIsFavorite(updatedFavoriteStatus)
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