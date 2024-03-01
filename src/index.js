import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieList from './components/MovieList';
import NewMovieForm from './components/NewMovieForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <MovieList/>
      },
      {
        path: "/favorite_movies",
        element: <h1>Favorite movies go here</h1>
      },
      {
        path: "/add_movies",
        element: <NewMovieForm/>
      },
      {
        path: "/suggestions",
        element: <h1>Suggestions go here</h1>
      },
      {
        path: "/cart",
        element: <h1>Items in cart go here</h1>
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
