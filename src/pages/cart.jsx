
import { Footer } from "./footer";
import Home from "./home";
import './product.css'

 function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart) {
    return <h2>No items in cart</h2>;
  }

  return (
    <div>
      <Home />
      <section >
      <main   className="box">
        <section className="inner">
      <section className="right">  <img  className="mid" src={cart.image} alt="product" /></section>
       <section >
        <p>{cart.title}</p>
         <p>Price: ₹{cart.price}</p>
        <p>Size: {cart.size}</p>
        <p>Quantity: {cart.quantity}</p>
       </section>
        <section className="right">
            <p>Total: ₹{cart.price * cart.quantity}</p>
        </section>
       
        </section>
      
    
       
      </main>
       
      </section>
      <Footer />
    </div>
  );
}
export default Cart
