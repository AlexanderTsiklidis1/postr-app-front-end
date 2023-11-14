import React, { useEffect, useState } from "react";
import Post from "./Post";
const API = import.meta.env.VITE_BASE_URL;

function Posts() {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    fetch(`${API}/posts`) 
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON)
        setPosts(responseJSON.data.payload);
        setTotalPosts(responseJSON.data.payload.length)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="home-container">
      <h1>Total Posts: {totalPosts}</h1>
        <section>
            {posts.map((post) => {
                return <Post key={post.id} post={post} />
            })}
        </section>
    </div>
  );
}

export default Posts;
