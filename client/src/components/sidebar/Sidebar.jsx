import "./sidebar.css"
import React from "react"; 

export default function Sidebar() {
  return (
    <div className="sidebar">
       <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img className="aboutimg" src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  />
          <p>
            I am able to handle multiple tasks on a daily basis.I use a creative approach to problem solve.I am a dependable person who is great at time management.I am always energetic and eager to learn new skills.
            I have experience working as part of a team and individually.
            </p>
       </div>
       <div className="sidebarItem"></div>
       <span className="sidebarTitle">CATEGORIES</span>
       <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
       </ul>
       <div className="sidebarItem">
       <span className="sidebarTitle">FOLLOW  US</span>
        <div className="sidebarSocial">
           <i className="sidebarIcon fa-brands fa-facebook"></i>
           <i className="sidebarIcon fa-brands fa-twitter"></i>
           <i className="sidebarIcon fa-brands fa-square-instagram"></i>
           <i className="sidebarIcon fa-brands fa-pinterest"></i>
        </div>
       </div>
    </div>
      
  );
}
