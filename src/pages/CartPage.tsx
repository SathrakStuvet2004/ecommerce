import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import './CartPage.css'

type product = {
  "id": number;
  "title": string;
  "price": number;
  "category": string;
  "brand": string;
  "rating": number;
  "stock": number;
}

export default function CartPage() {

  const [cartItems, setCartItems] = useState<product[]>([]);

  async function cartPageData() {
    const response = await fetch("http://localhost:3000/cart");
    const result = await response.json();
    setCartItems(result);
  }
  useEffect(() => {
    cartPageData()
  }, [])

  return (
    <>
      <title>Cart</title>
      <NavBar />

      <h1 className="cartName-Text">Cart Items</h1>
      
      <div className="CartProperty">

        <div className="CartItems">
          {cartItems.map((item, index) => (
            <div key={item.id} className="CartItem">
              <p>{item.title}</p>
              <p>Price: ${item.price}</p>
              <p>Category: {item.category}</p>
              <p>Brand: {item.brand}</p>
              <p>Rating: {item.rating}</p>
              <button className="CartItem-delete-Button"> delete </button>
            </div>
          ))}
        </div>

        <div className="Payment">
          <h2>Payment Summary</h2>
        </div>

      </div>

      

    </>
  )
}