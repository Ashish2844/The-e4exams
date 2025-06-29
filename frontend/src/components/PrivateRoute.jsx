import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const  [isAuth,setIsAuth]=useState(null);

    useEffect(()=>{
        const checkAuth=async()=>{
            try {
                const res=await fetch(`${import.meta.env.VITE_API_URL}/api/admin/centers`,{
                    credentials:'include'
                })

                setIsAuth(res.ok)
            } catch (error) {
                setIsAuth(false)
            }
        }

        checkAuth();
    },[])
if(isAuth===null) return <div>Loading...</div>
return isAuth ? children : <Navigate to="/admin-login"/>
}

export default PrivateRoute
