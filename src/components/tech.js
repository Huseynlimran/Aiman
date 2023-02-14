import { NavLink, Route, Routes } from "react-router-dom";
import Trukahh from "./trukahh";
import Aselii from "./aselii";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Rilcuy from "./rilcuyy";
import Rilcuyy from "./rilcuyy";

const Tech = () => {
  const [animationParent] = useAutoAnimate();

  return (
    <section className="container">
      <div className="tech" ref={animationParent}>
        <div className="tech_tittle">
          <h1>OUR TECHNOLOGIES</h1>
          <img src="img/arrowBig.png" alt="" />
        </div>

        <div className="tech_nav">
          <ul>
            <li>
              <NavLink to="/rilcuyy" >
                RILLCUY
              </NavLink>
            </li>
            <li>
              <NavLink to="/trukahh">TRUKAHH</NavLink>
            </li>
            <li>
              <NavLink to="/aselii">ASELII</NavLink>
            </li>
            <li>
              <NavLink to="/kockgmg">KOCKGMG</NavLink>
            </li>
            <li>
              <NavLink to="/mdituru">MDITURU</NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/Rilcuyy" element={<Rilcuyy />} />
          <Route path="/" element={<Rilcuyy />} />
          <Route path="/Trukahh" element={<Trukahh />} />
          <Route path="/Aselii" element={<Aselii />} />
        </Routes>
        {/* <div className="tech_info">
          <div className="tech_text">
            <h1>
              RILLCUY <span> AI.</span>
            </h1>
            <p>
              Annotate large volumes of 3D sensor, image, and video data at high
              throughput. ML-powered pre-labeling and an automated quality
              assurance system ensure high quality annotations.
            </p>
            <ul>
              <li>
                <img src="img/accept.png" alt="" />
                Manage Your Datasets
              </li>
              <li>
                <img src="img/accept.png" alt="" />
                Automate Document Processing
              </li>
              <li>
                <img src="img/accept.png" alt="" />
                Scale Advanced Annotations
              </li>
            </ul>
            <button>
              LEARN MORE <img src="img/arrow-down-left.png" alt="" />
            </button>
          </div>
          <div className="tech_img">
            <img src="img/art4.png" alt="" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Tech;
