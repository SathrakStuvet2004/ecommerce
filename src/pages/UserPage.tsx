import NavBar from "../components/NavBar"
import { useGetYourOrders, useDeleteYourOrderItem } from "../hooks/hook"
import './UserPage.css'
import { useNavigate } from "react-router";

export default function UserPage() {
  const { data: YourOrders } = useGetYourOrders()
  const { mutate: deleteYourOrderItem } = useDeleteYourOrderItem();

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  const YourOrderData = YourOrders?.filter((order: any) => order.email === currentUser.email)

  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/")
  }

  function clearOrders(){
    YourOrderData?.forEach((orders:any)=>deleteYourOrderItem(orders.id))
     
  }

  return (
    <div className="userPage">
      <title>User</title>
      <NavBar />
      <div className="yourOrderInfo">
        <div className="products">
          <h4 className="historyText">Your Order History :</h4>
          {<div className="OrderItems">
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
          <div className="orderSummary">
            <h3 className="orderDetails">your order details:</h3>
            <div className="orderCalculation">
              <p>Your Total Orders: {YourOrderData?.length}</p>
              <p>Total cost :${YourOrderData?.reduce((sum: number, order: any) => sum + order.price, 0).toFixed(2)}</p>

              <button className="orderHistoryButton"
              onClick={clearOrders}>clear order history</button>
            </div>
          </div>

          <div className="userInformations">
            <h3 className="userInformationText">User Information</h3>
            <div className="userInformation">
              <p>User Name : {currentUser.name}</p>
              <p>User Mail Id : {currentUser.email}</p>
              <button className="logoutButton" onClick={logout}>Log out</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}