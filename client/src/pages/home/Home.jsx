import "./home.css";
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import React from "react"; 
import axios from "axios";
// import { reset } from "nodemon";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      console.log(res.data)
    }
    fetchPosts();
  }, []);
  return (
   
    <>
      <Header/>
    <div className='home'>
         <Posts posts={posts}/>
        <Sidebar/>
    </div>
    </>
  );
}

