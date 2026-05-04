import NavBar from "../components/NavBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useGetYourOrders } from "../hooks/hook"
import './UserPage.css'
import { useNavigate } from "react-router";

export default function UserPage() {
  const { data: YourOrders } = useGetYourOrders()

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  const YourOrderData = YourOrders?.filter((order: any) => order.email === currentUser.email)

  const navigate= useNavigate();

  function logout(){
    localStorage.clear();
    navigate("/login")
  }

  return (
    <div className="userPage">
      <title>User</title>
      <NavBar />
      <div className="userInfo">
        <FontAwesomeIcon icon={faUser} />
        <h3 className="userName">{currentUser.name}</h3>
      </div>
      <div className="yourOrderInfo">
        <div className="products">
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
          <div>
            <h3 className="orderDetails">your order details:</h3>
          </div>
          <div className="orderCalculation">
            <p>Your Total Orders: {YourOrderData?.length}</p>
            <p>Total cost :${YourOrderData?.reduce((sum: number, order: any) => sum + order.price, 0).toFixed(2)}</p>
          </div>
          <div className="userInformationText">
            <h3>User Information</h3>
          </div>
          <div className="userInformation">
            <p>User Name : {currentUser.name}</p>
            <p>User Mail Id : {currentUser.email}</p>
            <button className="logoutButton" onClick={logout}>Log out</button>
          </div>
        </div>
      </div>
    </div>
  )
}