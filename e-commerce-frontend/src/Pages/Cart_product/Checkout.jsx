// Checkout.jsx
import React, { useState, useContext } from "react";
import "./Checkout.css";
import Shipping from "./Shipping"; // Import your Shipping component
import CartItems from "../../Components/CartItems/CartItems"; // Import your CartItems component
import { ShopContext } from "../../Context/ShopContext";


const Checkout = () => {
  const {products} = useContext(ShopContext);
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <h2>Payment Method</h2>
        <form>
          <label className="payment-method-label">
            <input
              type="radio"
              value="cashOnDelivery"
              checked={paymentMethod === "cashOnDelivery"}
              onChange={handlePaymentMethodChange}
              className="payment-method-input"
            />
            Cash on Delivery
          </label>
          <label className="payment-method-label">
            <input
              type="radio"
              value="bankTransfer"
              checked={paymentMethod === "bankTransfer"}
              onChange={handlePaymentMethodChange}
              className="payment-method-input"
            />
            Bank Transfer
          </label>
          <label className="payment-method-label">
            <input
              type="radio"
              value="momo"
              checked={paymentMethod === "momo"}
              onChange={handlePaymentMethodChange}
              className="payment-method-input"
            />
            Momo
          </label>
        </form>
      </div>
      <div className="checkout-right">
         <div className="order-summary"> 
            <h3>Ordered Products</h3>
            <div className="ordered-products">
            {products.map((e)=>{

              if(cartItems[e.id]>0)
              {
                return  <div>
                          <div className="ordered-product">
                            <img className="ordered-product-img" src={e.image} alt="" />
                            <p cartitems-product-title>{e.name}</p>
                            {/* <p>${e.new_price}</p> */}
                            <p>x{cartItems[e.id]} </p>
                            <p>${e.new_price*cartItems[e.id]}</p>
                          </div>
                          <hr />
                        </div>;
              }
              return null;
            })}
            </div>
         </div>


         <div className="shipping-info">
            <h3>Shipping Information</h3>
            <p>Name: </p>
            <p>Address: </p>
          </div>
          <div className="total-amount">
            <h3>Total Amount</h3>
            <p>${getTotalCartAmount()}</p>
          </div>
          {/* Button to confirm order */}
          <button className="confirm-order-button">Confirm Order</button>
      </div>
    </div>
  );
};

export default Checkout;
