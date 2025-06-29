import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const navigate=useNavigate()
    const host=import.meta.env.VITE_API_URL

    const handleSubmit=async(e)=>{
        e.preventDefault();

        const res=await fetch(`${host}/api/admin/login`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            credentials:'include', // important for cookies
            body:JSON.stringify({email,password})
        })

        if(res.ok){
            navigate('/admin') 
        }
        else{
            alert("invalid admin credentials")
        }
    }


  return (
 <div className="container mt-5 admin">
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
  )
}

export default AdminLogin
