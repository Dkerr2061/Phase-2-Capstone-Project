import { useState } from "react";

function FavoriteMovies({movie}) {

  const {name, image, favorite} = movie
  // const [ removeFavorite, setRemoveFavorite ] = useState(favorite)

  // function handleClick() {
  //   setRemoveFavorite((removeFavorite) => !removeFavorite)
  //   movie.favorite = removeFavorite
  // }
  

  return(
    <li className="card">
      <div className="image">
        <img src={image} alt={name}/>
      </div>
      <div className="details">
        <strong>{name}</strong>
      </div>
      <button onClick={(e) => console.log(e)}>Remove from Favorites</button>
    </li>
  )
}

export default FavoriteMovies;