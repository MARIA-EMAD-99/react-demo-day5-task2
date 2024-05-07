import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Products from './Products';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';

import Movies from './Movies';
import About from './about';


export default function App() {

  const router = createBrowserRouter([
    {
      path: '', element: <Layout />, errorElement: <NotFound/>, children: [
        

        {
          path:"/home",
          element: <Home />,
        },
        {
          
          path: "/products",
          element: <Products />,
       
         
        },
       

        {
          path: "/login",
          element: (
           
              <Login />
           
          ),
        },
        {
          path: "/movies",
          element: <Movies />,
          // lazy: () => import("./routes/Contact"),
        },

        {path: "/productDetails/:id",
        element: <ProtectedRoute> <ProductDetails /> </ProtectedRoute>
      },


        {
          path: "/about",
          element: <About />,
        },
        
        
      


      ]
    }
  ])

  return (
    <>
    
  
        <RouterProvider router={router}></RouterProvider>

    </>
  )
}
