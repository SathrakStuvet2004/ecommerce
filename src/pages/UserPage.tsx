import { useGetYourOrders } from "../hooks/hook"


export default function UserPage() {
  const { data:orders } = useGetYourOrders()

  return(
    <div className="userPage">
      <title>User</title>
      
      <div className="userName">
        <p></p>
      </div>
      <div className="yourOrderInfo">
        <div className="products">
        </div>
        <div className="productsInfo">
          
        </div>
      </div>
    </div>
  )
}