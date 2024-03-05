import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MovieDetails() {
  const [movies, setMovies] = useState(null)
  const {id} = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    fetch(`http://localhost:3000/movieList/${id}`)
    .then(res => res.json())
    .then(detailData => setMovies(detailData))
  }, [])
  
  

  return (
   <div className="detail-card">
    {movies ? 
   <>
      <h2>{movies.name}</h2>
      <img src={movies.image}/>
      <h3>Release Year: {movies.year}</h3>
      <h4>Main Actor: {movies.actor}</h4>
      <h4>Director: {movies.director}</h4>
      <h4>Genre: {movies.genre}</h4>
      <h4>Description:</h4>
      <p>{movies.description}</p>
      <button onClick={() => navigate("/")}>Back to Home Page</button>
   </>
    : null 
  }
   </div>
  )
}


export default MovieDetails;