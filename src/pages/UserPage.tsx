import NavBar from "../components/NavBar"
import { useGetYourOrders } from "../hooks/hook"
import './UserPage.css'

export default function UserPage() {
  const { data : YourOrders } = useGetYourOrders()

  return(
    <div className="userPage">
      <title>User</title>
      <NavBar />
      <div className="userName">
        <p>sathrak</p>
      </div>
      <div className="yourOrderInfo">
        <div className="products">
          
        </div>
        <div className="productsInfo">
          <div ></div>
        </div>
      </div>
    </div>
  )
}