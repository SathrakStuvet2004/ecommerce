import { useAddOrder, useCart } from "../hooks/hook";
import { useDeleteCartItem } from "../hooks/hook";
import NavBar from "../components/NavBar";
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

  const { mutate: addOrder } = useAddOrder();

  console.log({...cartItems})

  return (
    <>
      <title>Cart</title>
      <NavBar />

      <h1 className="cartName-Text">Cart Items</h1>

      <div className="CartContainer">

        <div className="CartItems">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item: any) => (
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
            ))
          ) : (
            <div className="empty-cart">
              <p>The cart is empty Please add products.</p>
            </div>
          )}
        </div>

        <div className="CartDetails">

          <h2 className="CartDetails-Text">Cart Details</h2>
          <div className="CartDetails-info">
            <div>
              <p>Total Items: {cartItems?.length}</p>
            </div>
            <div>
              <p>Total Price: ${cartItems?.reduce((sum: number, item: any) => sum + item.price, 0).toFixed(2)}</p>
            </div>
            {cartItems && cartItems.length > 0 && (
              <button className="BuyNowButton" onClick={() =>  addOrder({...cartItems})}>
                Buy All
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}