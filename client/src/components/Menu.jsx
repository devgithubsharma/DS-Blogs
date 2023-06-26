import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Menu(props) {
  const [posts, setPosts] = useState([]);
  const {cat} = props;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://ds-blogs.onrender.com/api/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  
 
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post?.img}`} alt="" />
          <h2 ><Link style={{color:"#136a8a",textDecoration:"none"}} to={`https://ds-blogs.onrender.com/api/post/${post.id}`}>{post.title}</Link></h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

