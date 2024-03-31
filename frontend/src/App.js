import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import AddAnnouncement from './pages/AddAnnouncement';
import SignPage from './pages/SignPage';
import Login from './pages/Login'
import Profile from './pages/Profile';


const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/property/:id' element={<PropertyDetails />}/>
        <Route path='/add-announce' element={<AddAnnouncement />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<SignPage />}/>
      </Routes>
      <Footer />
    </div>
  )
};

export default App;
