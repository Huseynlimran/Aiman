import { NavLink, Route, Routes } from "react-router-dom";
import Trukahh from "./trukahh";
import Aselii from "./aselii";
import { useAutoAnimate } from "@formkit/auto-animate/react";
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
              <NavLink to="/rilcuyy">RILLCUY</NavLink>
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
          <Route path="/" element={<Rilcuyy />} />
          <Route path="/Rilcuyy" element={<Rilcuyy />} />
          <Route path="/Trukahh" element={<Trukahh />} />
          <Route path="/Aselii" element={<Aselii />} />
        </Routes>
      </div>
    </section>
  );
};

export default Tech;
