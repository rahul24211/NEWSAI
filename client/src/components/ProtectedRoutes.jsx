import React from 'react'
import { getCookies } from '../utils/utils'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

const authenticated = getCookies('isAuthenticated')

if (!authenticated) {

    return <Navigate to='/login'/>
}

return <Outlet/>
  
}

export default ProtectedRoutes
