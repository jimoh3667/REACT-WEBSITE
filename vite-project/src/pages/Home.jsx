import React from "react";
import "../styles/home.css";
import image1 from "../assets/Group 1.jpg";
import res from "../assets/image 111.png";
import salad from "../assets/salad.png";
import vector1 from "../assets/Vector (1).png";
import vector2 from "../assets/Vector (2).png";
import vector3 from "../assets/Vector (3).png";
import vector4 from "../assets/Group.png";
import pic1 from "../assets/Rectangle 1.png";
import pic2 from "../assets/Rectangle 1 (1).png";
import pic3 from "../assets/Rectangle 1 (2).png";
import pic4 from "../assets/Rectangle 1 (3).png";
function Home() {
  return (
    <>
      <div className="home">
        <div className="headerContainer">
          <div className="first1">
            <div className="first1_text">
              <h1>
                BEST FOOD FOR <br />
                YOUR <span className="taste">TASTE</span>!
              </h1>
              <div className="homep">
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Lorem ipsum dolor sit amet consectetur,</p>
              </div>
              <button className="button">Book A Table</button>
              <button className="button1"> Explore Menu</button>
            </div>
            <div className="first1_image">
              <img src={image1} />
            </div>
          </div>
        </div>
        <div className="boxmenu">
          <h3>Browse Our menu</h3>
          <div className="boxchild">
            <div className="boxp">
              <img src={vector4} />
              <h5>Breakfast</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                ullam quaerat tempore officia.
              </p>
              <p></p>
            </div>
            <div className="boxp">
              <img src={vector3} />
              <h5>Main Dishes</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                ullam quaerat tempore officia.
              </p>
              <p></p>
            </div>
            <div className="boxp">
              <img src={vector1} />
              <h5>Drinks</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                ullam quaerat tempore officia.
              </p>
              <p></p>
            </div>
            <div className="boxp">
              <img src={vector2} />
              <h5>Desserts</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                ullam quaerat tempore officia.
              </p>
              <p></p>
            </div>
          </div>
        </div>

        <div className="top1">
          <img src={res} alt="" />
          <div>
            <h3>
              We Provide Healthy Food <br />
              For Your Family
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto, Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Odit, fugiat!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              quibusdam, eligendi aliquid error deserunt mollitia, dolorum
              facilis iure odio nisi minus quasi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              sit placeat quas ducimus illo quod, dicta officia at, earum
              repellat sint sequi!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo
              architecto eos corporis culpa recusandae eligendi minima vel, quis
              alias, quisquam illo!
            </p>
            <p className="mao">More About Us</p>
          </div>
        </div>
        <div className="eventmenu">
          <h3>
            We Also Offer Unique Services for <br />
            Your Events
          </h3>
          <div className="eventchild">
            <div className="eventp">
              <div className="image">
                <img src={pic1} />
              </div>
              <h5>Catering</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                ullam quaerat tempore officia.
              </p>
            </div>
            <div className="eventp">
              <img src={pic2} />
              <h5>Birthday</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                ullam quaerat tempore officia.
              </p>
            </div>
            <div className="eventp">
              <img src={pic3} />
              <h5>Wedding</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                ullam quaerat tempore officia.
              </p>
            </div>
            <div className="eventp">
              <img src={pic4} />
              <h5>Events</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                ullam quaerat tempore officia.
              </p>
            </div>
          </div>
        </div>
        <div>{<img src={salad} alt="" />}</div>
      </div>
    </>
  );
}
export default Home;
