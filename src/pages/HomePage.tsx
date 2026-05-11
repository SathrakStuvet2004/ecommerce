//npx json-server --watch db.json
//toast notifications for cart/login
import './HomePage.css'
import NavBar from "../components/NavBar";
import { useProducts, useAddToCart, useDeleteHomeItem } from "../hooks/hook";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';


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

// type product = {
//   "id": number;
//   "img": string;
//   "title": string;
//   "price": number;
//   "category": string;
//   "brand": string;
//   "rating": number;
//   "stock": number;
// }


export default function HomePage() {
  //const [products, setProducts] = useState<product[]>([]);

  // fetch("http://localhost:3000/products")
  //   .then((response) => response.json())
  //   .then((data: product[]) => setProducts(data));
  // console.log(products);


  // async function homePageData() {
  //   const response = await fetch("http://localhost:3000/products");
  //   const result = await response.json();
  //   setProducts(result);
  // }

  // useEffect(() => {
  //   homePageData()
  // }, [])
  // console.log(products);
  /*function homePageData(){
    async function fetchData() {
      const response = await fetch("http://localhost:3000/products");
      const result = await response.json();
      setProducts(result);
    }     
    fetchData();
  }
    */
  // function addToCart(product: product) {
  //   fetch("http://localhost:3000/cart", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(product)
  //   });
  // 

  // const getData=getFromMockApi()
  // console.log(getData, "mockapi data in home page")
  const isLoggedin = useSelector((state: any) => state.user.isLogedIn);
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  const Isadmin = currentUser.name === "sathrak" && currentUser.email === "admin@gmail.com"

  const { data } = useProducts();

  const { mutate: addToCart } = useAddToCart();

  const { mutate: removeItem } = useDeleteHomeItem();

  const navigate = useNavigate()

  function navLogin() {
    navigate("/login")
  }

  return (
    <>
      <NavBar />
      <title>Home</title>

      <div className="productsList" >

        {data?.map((product: any) =>
          <div className="product" key={product.id} >
            <div className="productImage">
              <img src={product.img} alt={product.title} className='img' />
            </div>

            <div className="productInfo">
              <div className="ProductName aaa">Name:  {product.title}</div>
              <div className="ProductBrand aaa">Brand:  {product.brand}</div>
              <div className="ProductCategory aaa">Category:  {product.category}</div>

              <div className="price">
                <div className="ProductPrice aaa">price:  {product.price}</div>
                <div className="ProductRating aaa">Rating:  {product.rating}</div>
                <div className="ProductStock aaa">Stock:  {product.stock}</div>
              </div>
            </div>
            {
              isLoggedin ? (

                <button className="cartButton" onClick={() => {
                  addToCart({ ...product, email: currentUser.email }),
                    toast.success("Product Added In The Cart")
                }} >
                  Add to cart
                </button>
              ) : (
                <button className='cartButton' onClick={navLogin}>Log In for Add to Cart</button>
              )
            }
            {Isadmin &&
              <button className='deleteButton'
                onClick={() => {
                  removeItem(product.id),
                  toast.success("Product Deleted Successfully")
                }}>
                  delete
                </button>
            }
          </div>
        )}
      </div>
    </>
  );
}
