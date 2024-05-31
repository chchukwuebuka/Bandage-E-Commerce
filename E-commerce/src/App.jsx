import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './product.css'
import Landing from './componenet/landing'
import Product from './componenet/product'
import CartProduct from './componenet/cartProduct';

function App() {
 

  return (

     (
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cartProduct" element={<CartProduct />} />
        </Routes>
      </Router>
    )
   
  )
}

export default App
