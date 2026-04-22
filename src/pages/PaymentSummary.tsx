import './PaymentSummary.css'

export default function PaymentSummary() {
  return (
    <>
      <h2 className='PaymentSummary-text'>Payment Summary</h2>
      <div className="PaymentSummary">
        <div><p>Total Items: 3</p></div>
        <div><p>Total Price: $150</p></div>
        <div> <button className="checkoutButton">Place your order</button></div>
      </div>
    </>

  )
}