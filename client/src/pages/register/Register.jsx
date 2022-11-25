import { Link } from "react-router-dom"
import "./register.css"
import React from "react"; 

export default function Register() {
  return (
    <div className="register">
    <span className="registerTitle">Register</span>
      <form  className="registerForm">
      <label>User name</label>
         <input type="text" className="registerInput" placeholder="Enter your Username..."/>  
         <label>Email</label>
         <input type="text" className="registerInput" placeholder="Enter your email..."/>   
         <label>Password</label>
         <input type="password" className="registerInput" placeholder="Enter your password..."/>   
         <button className="registerBtn"> Register</button> 
      </form>
      <button className="registerLoginbtn"> 
      <Link className="link" to="/login">Login</Link>
      </button>
    </div>
  )
}
