import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping, faUser, faBox } from "@fortawesome/free-solid-svg-icons";

import './NavBar.css'
import { Link, } from "react-router";

export default function NavBar() {
  return (
    <div className="NavBar">

      <div className="homeIcon">
        <FontAwesomeIcon icon={faHouse} />
        <p>Home</p>
      </div>

      <div>
        <input type="text" placeholder="SEARCH" className="searchBar" />
      </div>

      <div className="cartIcon">
        <Link to="/Cart">
          <FontAwesomeIcon icon={faCartShopping} />
          <span className="badge">3</span>
        </Link>
         <p>Cart</p>
      </div>

      <div className="OrdersIcon">
        <FontAwesomeIcon icon={faBox} />
        <p>Orders</p>
      </div>

      <div className="userIcon">
        <FontAwesomeIcon icon={faUser} />
        <p>User</p>
      </div>

    </div>
  );
}