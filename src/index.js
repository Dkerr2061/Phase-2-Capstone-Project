import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './pages/ErrorPage';
import Home from './components/Home';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieList from './components/MovieList';
import NewMovieForm from './pages/NewMovieForm';
import AddToFavorite from './components/AddToFavorite';


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
        element: <AddToFavorite/>
      },
      {
        path: "/add_movies",
        element: <NewMovieForm/>
      },
      {
        path: "/cart",
        element: <h1>Items in cart go here</h1>,
        children: [
          {
            path: "/cart",
            element: <h1>Checkout message goes here!</h1>
          }
        ]
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
