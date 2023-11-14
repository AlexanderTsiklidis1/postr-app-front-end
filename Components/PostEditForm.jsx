import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function PostEditForm() {
    const {index} = useParams();
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

    // const handleCheckboxChange = () => {
    //     setPost({ ...post, });
    //   };

    useEffect(() => {
        fetch(`${API}/posts/${index}`)
          .then((response) => response.json())
          .then((fetchedpost) => {
            setPost(fetchedpost);
          })
          .catch(() => navigate("/not-found"));
      }, [index, navigate]);

      const updatePost = () => {
        const httpOptions = {
          method: "PUT",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json",
          },
        };
    
        fetch(`${API}/posts/${index}`, httpOptions)
          .then(() => {
            alert(`${post.name} has been updated!`);
            navigate(`/posts/${index}`);
          })
          .catch((err) => console.error(err));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        updatePost();
      };

      return (
        <div className="Edit">
          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Username</label>
            <input
              id="username"
              type="text"
              value={post.username}
              onChange={handleTextChange}
              placeholder="Username of person posting"
              required
            />
            <label htmlFor="message">Post Message</label>
            <input
              id="postMessage"
              type="text"
              value={post.postMessage}
              onChange={handleTextChange}
              placeholder="Message for the Post"
              required
            />
            <label htmlFor="album">Album</label>
            <input
              id="album"
              type="text"
              value={song.album}
              placeholder="Name of the album"
              onChange={handleTextChange}
            />
            <label htmlFor="postPicture">Post Picture</label>
            <input
              id="postPicture"
              type="text"
              value={post.post_pic}
              placeholder="Link to picture for Post"
              onChange={handleTextChange}
            />
            <label htmlFor="profilePic">Profile Picture</label>
            <input
              id="is_favorite"
              type="checkbox"
              checked={post.profile_pic}
              placeholder="Link to a profile picture of the user"
              onChange={handleTextChange}
            />
            <br />
            <input type="submit" className="submit-button" />
          </form>
          <Link to={`/posts/${index}`}>
            <button className="button">Go Back</button>
          </Link>
        </div>
      );
    }
    
export default PostEditForm;