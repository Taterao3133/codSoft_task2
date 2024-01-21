
import {Route, Routes, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'



function Router() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}  />
        <Route path='/home'  element={<Home/>}/>
        <Route path='/register'  element={<Register/>}/>

    </Routes>
  )
}

export default Router