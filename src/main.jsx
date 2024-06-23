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
import LehLaddakh from './Pages/LehLaddakh.jsx';
import Udaypur from './Pages/Udaypur.jsx';
import Manali from "./Pages/Manali.jsx"
import DwarkaAndSomnath from './Pages/DwarkaAndSomnath.jsx';
import Bali from './Pages/Bali.jsx';
import Thailand from "./Pages/Thailand.jsx"

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<HomePage />} />
    <Route path='/asia/india/kashmir' element={<Kashmir />} />
    <Route path='/asia/india/jaisalmer' element={<Jaisalmer />} />
    <Route path='/asia/india/lehladdakh' element={<LehLaddakh />} />
    <Route path='/asia/india/udaipur' element={<Udaypur />} />
    <Route path='/asia/india/dwarkaandsomnath' element={<DwarkaAndSomnath/>} />
    <Route path='/asia/india/goa' element={<DwarkaAndSomnath/>} />
    <Route path='/asia/india/manali' element={<Manali/>} />
    <Route path='/asia/india/bali' element={<Bali/>} />
    <Route path='/asia/india/thailand' element={<Thailand/>} />
    <Route path='/asia/Dubai' element={<Dubai />} />
    <Route path='/testimonials' element={<AllTestimols />} />

    <Route path='/contact' element={<ContactUs />} />

    <Route path='*' element={<NotFound />} />
  </>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
