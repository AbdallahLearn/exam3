import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../component/Home'
import Login from '../component/Login'
import Signup from '../component/Signup'
import Details from '../component/Details'
import Error from '../component/Error'

const router = createBrowserRouter([
    {
        path:'',
        element: <Signup/>,
        errorElement:<Error/>
    },
    {
        path:'login',
        element: <Login/>
    },
    {
        path:'home',
        element:<Home/>
    },
    {

        path:'details/:id',
        element: <Details/>
    }
])

function Router() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Router
