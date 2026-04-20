import { useEffect, useState } from "react";

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

      <h1>Cart Items</h1>

      <div className="CartItem">
        {cartItems.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category}</p>
            <p>Brand: {item.brand}</p>
            <p>Rating: {item.rating}</p>
            <button> Place Your Order</button>
          </div>
        ))}
      </div>
    </>
  )
}