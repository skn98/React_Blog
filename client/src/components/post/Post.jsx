import "./post.css"
import React from "react"; 

export default function Post() {
  return (
    <div className="post">
       <img className="postImg"
       src="https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
       />

    <div className="postInfo"> 
      <div className="postCats">
         <span className="postCat">Music</span>
         <span className="postCat">Life</span>
      </div>
       <span className="postTitle"> An image description is a written caption.
       </span>
        <hr/>
        <span className="postDate"> 1 hour ago</span>
      </div>
      <p className="postdes">
      An image description is a written caption that describes the essential
       information in an image. Image descriptions can define photos, graphics, gifs, and video 
       An image description is a written caption that describes the essential
       information in an image. Image descriptions can define photos, graphics, gifs, and video 
       An image description is a written caption that describes the essential
       information in an image. Image descriptions can define photos, graphics, gifs, and video 
       An image description is a written caption that describes the essential
       information in an image. Image descriptions can define photos, graphics, gifs, and video 
       An image description is a written caption that describes the essential
       information in an image. Image descriptions can define photos, graphics, gifs, and video 
      </p>
    </div>
  );
}
