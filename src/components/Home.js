import { useState } from "react";
import Search from "./Search";
import { useOutletContext } from "react-router-dom";
import MovieList from "./MovieList";

function Home() {
  const {movies, deleteMovie, updateMovie} = useOutletContext()
  const [ searchText, setSearchText ] = useState('')


  const filteredMovies = movies.filter(movie => {
    if( searchText === '') {
      return true
    } else {
      return movie.name.toLowerCase().includes(searchText.toLowerCase()) || 
      movie.actor.toLowerCase().includes(searchText.toLowerCase()) ||
      movie.director.toLowerCase().includes(searchText.toLowerCase())
    }
  })

  function onSearchText(event) {
    setSearchText(event.target.value)
  }


  return (
    <div>
      <Search onSearchText={onSearchText} searchText={searchText}/>
      <MovieList movies={filteredMovies} deleteMovie={deleteMovie} updateMovie={updateMovie}/>
    </div>
  )
}

export default Home;