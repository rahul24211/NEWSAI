import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import '@mantine/core/styles.css';



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login/>} />
      </Routes>

    </div>


  )
}

export default App
