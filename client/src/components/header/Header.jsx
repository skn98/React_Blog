import './header.css'
import React from "react"; 

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
        <span className='headerTitleLg'>Blog</span>
            <span className='headerTitleSm'> Blog for share your stories..</span>
         
        </div>
   
        <img className='headerImgage' 
        src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&w=600" 
        alt=""
       />
       </div>
         
 );
}


