import React from 'react';

function SidebarRight() {
  return (
    <aside className="sidebar-right">
      <h2>Featured Content</h2>
      <div className="featured-post">
        <img src="https://imageurl.com/featured-post-image.jpg" alt="Featured Post" />
        <p>This is a featured post. Check it out!</p>
      </div>

      <div className="advertisement">
        <h3>Advertisement</h3>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <img src="https://imageurl.com/advertisement-image.jpg" alt="Advertisement" />
        </a>
      </div>
    </aside>
  );
}

export default SidebarRight;

