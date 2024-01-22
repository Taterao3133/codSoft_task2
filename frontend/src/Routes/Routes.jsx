
import {Route, Routes, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import JobapplyPage from '../pages/JobapplyPage'
import CondidateProfile from '../components/user_profiles/CondidateProfile'



function Router() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}  />
        <Route path='/home'  element={<Home/>}/>
        <Route path='/register'  element={<Register/>}/>
        <Route path='/job_apply' element={<JobapplyPage/>}/>
        <Route path='/S_profile' element={<CondidateProfile/>}/>

    </Routes>
  )
}

export default Router