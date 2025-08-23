import { useNavigate, useParams } from 'react-router-dom'
import Products from './data'
import { Footer } from './footer'
import Home from './home'
import './product.css'
import ProductWomen from './womendata';
import { useState } from 'react';

const allProducts = [...Products, ...ProductWomen];

export const ShowProducts = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = allProducts.find(product => product.id === Number(id));


  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handelcart = () => {
    if (!size) {
      alert("Please select a size");
      return;
    }

    localStorage.setItem(
      "cart",
      JSON.stringify({
        image: product.image,
        price: product.price,
        size: size,
        quantity: quantity,
        title:product.title
      })
    );

    // Navigate to cart page
    navigate("/cart");
  };

  return (
    <div>
      <Home />
      <section>
        <div className='midel'>
          <section className='leftside'>
            <img src={product.image} alt={product.title} className='imagecontrole' />
          </section>

          <section className='rightside'>
            <section className='bordeer'>
              <h3>{product.title}</h3>
              <p>oversized Tshirts</p>
            </section>
            <section>
              <h2>₹{product.price}</h2>
              <p>MRP incl.of all taxes</p>
              <h4>Please select a size.</h4> 

              {["S","M","L","XL","XXL"].map((s) => (
                <button 
                  key={s} 
                  className={`butt ${size === s ? "active-size" : ""}`} 
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </section>

            <section className='dk'>
              <label htmlFor="dks"> Quantity</label>
              <input
                id='dks'
                type="number"
                min={1}
                max={10}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </section>

            <button className='carts' onClick={handelcart}>Add to carts</button>

            <section className='details'>
              <h3>product details</h3>
              <p>
                Material & Care:
                The hydros are made of injection moulded EVA which is known for its comfort.
                The moulded construction provides uniform flexibility. The inner footbed is made of higher density EVA proving extra soft base for your feet.
                The charms are made of moulded silicone.
                Care: wash with mild soap/cold water using a soft clean cloth, let it air dry and do not wash using hot/warm water
              </p>
              <h5>Country of Origin: <p>India (and proud)</p></h5>
              <p>
                <h4>Manufactured & Sold By:</h4>
                The Store Pvt. Ltd.
                224,dharmapuri
                J.R. Boricha Marg
                Lower Parel (E)
                pennagaram - 636810
                connect@thestore.com
                Customer care no. +91 22-68493328
              </p>
              <p>
                <h4>Description</h4>
                {product.description}
              </p>
            </section>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
};
