import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";

function App() {
  const [ movies, setMovies ] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/movieList')
      .then(res => res.json())
      .then(movieData => setMovies(movieData))
  }, [])

  function addNewMovie(newMovie) {
    fetch('http://localhost:3000/movieList', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify({...newMovie})
    })
      .then(res => res.json())
      .then(newMovieData => setMovies([...movies, newMovieData]))
  }

  function deleteMovie(id) {
    fetch(`http://localhost:3000/movieList/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if(res.ok) {
          setMovies((movies) => movies.filter( movie => {
            return movie.id !== id
          }))
        } else {
          alert("Error, cannot delete movie at this time!")
        }
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="website-name">Movie Buster!</h1>
      </header>
      <NavBar/>
      <Outlet context={{ movies: movies, addNewMovie: addNewMovie, deleteMovie: deleteMovie}}/>
    </div>
  );
}

export default App;
