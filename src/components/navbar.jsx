import "./navbar.css";
import HamburgerMenu from "./hamburger";
import happyCat from "../assets/Icon.png"
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={happyCat} className="catImg"></img>
      <div className="logo">NutriPal</div>

      <HamburgerMenu></HamburgerMenu>
    </nav>
  );
};

export default Navbar;