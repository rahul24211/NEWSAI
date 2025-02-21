import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import '@mantine/core/styles.css';
import Reg from './pages/Reg';
import Prefrences from './components/Prefrences';
import Reduxt from './pages/reduxt';
import Loading from './pages/Loading';
// import Homepage from './pages/Homepage'
import { fetchProduct } from './redux/sclice/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'sonner';
import { Suspense } from 'react';
import { Loader } from 'lucide-react';

const Homepage = lazy(() =>
  import('./pages/Homepage')
)
import ProtectedRoutes from './components/ProtectedRoutes';











const App = () => {





  return (
    <div>


      <Navbar />
      <Toaster />
      <Suspense fallback={<div className='h-screen flex justify-center items-center'><Loader/></div>}>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<Homepage />} />
            <Route path='/Prefrences' element={<Prefrences />} />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Reg />} />
          <Route path='/reduxt' element={<Reduxt />} />
          <Route path='/Loading' element={<Loading />} />


        </Routes>
      </Suspense>

    </div>


  )
}

export default App

