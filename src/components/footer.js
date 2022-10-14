import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer">
        <div className="box_left">
          <img src="img/logo.png" alt="" />
          <p>
            Better data leads to more performance models. Performant models lead
            to faster deployment.
          </p>
        </div>

        <div className="box_right">
          <ul>
            <li>
                <NavLink to="#">PRODUCTS</NavLink>
            </li>
            <li>
                <NavLink to="#">SOLUTIONS</NavLink>
            </li>
            <li>
                <NavLink to="#">CUSTOMER</NavLink>
            </li>
            <li>
                <NavLink to="#">PRICING</NavLink>
            </li>
            <li>
                <NavLink to="#">RESOURCES</NavLink>
            </li>
          </ul>

          <div className="bottom">
            <p>© 2022 AI-MAN. All RIGHT RESERVED</p>
            <p>TERMS AND CONDITIONS</p>
            <p>PRIVACY POLICY</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
