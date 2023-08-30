import React from 'react'
import { useLocation } from 'react-router-dom'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'

const Routes = () =>{
    const {pathname} = useLocation();
    

    React.useEffect(()=>{
        window.scrollTo(0,0)
    },[pathname])

    const isUserLoggedIn = localStorage.getItem('username') ? true : false

    return isUserLoggedIn ? <PublicRoutes/> : <PrivateRoutes/>
}

export default Routes