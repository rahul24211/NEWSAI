import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import '@mantine/core/styles.css';
import Reg from './pages/Reg';



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Reg/>} />
      </Routes>

    </div>


  )
}

export default App
