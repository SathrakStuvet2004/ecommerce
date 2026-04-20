//npx json-server --watch db.json

import { useEffect, useState } from "react"
import './HomePage.css'
import NavBar from "../components/NavBar";

// type Product = {
//   id: number;
//   title: string;
// };

// export function HomePage() {
//   const [apiData, setData] = useState<Product[]>([]); // ✅ start with empty array

//   const apiData = async () => {
//     const response = await fetch("http://localhost:3000/products");
//     const result = await response.json();
//     setData(result);
//   };

//   useEffect(() => {
//     apiData();
//   }, []);

//   console.log(apiData)

//   useEffect(() => {
//     console.log(apiData);
//   }, [apiData]);

//   return (
//     <div>
//     </div>
//   );
// }

type product = {
  "id": number;
  "title": string;
  "price": number;
  "category": string;
  "brand": string;
  "rating": number;
  "stock": number;
}

export default function HomePage() {
  const [products, setProducts] = useState<product[]>([]);

  // fetch("http://localhost:3000/products")
  //   .then((response) => response.json())
  //   .then((data: product[]) => setProducts(data));
  // console.log(products);

  async function homePageData() {
    const response = await fetch("http://localhost:3000/products");
    const result = await response.json();
    setProducts(result);
  }

  useEffect(() => {
    homePageData()
  }, [])
  console.log(products);
  function addToCart(product: product) {
    fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });
  }


  return (
    <>
     <NavBar />
      <div className="productsList" >
        {products.map((product) =>
          <div className="product" key={product.id} >
            <div className="aaa">Name:  {product.title}</div>
            <div className="aaa">Brand:  {product.brand}</div>
            <div className="aaa">Category:  {product.category}</div>
            <div className="aaa">price:  {product.price}</div>
            <div className="aaa">Rating:  {product.rating}</div>
            <div className="aaa">Stock:  {product.stock}</div>
            <button className="cartButton" onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        )}
      </div>
    </>
  );
}
