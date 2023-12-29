import React, { useState } from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import Register from "../register/register";

const Login = () => {

    
    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


  return (
    <div className="login">
      <h1>Login</h1>
      <input type="text" name="email"  value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
      <input
        type="password"
        name="password" 
        value={user.password} onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
      <div className="button"><Link to="/login" style={{color:"white" ,textDecoration:"none"}}>Login</Link></div>
      <div>or</div>
      <div className="button"> <Link to="/register" style={{color:"white" ,textDecoration:"none"}}>Register</Link></div>
    </div>
  );
};

export default Login;
