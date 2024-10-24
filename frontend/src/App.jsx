import React, { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import { useNavigate } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Footer from './components/Footer'

const App = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false)
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
  useEffect(() => {
    if (token) {
      setIsLogin(true);
      navigate('/')
    }else{
      localStorage.setItem('token', true)
      setToken(true)
      setIsLogin(false);
    }
  }, [])
  
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar isLogin = {isLogin} setIsLogin={setIsLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login setIsLogin ={setIsLogin}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-profile' element={<MyProfile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App