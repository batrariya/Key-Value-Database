import React from "react";
import "./Navbar.css"; // Link to the CSS file
import { SaveAll } from "lucide-react"; // or use an image/logo instead

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <SaveAll size={45} className="logo-icon" />
        <span className="brand-name">SnapNStore</span>
      </div>
    </header>
  );
};

export default Navbar;
