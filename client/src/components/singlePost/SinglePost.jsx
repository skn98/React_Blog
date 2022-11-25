import "./singlePost.css"
import React from "react"; 

export default function Singlepost() {
  return (
    <div className="singlePost">
       <div className="singlePostWrapper" >
        <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="singlePostImg"/>
       </div>
       <h1 className="singlePostTitle"> This is the title of the image
        <div className="singlePostEdit"> 
        <i className="singlePosticon fa-regular fa-pen-to-square"></i>
        <i className="singlePosticon fa-solid fa-trash"></i>
        </div>
       </h1>
       <div className="SinglePostInfo" >
        <span className="SinglePostAuth">Author:<b> Senura</b></span>
        <span className="singlePostDate">1 hour ago </span>
       </div>
       <p className="singlepostDes">
        this description this description this description this description this description this description this description
        this description this description this description this description this description this description this description 
        this description this description this description this description this description this description this description
        this description this description this description this description this description this description this description
        this description this description this description this description this description this description this description this description
        this description this description this description this description this description this description this description
        
        this description this description this description this description this description this description this description
        this description this description this description this description this description this description this description this description
        this description this description this description this description this description this description this description
       
        this description this description this description this description this description this description this description
        this description this description this description this description this description this description this description this description
        this description this description this description this description this description this description this description
       
       </p>

    </div>
  )
}
