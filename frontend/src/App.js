import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import AddAnnouncement from './pages/AddAnnouncement';
import SignPage from './pages/SignPage';
import Login from './pages/Login'
import Profile from './pages/Profile';
import { useSelector } from 'react-redux'

const App = () => {
  const isLogin =  useSelector(i => i.auth.isLogin) || JSON.parse(localStorage.getItem('token'));

  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/property/:id' element={isLogin ? <PropertyDetails /> : <Navigate to='/login' />}/>
        <Route path='/add-announce' element={isLogin ? <AddAnnouncement /> : <Navigate to='/login' />}/>
        <Route path='/profile' element={isLogin ? <Profile /> : <Navigate to='/login' />}/>
        <Route path='/login' element={!isLogin ? <Login /> : <Navigate to='/' />}/>
        <Route path='/register' element={!isLogin ? <SignPage /> : <Navigate to='/' />}/>
      </Routes>
      <Footer />
    </div>
  )
};

export default App;
