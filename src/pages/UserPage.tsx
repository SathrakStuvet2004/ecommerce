import NavBar from "../components/NavBar"
import { useGetYourOrders } from "../hooks/hook"
import './UserPage.css'

export default function UserPage() {
  const { data : YourOrders } = useGetYourOrders()

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  const YourOrderData = YourOrders?.filter((order:any) => order.email === currentUser.email)

  return(
    <div className="userPage">
      <title>User</title>
      <NavBar />
      <div className="userName">
        <p>sathrak</p>
      </div>
      <div className="yourOrderInfo">
        <div className="products">
          { <div className="OrderItems">
            {YourOrderData && YourOrderData.length > 0 ? (
              YourOrderData.map((item: any) => (
                <div key={item.id} className="OrderItem">
                  <div className="OrderItem-image">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="Order-info">
                    <h2>{item.title}</h2>
                    <p>Price: ${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="empty-orders">No orders found.</p>
            )}
          </div>}
        </div>
        <div className="productsInfo">
          <div >
            
          </div>
        </div>
      </div>
    </div>
  )
}