import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import '@mantine/core/styles.css';
import Reg from './pages/Reg';
import Prefrences from './components/Prefrences';
// import Homepage from './pages/Homepage'
import { Toaster } from 'sonner';
import { Suspense } from 'react';
import Footer from './components/Footer';


const Homepage = lazy(() =>
  import('./pages/Homepage')
)

const Profile = lazy(() => import('./pages/Profile'))
import ProtectedRoutes from './components/ProtectedRoutes';
import LoadingSpinner from './components/LoadingSpinner';
import PreferencesProtectetRoute from './components/PreferencesProtectetRoute';
import About from './pages/About';











const App = () => {





  return (
    <div>


      <Navbar />
      <Toaster />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<Homepage />} />
            <Route path='/profile' element={<Profile />} />
            <Route element={<PreferencesProtectetRoute />}>
              <Route path='/Prefrences' element={<Prefrences />} />
            </Route>
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Reg />} />



        </Routes>
      </Suspense>
      <Footer />
    </div>


  )
}

export default App

