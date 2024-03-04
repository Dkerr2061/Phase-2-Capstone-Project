import Movie from "./Movie";

function MovieList({movies}) {
  
  const movieInfo = movies.map(movie => {
    return <Movie key={movie.id} movie={movie}/>
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