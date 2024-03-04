function Movie({movie}) {

  const {name, image} = movie
  

  return(
    <li className="card">
      <div className="image">
        <img src={image} alt={name}/>
      </div>
      <div className="details">
        <strong>{name}</strong>
      </div>
    </li>
  )
}

export default Movie;