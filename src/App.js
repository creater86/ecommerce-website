
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Women } from './pages/women';
import { Main } from './pages/main';
import { ShowProducts } from './pages/product';
import Cart  from './pages/cart';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Main />}/>
            <Route path='/Women' element={<Women />}/> 
            <Route path='/product/:id' element={<ShowProducts />}/>
            <Route path='/cart' element={<Cart />}/>
        </Routes>
      </Router>
      
  );
}

export default App;
