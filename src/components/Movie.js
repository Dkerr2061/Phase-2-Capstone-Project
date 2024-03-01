function Movie({movie}) {
  return(
    <li>
      <img src={movie.image}/>
      <h4>{movie.name}</h4>
    </li>
  )
}

export default Movie;