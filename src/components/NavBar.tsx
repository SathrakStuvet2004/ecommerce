import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping, faUser, faBox } from "@fortawesome/free-solid-svg-icons";
import './NavBar.css'
import { Link, } from "react-router-dom";
import { useCart } from "../hooks/hook";
import { UserCog } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { serch } from "../UserSlice";

export default function NavBar() {

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {

    const timer = setTimeout(() => {

      setDebouncedSearch(search);

    }, 600)
    
    return () => clearTimeout(timer);

  }, [search]);

  useEffect(() => {

    dispatch(serch(debouncedSearch));
    
  }, [debouncedSearch]);

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  const { data: cartItems } = useCart();

  const cartData = cartItems?.filter((cart: any) => cart.email === currentUser.email)

  const isAdmin = currentUser.isAdmin;

  const dispatch = useDispatch();

  return (
    <div className="NavBar">

      <div className="homeIcon">
        <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
          <FontAwesomeIcon icon={faHouse} />
          <p>Home</p>
        </Link>
      </div>

      <div>
        <input type="text" placeholder="SEARCH"
          className="searchBar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="cartIcon">
        <Link style={{ color: "inherit", textDecoration: "none" }} to="/Cart">
          <FontAwesomeIcon icon={faCartShopping} />
          <span className="badge">{cartData?.length}</span>
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
        <Link style={{ color: "inherit", textDecoration: "none" }} to="/User">
          <FontAwesomeIcon icon={faUser} />
          <p>{currentUser.name}</p>
        </Link>
      </div>

      {isAdmin && (
        <div className="adminIcon">
          <Link
            to="/admin"
            style={{
              color: "inherit",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <UserCog size={30} />
            <p>Admin</p>
          </Link>
        </div>
      )}
    </div>
  );
}