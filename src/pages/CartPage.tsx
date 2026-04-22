import { useCart } from "../hooks/hook";
import { useDeleteCartItem } from "../hooks/hook";
import NavBar from "../components/NavBar";
import PaymentSummary from "./PaymentSummary";
import './CartPage.css'
  
export default function CartPage() {

  // const [cartItems, setCartItems] = useState<product[]>([]);

  // async function cartPageData() {
  //   const response = await fetch("http://localhost:3000/cart");
  //   const result = await response.json();
  //   setCartItems(result);
  // }
  // useEffect(() => {
  //   cartPageData()
  // }, [])

  const { data: cartItems } = useCart();

  const { mutate: deleteCartItem } = useDeleteCartItem();

  return (
    <>
      <title>Cart</title>
      <NavBar />

      <h1 className="cartName-Text">Cart Items</h1>

      <div className="CartProperty">

        <div className="CartItems">
          {cartItems?.map((item: any) => (
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
                  <button className="CartItem-delete-Button" onClick={() => deleteCartItem(item.id)}>
                    delete
                   </button>
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