import { useEffect, useState } from "react";
import FavoriteMovies from "../pages/FavoriteMovies";

function FavoriteList() {
  const [ favoriteMovie, setFavoriteMovie ] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/favoriteList')
      .then(res => res.json())
      .then(favoriteData => setFavoriteMovie(favoriteData))
  }, [])

  const favoriteMovieObj = favoriteMovie.map( movie => {
    return <FavoriteMovies key={movie.id} movie={movie}/>
  })



  return (
    <>
    {favoriteMovieObj}
    </>
  )
}


export default FavoriteList;