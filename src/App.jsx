
import { Children, useState } from 'react'
import './App.css'
import About from './components/About/About'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import LayOut from './components/LayOut/LayOut'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import NotFound from './components/NotFound/NotFound'


function App() {

  const routes = createBrowserRouter([
      {path:"",element: <LayOut/> , children: [
        {index:true,element: <Home/>},
        {path:"home",element: <Home/>},
        {path:"about",element: <About/>},
        {path:"portfolio",element: <Portfolio/>},
        {path:"contact",element: <Contact/>},
        {path:"*",element: <NotFound/>}
      ]}
  
  
    ])
  


  return (
    <RouterProvider  router={routes}>

      
    </RouterProvider >
  )
}

export default App
