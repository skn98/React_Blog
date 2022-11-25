import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import React from "react"; 
export default function Settings() {
  return (
    <div className="settings">
    <div className="settingWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
           <label > Profile picture</label>
           <div className="settingsPropic">
              <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="" />
              <label htmlFor="fileInput">
              <i className="settingsProfileIcon fa-solid fa-circle-user"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}}/>
           </div>
           <label > Username</label>
           <input type="text" placeholder="senura" />
           <label > Email</label>
           <input type="email" placeholder="senura@gmail.com" />
           <label >Password </label>
           <input type="password" />
           <button className="settingsSubmit">Update</button>
        </form>
    </div>
    <Sidebar />
    </div>
  )
}
