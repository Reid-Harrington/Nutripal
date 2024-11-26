import "./navbar.css";
import HamburgerMenu from "./hamburger";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">NutriPal</div>
      <HamburgerMenu></HamburgerMenu>
    </nav>
  );
};

export default Navbar;