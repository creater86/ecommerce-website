import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { HiMenuAlt2 } from "react-icons/hi";
import './home.css';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate=useNavigate()
  return (
    <div className='position'>
      <section className='header'>
       
        <HiMenuAlt2  className='menu'/>
        <div className="header-left">
           <h2><Link to="/">MEN</Link></h2>
          <h2><Link to="/women">Women</Link></h2>

        </div>

         <div className="center-logo">
               <img src={process.env.PUBLIC_URL + "/RuleBreakers.jpeg"} alt="RuleBreaker Logo" />
        </div>

        

       
        <section className='right-section'>
           <section className='search-bar'>
            <input className='input' type="text" placeholder="Search here..." />
            <FaSearch className="search-icon" />
           </section>

           <section>
            <FaShoppingCart className='cart'
            onClick={() => navigate("/cart")} />
           </section>
        </section>
      </section>
      
    </div>
   
  );
};

export default Home;
