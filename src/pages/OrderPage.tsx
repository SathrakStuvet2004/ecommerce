import { useOrders } from "../hooks/hook";
import { useDeleteOrderItem, useAddYourOrder } from "../hooks/hook";

import './OrderPage.css'
import { toast } from "react-toastify";

export default function OrderPage() {

  const { data: orders } = useOrders();
  const { mutate: deleteOrderItem } = useDeleteOrderItem();
  const { mutate: addYourOrder } = useAddYourOrder();

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  const OrderData = orders?.filter((order: any) => order.email === currentUser.email)

  return (
    <>
      <title>Orders</title>

      <h1 className="OrdersName-Text">Orders</h1>

      <div className="OrdersContainer">

        <div className="OrderItems">
          {OrderData && OrderData.length > 0 ? (
            OrderData.map((item: any) => (

              <div key={item.id} className="OrderItem">

                <div className="OrderItem-image">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="Order-info">
                  <h2>{item.title}</h2>
                  <p>Price: ${item.price.toFixed(2)}</p>

                  <div className="ButtonGroup">
                    <button className="orderItem-delete-Button"
                      onClick={() => {
                        deleteOrderItem(item.id);
                        toast.success("Order Removed")
                      }}>
                      Remove
                    </button>
                    <button className="orderItem-BuyNow-Button" onClick={() => 
                    {
                      addYourOrder({ ...item, });
                      deleteOrderItem(item.id);
                      toast.success("Purchesd Successfully")
                    }}>buy now</button>

                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-orders">
              <p >No orders found.</p>
            </div>
          )}
        </div>

        <div className="PaymentSummary">

          <h3 className="paymentSummeryTitle">Payment Summary</h3>

          <div className="paymentInfo">
            <div>
              <p>Total Items: {OrderData?.length}</p>
            </div>

            <div>
              <p>Total Price: ${OrderData?.reduce((sum: number, order: any) => sum + order.price, 0).toFixed(2)}</p>
            </div>

            {OrderData && OrderData.length > 0 && (
              <button className="buyAllButton"
                onClick={() => {
                  OrderData?.forEach((order: any) => addYourOrder(order));
                  OrderData?.forEach((order: any) => deleteOrderItem(order.id));
                }}>
                buy All
              </button>
            )}

          </div>
        </div>
      </div>
    </>
  );
}