import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping, faUser, faBox } from "@fortawesome/free-solid-svg-icons";

import './NavBar.css'

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

      <div className="cart">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="badge">3</span>
        <p>Cart</p>
      </div>

      <div>
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