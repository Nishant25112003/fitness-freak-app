import { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import "../assets/styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/">SPRYO</Link>
      </h1>
      <div className="links">
        <ul className="items">
          <li>
            <Link
              to="/classes"
              className="classes-items"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Classes
            </Link>
          </li>
          {isOpen && <DropDown />}

          <li>
            <Link to="/team">Team</Link> {/* Change anchor to Link */}
          </li>
          <li>
            <Link to="/about">About Us</Link> {/* Change anchor to Link */}
          </li>
          <li>
            <Link to="/gallery">Gallery</Link> {/* Change anchor to Link */}
          </li>
        </ul>
      </div>
      <button className="contact-us">Contact Us</button>
    </nav>
  );
}

export default Navbar;
