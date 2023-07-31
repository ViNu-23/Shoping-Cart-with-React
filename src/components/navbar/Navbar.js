import { BsCart4,BsFillHouseHeartFill,BsGlobeAmericas } from "react-icons/bs";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
            <NavLink to="#">< BsGlobeAmericas /> The REAL Store</NavLink>
      <NavLink to="/"> <BsFillHouseHeartFill />   HOME</NavLink>
      <NavLink to="/cart"> <BsCart4 />  CART</NavLink>
    </div>
  );
};

export default Navbar;
