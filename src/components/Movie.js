function Movie({movie}) {
  return(
    <li className="card">
      <div className="image">
        <img src={movie.image}/>
      </div>
      <div className="details">
        <strong>{movie.name}</strong>
      </div>
    </li>
  )
}

export default Movie;