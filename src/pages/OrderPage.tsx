import { useOrders } from "../hooks/hook";
import { useDeleteOrderItem } from "../hooks/hook";
import NavBar from "../components/NavBar";

import './OrderPage.css'

export default function OrderPage() {

  const { data: orders } = useOrders();
  const {mutate: deleteOrderItem} = useDeleteOrderItem();


  return (
    <>
      <title>Orders</title>
      <NavBar />

      <div className="OrdersTitle">
        <h1>Orders</h1>
      </div>

      <div className="OrderPage">
        <div className="OrdersContainer">

          <div className="OrdersDetailsTitle">
            Your orders details
          </div>

          <div className="OrderItems">
            {orders && orders.length > 0 ? (
              orders.map((item: any) => (
                <div key={item.id} className="OrderItem">
                  <div className="OrderItem-image">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="Order-info">
                    <h2>{item.title}</h2>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <button className="checkoutButton" onClick={() => deleteOrderItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="empty-orders">No orders found.</p>
            )}
          </div>

        </div>

        <div className="PaymentSummary">

          <h3 className="paymentSummeryTitle">Payment Summary</h3>

          <div className="paymentInfo"> 
            <div>
              <p>Total Items: {orders?.length}</p>
              <p>Total Price: ${orders?.reduce((sum: number, order: any) => sum + order.price, 0).toFixed(2)}</p>
              <div>
                <button className="placeOrderButton checkoutButton">Place your order</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}