
import Home from './home'
import './main.css'
import { Footer } from './footer'
import { useState } from 'react'
import ProductWomen from './womendata'
import { useNavigate } from 'react-router-dom'


const imageList=[
 "/1.avif",
 "/2.avif",
 "/3.avif"
]

export const Women = () => {
  const [currentIndex, setCurrentIndex] =useState(0)
  const navigate=useNavigate()
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    };
    const handelEvent=(item)=>{
      navigate(`/product/${item.id}`)
    }
    
  return (
    <>
    <Home/>
        <main>
             <img
          src={imageList[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
        <button className="next-button" onClick={goToNext}>
          &gt;
        </button>

     <div className='div'>COLLOCATIONS</div>
        <div className='boxes'>
          {ProductWomen.map((item) => (
            <div key={item.id} className='imgbox' onClick={()=>handelEvent(item)}>
              <img  className='images' src={item.image} alt={item.title} />
              <p className='para'>{item.title}</p>
              <h5 className='para'>₹{item.price}</h5>
            </div>
          ))}
        </div>
       
        </main>
        
    <Footer/>
    </>
    
  )
}
