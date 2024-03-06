import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './pages/ErrorPage';
import Home from './components/Home';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewMovieForm from './pages/NewMovieForm';
import FavoriteList from './components/FavoriteList';
import MovieDetails from './pages/MovieDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/favorite_movies",
        element: <FavoriteList/>
      },
      {
        path: "/add_movies",
        element: <NewMovieForm/>
      },
      {
        path: "/profile/:id",
        element: <MovieDetails/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
