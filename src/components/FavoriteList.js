import FavoriteMovies from "../pages/FavoriteMovies";
import { useOutletContext } from "react-router-dom";

function FavoriteList() {
  const {movies} = useOutletContext()
 
  const filteredFavorites = movies.filter( movie => {
     if(movie.favorite === true) {
      return true
     } else {
      return false
     }
  })

  const favoriteMovie = filteredFavorites.map( movie => {
      return <FavoriteMovies key={movie.id} movie={movie}/>
  })

  return (
    <div>
      <ul className="cards">
        {favoriteMovie}
      </ul>
    </div>
  )
}


export default FavoriteList;