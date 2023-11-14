import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function PostNewForm() {
    const [post, setPost] = useState({
        username: "",
        postMessage: "",
        post_pic: "",
        profile_pic: ""
    });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setPost({ ...post, [event.target.id]: event.target.value });
  };

  const addPost = () => {
    const httpOptions = {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch(`${API}/posts`, httpOptions)
      .then((res) => {
        console.log(res);
        alert(`${post.username}'s post was added to the database!`);
        navigate("/posts");
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost();
  };

  return (
    <div className="new-post-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Username</label>
        <input
          id="userName"
          type="text"
          value={post.username}
          onChange={handleTextChange}
          placeholder="Username"
          required
        />
        <label htmlFor="postMessage">Message of Post</label>
        <textarea
          id="postMessage"
          value={post.postMessage}
          placeholder="Message for the User's Post"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="postPicture">Picture of Post</label>
        <input
          id="profile_pic"
          type="text"
          value={post.post_pic}
          placeholder="Link to Picture for Post Content"
          onChange={handleTextChange}
        />
        <label htmlFor="profilePicture">Profile Picture</label>
        <input
          id="profile_pic"
          type="text"
          value={post.profile_pic}
          placeholder="Link to Your Profile Picture"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" className="submit-button" />
      </form>
      <Link to="/posts">
        <button className="button">Back to Posts</button>
      </Link>
    </div>
  );
}

export default PostNewForm;