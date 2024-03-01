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

  



  return (
    <div className="App">
      <header className="App-header">
        <h1>This is the home page.</h1>
      </header>
      <NavBar/>
      <Outlet context={{ movies: movies, addNewMovie: addNewMovie}}/>
    </div>
  );
}

export default App;
