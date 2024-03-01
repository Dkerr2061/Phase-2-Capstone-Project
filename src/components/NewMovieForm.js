import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function NewMovieForm(){

  const [ formData, setFormData ] = useState({
    name: "",
    year: "",
    actor: "",
    director: "",
    genre: "",
    description: "",
    image: ""
  })

  const navigate = useNavigate()
  const {addNewMovie} = useOutletContext()

  function handleNewMovieSubmit(event) {
    event.preventDefault()
    addNewMovie(formData)

    setFormData({
      name: "",
      year: "",
      actor: "",
      director: "",
      genre: "",
      description: "",
      image: ""
    })
    navigate("/")
    
  }

  function handleNewMovieFormData(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
  }


  return(
   
    <form onSubmit={handleNewMovieSubmit}>
      <label>Movie Name: </label>
      <input 
      type="text" 
      name="name" 
      placeholder="Add Movie Name" 
      value={formData.name} 
      onChange={handleNewMovieFormData} 
      required
      />
      <br/>
      <label>Release Year: </label>
      <input 
      type="number" 
      name="year" 
      placeholder="Add Movie Year" 
      value={formData.year} 
      onChange={handleNewMovieFormData} 
      required
      />
      <br/>
      <label>Actors: </label>
      <input 
      type="text" 
      name="actor" 
      placeholder="Add Actor" 
      value={formData.actor} 
      onChange={handleNewMovieFormData} 
      required
      />
      <br/>
      <label>Director: </label>
      <input 
      type="text" 
      name="director" 
      placeholder="Add Director" 
      value={formData.director} 
      onChange={handleNewMovieFormData} 
      required
      />
      <br/>
      <label>Genre: </label>
      <input 
      type="text" 
      name="genre" 
      placeholder="Add Genre" 
      value={formData.genre} 
      onChange={handleNewMovieFormData} 
      required
      />
      <br/>
      <label>Description: </label>
      <input 
      type="text-content" 
      name="description" 
      placeholder="Add Description" 
      value={formData.description} 
      onChange={handleNewMovieFormData} 
      required
      />
      <br/>
      <label>Movie Poster: </label>
      <input 
      type="text" 
      name="image" 
      placeholder="Add Movie Poster" 
      value={formData.image} 
      onChange={handleNewMovieFormData} 
      required
      />
      <br/>
      <button type="submit">Add Movie</button>
    </form>
    
  
  )
}

export default NewMovieForm;