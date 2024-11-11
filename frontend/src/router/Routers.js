import React from 'react'
import{ Routes, Route, Navigate} from 'react-router-dom'

import Home from './../pages/Home'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'
import ThankYou from '../pages/ThankYou'
    
function Routers() {
  return (
      <Routes>
          <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/tours' element={<Tours/>} />
            <Route path='/tours/:id' element={<TourDetails/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/thank-you' element={<ThankYou/>} />
            <Route path='/tours/search' element={<SearchResultList/>} />
    </Routes>
  )
}

export default Routers
//routers are essential for creating single-page applications (SPAs)
// that feel like traditional multi - page applications.
//react-router, allows you to define and manage navigation paths 
//within your app without actually reloading the whole page. 
