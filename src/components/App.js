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
        'Content-Type': 'Application/JSON',
        "Accept": "application/json"
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

  function updateMovie(id, dataToUpdate) {
    fetch(`http://localhost:3000/movieList/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/JSON",
        "Accept": "application/json"
      },
      body: JSON.stringify(dataToUpdate)
    })
      .then(res => res.json())
      .then(newData => setMovies(movies => movies.map(movie => {
        if(movie.id === id) {
          return newData
        } else {
          return movie
        }
      })))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="website-name">FlixFix Junction</h1>
      </header>
      <NavBar/>
      <Outlet 
      context={{ 
        movies: movies, 
        addNewMovie: addNewMovie, 
        deleteMovie: deleteMovie,
        updateMovie: updateMovie
      }}/>
    </div>
  );
}

export default App;
