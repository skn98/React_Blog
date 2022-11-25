import { Link } from "react-router-dom"
import "./login.css"
import React from "react"; 

export default function Login() {
  return (
    <div className="login">
    <span className="loginTitle">Login</span>
      <form  className="loginForm">
         <label>Email</label>
         <input type="text" className="loginInput" placeholder="Enter your email..."/>   
         <label>Password</label>
         <input type="password" className="loginInput" placeholder="Enter your password..."/>   
         <button className="loginBtn"> Login</button>
         <label className="reglabel">Don't have an accout? please register</label>
         
      </form>
      <button className="registerbtn"> 
      <Link  className="link" to="/register">Register</Link>
      </button>
    </div>
  )
}
