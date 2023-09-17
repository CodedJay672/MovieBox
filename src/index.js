import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
 } from 'react-router-dom';
 import Root from './routes/Root';
import ErrorPage from './Error/ErrorPage';
import MovieDetails from './MovieCard/MovieDetails';
import { loader as rootLoader } from './routes/Root';
import { loader as detailsLoader } from './MovieCard/MovieDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
  },
  {
    path: "/movies",
    element: <MovieDetails />,
    loader: detailsLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movies/:id",
    element: <MovieDetails />,
    errorElement: <ErrorPage />,
    loader: detailsLoader,
  }
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

