import React, { useState } from 'react';
import './main.css';
import Products from './data';
import { Footer } from './footer';
import Home from './home';
import { useNavigate } from 'react-router-dom';


// Slider images
const imageList = [
  "/shirt.avif",
  "/HOMEPAGE_3.avif",
  "/HOMEPAGE1.avif",
  "/homepage2.avif"
];

export const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate=useNavigate()

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };
  const handelEvent=(item)=>{
    navigate(`/product/${item.id}`)
  }
  
  return (
    <div>
      <Home/>
      <main>
        
        {/* Slider */}
        <img
          src={imageList[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
        <button className="next-button" onClick={goToNext}>
          &gt;
        </button>

        {/* Product Section */}
        <div className='div'>COLLOCATIONS</div>
        <div className='boxes'>
          {Products.map((item) => (
            <div key={item.id} className='imgbox' onClick={()=>handelEvent(item)}>
              <img className='images' src={item.image} alt={item.title} />
              <p className='para'>{item.title}</p>
              <h5 className='para'>₹{item.price}</h5>
            </div>
          ))}
        </div>
       
      </main>
      <Footer/>
      
    </div>
  );
};
