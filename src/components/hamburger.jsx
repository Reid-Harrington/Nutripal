import { useState } from 'react';
import './hamburger.css'; 
import hamburger from "../assets/HamburgerIcon.png"
import cross from "../assets/CrossIcon.png"
const HamburgerMenu = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
      <div className="hamburger-container">
        <button onClick={() => setNavOpen(!navOpen)} className="menu-button">
          {navOpen ? (
            <img src={cross} alt="Close Menu" className="icon" />
          ) : (
            <img src={hamburger} alt="Open Menu" className="icon" />
          )}
        </button>
  
        {navOpen && (
          <div className="menu">
            <a href="/">Home 🏠</a>
            <a href="/Scanner">Scanner 📷</a>
            <a href="/Progress">Progress 🏋️</a>
            <a href="/">About 📝</a>
          </div>
        )}
      </div>
    )
  };
  
  export default HamburgerMenu;