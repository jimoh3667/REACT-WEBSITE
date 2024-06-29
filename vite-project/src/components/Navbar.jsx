import React from "react";
import Logo from "../assets/japanese-food.jpg";
import icon from "../assets/Icon.png";
import { Link } from "react-router-dom";
import style from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.sub_nav}>
        <div className={style.leftside}>
          <div className={style.bliss}>
            <img src={Logo} />
            <h3>BRISTO BLISS</h3>
          </div>
        </div>
        <div className={style.center}>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contactnp">Contact</Link>
        </div>
        <div className={style.rightside}>
          <img src={icon} alt="" />
          (414) 857-0107
        </div>
      </div>
    </div>
  );
}

export default Navbar;
