import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
