import axios from 'axios'
import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './login.css'

function Login() {
    const [ credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    })
    const navigate = useNavigate()

    const {error, loading, dispatch} = useContext(AuthContext)
    const handleChange = (e) => {
        setCredentials(prev=>({...prev, [e.target.id]: e.target.value}))
    }
    const handleLogin = async(e) => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try{
          console.log("Hello from Login frontend")
          console.log("credentials", credentials)
            const res = await axios.post("/auth/login", credentials)
            dispatch({type: "LOGIN_SUCCESS", payload: res.data})
            navigate("/")
        } catch(err){
          console.log("Error from Login frontend")
            dispatch({type: "LOGIN_FAILURE", payload: err.response.data})
        }
    }
   

  return (
    <div>
      <div className="login">
        <div className="loginCont">
            <input type="text" placeholder='username' id="username" onChange= {handleChange} className="lInput" />
            <input type="text" placeholder='password' id="password" onChange= {handleChange} className="lInput" />
            <button disabled= {loading} onClick={handleLogin}className="lButton">Login</button>
            {error && <span>{error.message}</span>}
        </div>
      </div>
    </div>
  )
}

export default Login
