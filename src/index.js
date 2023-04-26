import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PokemonDetails from './pages/PokemonDetails';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pokemon/:id",
    element: <PokemonDetails />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} path={"/"}/>
  </React.StrictMode>
);
