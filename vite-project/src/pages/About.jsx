import React from "react";
import "../styles/About.css";
import sha from "../assets/image 111.png";
import res from "../assets/Rectangle 407.png";
function About() {
  return (
    <div className="about">
      <div className="aboutTop">
        <div className="top1">
          <img src={sha} alt="shawama" />
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
          </div>
        </div>
      </div>
      <div className="aboutBottom">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, modi
          accusantium! Quidem obcaecati aut impedit voluptates. Ullam fuga error
          consequatur ea, natus quibusdam nihil optio aut, alias, quod molestiae
          quas. Accusamus atque provident alias nisi ea perferendis illo
          sapiente inventore. Sint impedit, tempore ducimus velit distinctio
          temporibus porro quos aspernatur!
        </p>
      </div>
      <div>
        <img src={res} alt="" />
      </div>
    </div>
  );
}

export default About;
