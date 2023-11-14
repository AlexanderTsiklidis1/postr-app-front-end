import React from "react";
import { Link } from "react-router-dom";

function Post({ post, index }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className="card">
                <div className="card-header">
                    <img className="profile_pic" src={post.profile_pic ? post.profile_pic : "src/assets/default_profile_pic.jpeg"}/>
                    <span className="user_name">{post.username}</span>
                </div>
                <div className="card-body">
                    {post.post_pic ? (<img className="card-img-top" src={post.post_pic} />) : null}
                    <p class="card-text">{post.postMessage}</p>
                </div>
            </div>
        </Link>

    );
}

export default Post;