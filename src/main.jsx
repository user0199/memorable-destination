import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import HomePage from './Pages/HomePage.jsx';
import Kashmir from './Pages/Kashmir.jsx';
import Jaisalmer from "./Pages/Jaisalmer.jsx"
import Dubai from "./Pages/Dubai.jsx" 

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<HomePage />} />
    <Route path='/asia/india/kashmir' element={<Kashmir/>}/>
    <Route path="asia/india/jaisalmer" element={<Jaisalmer/>}/>
    <Route path="asia/Dubai" element={<Dubai/>}/>
    
  </>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
