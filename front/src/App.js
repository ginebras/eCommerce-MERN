import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

import './App.css';

import Home from './components/pages/home/home';
import Register from './components/pages/register/register';
import Login from './components/pages/login/login';
import Products from './components/pages/products/products';
import Product from './components/pages/product/product';
import Basket from './components/pages/basket/basket';
import Profile from './components/pages/profile/profile';

function App() {

  const logged=useSelector(state=>state.auth.logged);

  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/register" element={ logged ? <Navigate to="/"/> : <Register/> } />
          <Route exact path="/login" element={ logged ? <Navigate to="/" />: <Login/> } />
          <Route exact path="/products" element={<Products/>} />
          <Route exact path="/product-details/:id" element={<Product/>} />
          <Route exact path="/basket" element={<Basket/>} />
          <Route exact path="/profile/:username" element={<Profile/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
