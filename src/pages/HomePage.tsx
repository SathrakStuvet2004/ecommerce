//npx json-server --watch db.json
//toast notifications for cart/login
import './HomePage.css'
import { useProducts, useAddToCart, useDeleteHomeItem } from "../hooks/hook";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


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

  const serch = useSelector((state: any) => state.user.serchText)

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  const Isadmin = currentUser.name === "sathrak" && currentUser.email === "admin@gmail.com"

  const { data } = useProducts();

  const { mutate: addToCart } = useAddToCart();

  const { mutate: removeItem } = useDeleteHomeItem();

  const navigate = useNavigate()

  function navLogin() {
    navigate("/login")
  }

  function handleProductClick(id: string) {
    navigate(`products/${id}`)
  }

  const productsDetails = !!serch ? data.filter((product: any) => product?.title?.toLowerCase().includes(serch.toLowerCase())) : data

  return (
    <>
      <title>Home</title>

      <div className="productsList" >

        {productsDetails?.map((product: any) =>
          <div
            onClick={() => handleProductClick(product.id)}
            className="product"
            key={product.id} >

            <div className="productImage">
              <img src={product.img} alt={product.title} className='img' />
            </div>

            <div className="productInfo">
              <div className="ProductName aaa">Name:  {product.title}</div>
              <div className="ProductBrand aaa">Brand:  {product.brand}</div>
              <div className="ProductCategory aaa">Category:  {product.category}</div>

              <div className="price">

                <div className="ProductPrice aaa">
                  Price: {product.price}
                </div>

                <div className="ProductRating aaa">

                  <span>Rating:</span>
                  <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={2} precision={0.5}
                      sx={{
                        color: "#0077ff",

                        "& .MuiRating-iconFilled": {
                          filter: "drop-shadow(0 0 1px #00f0ff) drop-shadow(0 0 02px #3700ff)"
                        },

                        "& .MuiRating-iconHover": {
                          color: "#00f0ff"
                        },

                        "& .MuiRating-iconEmpty": {
                          color: "#1e3a5f"
                        }
                      }} />
                  </Stack>
                </div>

                <div className="ProductStock aaa">
                  Stock: {product.stock}
                </div>
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
