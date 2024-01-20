import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'



function Router() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}  />
        <Route path='/home'  element={<Home/>}/>
        <Route path='/login'  element={<Login/>}/>

    </Routes>
  )
}

export default Router