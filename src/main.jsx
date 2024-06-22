import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import './index.css'
import HomePage from './Pages/HomePage.jsx';
import Kashmir from './Pages/Kashmir.jsx';
import Jaisalmer from "./Pages/Jaisalmer.jsx"
import Dubai from "./Pages/Dubai.jsx" 
import AllTestimols from './components/AllTestimols.jsx';
import ContactUs from './components/ContactUs.jsx';
import NotFound from './components/NotFound.jsx'; // Import NotFound component

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<HomePage />} />
    <Route path='/asia/india/kashmir' element={<Kashmir/>}/>
    <Route path='/asia/india/jaisalmer' element={<Jaisalmer/>}/>
    <Route path='/asia/Dubai' element={<Dubai/>}/>
    <Route path='/testimonials' element={<AllTestimols/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='*' element={<NotFound />} />  {/* Add this line for the NotFound route */}
  </>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
