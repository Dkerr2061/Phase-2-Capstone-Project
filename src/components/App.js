import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {
  const [ movies, setMovies ] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/movieList')
      .then(res => res.json())
      .then(movieData => setMovies(movieData))
  }, [])

  console.log(movies)



  return (
    <div className="App">
      <header className="App-header">
        <h1>This is the home page.</h1>
      </header>
      <Outlet/>
    </div>
  );
}

export default App;
