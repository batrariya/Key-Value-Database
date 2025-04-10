import React from "react";
import "./Navbar.css"; 
import { SaveAll } from "lucide-react"; 

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
