import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import '@mantine/core/styles.css';
import Reg from './pages/Reg';
import Prefrences from './components/Prefrences';
import Reduxt from './pages/reduxt';
import Loading from './pages/Loading';
import { fetchProduct } from './redux/sclice/ProductSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';






const App = () => {

const dispath = useDispatch()

const {loading,product} = useSelector((state)=>state.product)

console.log(loading,product);



useEffect(()=>{

dispath(fetchProduct())


},[])


  return (
    <div>
      <Navbar />
      <Prefrences/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Reg/>} />
        <Route path='/reduxt' element={<Reduxt/>} />
        <Route path='/Loading' element={<Loading/>} />
       
        
      </Routes>

    </div>


  )
}

export default App

