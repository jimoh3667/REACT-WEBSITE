import React from "react";
import Logo from "../assets/japanese-food.png";
import "../styles/footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="fot2">
        <div className="qq">
          <div className="bliss">
            <img src={Logo} /> <h3>BRISTO BLISS</h3>
          </div>
          <div className="textFooter">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores{" "}
            <br />
            corporis sit temporibus quo maxime dolore assumenda nisi totam quae{" "}
            <br />
            rerum officia, porro id recusandae soluta.
          </div>
          <div className="f2">
            <div>
              <h4>Home</h4>
              <li>About</li>
              <li>Service</li>
              <li>Price</li>
              <li>Blog</li>
            </div>
            <div>
              <h4>Menu</h4>
              <li>Breakfast</li>
              <li>Lunch</li>
              <li>Dessert</li>
              <li>Dinner</li>
            </div>
            <div>
              <h4>Socials</h4>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </div>
          </div>
        </div>
        <div className="inputwithbutton">
          <input type="text" placeholder="Enter your email" />
          <button>Subcribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
