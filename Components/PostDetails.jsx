import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function PostDetails() {
    const [post, setPost] = useState({});
    const { index } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      fetch(`${API}/posts/${index}`)
        .then((response) => response.json())
        .then((fetchedPost) => {
          setPost(fetchedPost);
        })
        .catch(() => navigate("/not-found"));
    }, [index, navigate]);

    const handleDelete = () => {
        const httpOptions = { method: "DELETE" };
    
        fetch(`${API}/posts/${index}`, httpOptions)
          .then((res) => {
            console.log(res);
            alert("Post was deleted successfully!");
            navigate('/posts');
          })
          .catch((err) => console.error(err));
      };

      return (
        <article className="home-container">
          <h3 className="welcome-heading">
            {post.username}
          </h3>
          <h5 className="app-heading">
            Post Message: {post.postMessage}
          </h5>
          <h6 className="app-heading">
            Post Picture: {post.post_pic}
          </h6>
          <p className="app-heading">
            Profile Picture: {post.profile_pic}
          </p>
          <div className="showNavigation">
            <div>
              {" "}
              <Link to={`/posts`}>
                <button className="button">Back</button>
              </Link>
            </div>
            <div>
              {" "}
              <Link to={`/posts/${index}/edit`}>
                <button className="button" style={{ padding: "10px" }}>Edit</button>
              </Link>
            </div>
            <div>
              {" "}
              <button onClick={handleDelete} className="button" style={{ padding: "10px" }}>Delete</button>
            </div>
          </div>
        </article>
      );
    }
    
    export default PostDetails;
    
