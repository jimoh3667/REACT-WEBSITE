import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import salad from "../assets/salad.png";
function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menu1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat
          porro architecto neque fugiat enim?Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Molestiae dolorum illum vitae eos, ea
          incidunt consectetur in iste debitis facilis.
        </p>
      </div>
      <div className="buttonm">
        <button className="buttonmall">all</button>
        <button className="buttonmr">breakfast</button>
        <button className="buttonmr">dishes</button>
        <button className="buttonmr">drinks</button>
        <button className="buttonmr">deserts</button>
      </div>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              text={menuItem.text}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
