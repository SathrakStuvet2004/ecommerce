import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping, faUser, faBox } from "@fortawesome/free-solid-svg-icons";

import './NavBar.css'
import { Link, } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">

      <div className="homeIcon">
        <Link style={{ color: "inherit", textDecoration: "none" }} to="/Home">
          <FontAwesomeIcon icon={faHouse} />
           <p>Home</p>
        </Link>
      </div>

      <div>
        <input type="text" placeholder="SEARCH" className="searchBar" />
      </div>

      <div className="cartIcon">
        <Link style={{ color: "inherit", textDecoration: "none" }} to="/Cart">
          <FontAwesomeIcon icon={faCartShopping} />
          <span className="badge">3</span>
          <p>Cart</p>
        </Link>
      </div>

      <div className="OrdersIcon">
        <Link style={{ color: "inherit", textDecoration: "none" }} to="/Orders">
        <FontAwesomeIcon icon={faBox} />
        <p>Orders</p>
        </Link>
      </div>

      <div className="userIcon">
        <Link style={{ color: "inherit", textDecoration: "none" }}  to="/User">
        <FontAwesomeIcon icon={faUser} />
        <p>User</p>
        </Link>
      </div>

    </div>
  );
}