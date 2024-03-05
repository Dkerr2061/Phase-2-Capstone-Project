import Movie from "./Movie";

function MovieList({movies, deleteMovie}) {
  
  const movieInfo = movies.map(movie => {
    return <Movie key={movie.id} movie={movie} deleteMovie={deleteMovie}/>
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