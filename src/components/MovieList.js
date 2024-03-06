import Movie from "./Movie";

function MovieList({movies, deleteMovie, updateMovie}) {
  
  const movieInfo = movies.map(movie => {
    return <Movie key={movie.id} movie={movie} deleteMovie={deleteMovie} updateMovie={updateMovie}/>
  })
  
  return (
    <div>
      <ul className="cards">
        {movieInfo}
      </ul>
    </div>
  )
}

export default MovieList;