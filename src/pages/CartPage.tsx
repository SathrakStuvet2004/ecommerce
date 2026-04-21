import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PaymentSummary from "./PaymentSummary";
import './CartPage.css'

type product = {
  "id": number;
  "title": string;
  "price": number;
  "category": string;
  "brand": string;
  "rating": number;
  "stock": number;
  "img": string;
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
          {cartItems.map((item) => (
            <div key={item.id} className="CartItem">
              <div className="CartItem-image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="cart-info">
                <p>{item.title}</p>
                <p>Price: ${item.price}</p>

                <p>Category: {item.category}</p>
                <p>Brand: {item.brand}</p>
                <p>Rating: {item.rating}</p>
                <div>
                  <button className="CartItem-delete-Button"> delete </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="Payment">
          <PaymentSummary />
        </div>

      </div>
    </>
  )
}