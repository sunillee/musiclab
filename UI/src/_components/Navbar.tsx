import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar_layout">
      <div>Songs Database</div>
      <div className="link_layout">
        <Link to="/" className="link_layout">Home</Link>
        <Link to="/song" className="link_layout">Song</Link>
        <Link to="/songs" className="link_layout">Songs</Link>
      </div>
    </div>
  );
}

export default Navbar;
