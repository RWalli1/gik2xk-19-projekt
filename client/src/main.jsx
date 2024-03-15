import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ProductEdit from './views/ProductEdit.jsx';
import Products from './views/Products.jsx';
import ProductDetails from './views/ProductDetails.jsx';
import Home from './views/Home.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products/new',
        element: <ProductEdit />
      },
      {
        path: '/products/',
        element: <Products />
      },
      ,
      {
        path: '/products/1',
        element: <ProductDetails />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
