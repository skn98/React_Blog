import "./write.css"
import React from "react"; 
export default function Write() {
  return (
    <div className="write">
          <img className="writeImage" src="https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
        <form className="WriteForm">
            <div className="WriteFormGroup">
            <label htmlFor="fileInput">
            <i class="writeIcon fa-solid fa-plus"></i>
            </label>
               <input type="file" id="fileInput" className="inputstyle"/>
               <input type="text" placeholder="Title" className="Writeinput" autoFocus={true}/>
            </div>
            <div className="WriteFormGroup">
               <textarea placeholder="Type tour story...." type="text" className="WriteinputwriteText"></textarea>
            </div>
            <button className="writeSubmit">publish</button>

        </form>
    </div>
  )
}
