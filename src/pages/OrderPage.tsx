import { useOrders } from "../hooks/hook";
import  NavBar  from "../components/NavBar";

export default function OrderPage() {

  const { data: orders } = useOrders();

  return (
    <>
      <title>Orders</title>
      <NavBar />
      <h1 className="OrdersTitle">Orders</h1>
      <div className="OrdersContainer">
        {orders?.map((order: any) => (
          <div key={order.id} className="OrderItem">
            <h2>{order.title}</h2>
            <p>Price: ${order.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </>
  );
}