import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function FavoriteMovies({movie, updateMovie}) {
  const {name, image, favorite, id, likes} = movie
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
        <h3 className="card-h3">{name}</h3>
        <br/>
        <a>Likes: {likes}</a>
      </div>
      <Link to={`/profile/${id}`}>View Movies Details</Link>
      <button className="favorite-button" onClick={toggleFavorite}>Remove from Favorites</button>
    </li>
  )
}

export default FavoriteMovies;