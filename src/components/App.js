import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import Home from "./Home";


function App() {
  const [ movies, setMovies ] = useState([])
  const [ searchText, setSearchText ] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/movieList')
      .then(res => res.json())
      .then(movieData => setMovies(movieData))
  }, [])


  const filteredMovies = movies.filter(movie => {
    if( searchText === '') {
      return true
    } else {
      return movie.name.toLowerCase().includes(searchText.toLowerCase()) || 
      movie.actor.toLowerCase().includes(searchText.toLowerCase()) ||
      movie.director.toLowerCase().includes(searchText.toLowerCase())
    }
  })

  function onSearchText(event) {
    setSearchText(event.target.value)
  }


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
        <h1 className="website-name">Movie Buster!</h1>
      </header>
      <NavBar/>
      <Search onSearchText={onSearchText} searchText={searchText}/>
      <Outlet context={{ movies: filteredMovies, addNewMovie: addNewMovie}}/>
    </div>
  );
}

export default App;
