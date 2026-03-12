
import './App.css';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Productdetails from './pages/productdetail';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/cart';

function App() {
const [cartitems,setCartItems]= useState([]);
  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme='dark' position='top-center'/>
          <Header cartitems={cartitems}/>
          <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/search" element={ <Home/>}/>
          <Route path="/product/:id" element={<Productdetails cartitems={cartitems} setCartItems={setCartItems}/>}/>
          <Route path="/cart" element={<Cart cartitems={cartitems} setCartItems={setCartItems}/>}/>
          </Routes> 
          <Footer/>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
