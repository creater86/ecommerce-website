
import { FaTrash } from "react-icons/fa";
import { Footer } from "./footer";
import Home from "./home";
import './cart.css'
import { useState } from "react";

function Cart() {
const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

if (cart.length === 0) {
  return (
    <div>
      <Home />
      <section className="empty-cart">
        <h2>No items in cart</h2>
      </section>
      <Footer />
    </div>
  );
}

const handleRemove = (index) => {
  const updatedCart = [...cart];
  updatedCart.splice(index, 1);
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

return (
  <div>
    <Home />
    <section>
      <main className="box">
        {cart.map((item, index) => (
          <section key={index} className="inner">
            <section className="right">
              <img className="mid" src={item.image} alt="product" />
            </section>
            <section>
              <p>{item.title}</p>
              <p>Price: ₹{item.price}</p>
              <p>Size: {item.size}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemove(index)} className="remove-btn">
                <FaTrash style={{ marginRight: "6px" }} /> Remove
              </button>
            </section>
            <section>
              <p>Total: ₹{item.price * item.quantity}</p>
            </section>
          </section>
        ))}
      </main>
    </section>
    <Footer />
  </div>
);
}
export default Cart
