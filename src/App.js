import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setCartData, setProducts } from './redux/actions/productsActions'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css";
import ProductDetails from "../src/components/Product/productDetail";
import Header from '../src/components/Header/header';
import Footer from "./components/Footer/footer";
import Basket from "./components/Cart/basket";
import Home from "./components/Home/home";

import WomenProductList from "./components/Products/womenslist";
import MenProductList from "./components/Products/menProductsList";
import SmartGearProductList from "./components/Products/smartGearProductList";
import AccessoriesProductList from "./components/Products/accessoriesProductList";

import Hamburger from "./components/Header/hamburger";
import CheckOut from "./components/CheckOut/checkOut";
import Checkoutone from "./components/CheckOut/checkoutone";
import Checkouttwo from "./components/CheckOut/checkouttwo";
import Checkoutthree from "./components/CheckOut/checkoutthree";
import Checkoutfour from "./components/CheckOut/checkoutfour";
import Checkoutfive from "./components/CheckOut/checkoutfive";
import Filter from "./components/Filter/Filter";
import axios from "axios";
import ProductList from "./components/Products/products";
import Signin from "./components/Login/Signin";
import Create from "./components/Login/Create";
import Signout from "./components/Login/Signout";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const onAdd = (product) => {
    dispatch(setCartData(product));
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const fetchProducts = async () => {

    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header countCartItems={cartItems.length} />
        <Hamburger countCartItems={cartItems.length} />
        <Routes>
          <Route exact path='/' element={<Home />} />
         
          <Route exact path='/filter' element={<Filter />} />
          <Route exact path='/women' element={<WomenProductList />} />
          <Route exact path='/men' element={<MenProductList />} />
          <Route exact path='/jewellery' element={<SmartGearProductList />} />
          <Route exact path='/electronics' element={<AccessoriesProductList />} />
          <Route exact path='/products' element={<ProductList />} />
          <Route exact path='/Signin' element={<Signin />} />
          <Route exact path='/Create' element={<Create />} />
          <Route exact path='/Signout' element={<Signout />} />

          <Route exact path='/checkout' element={<CheckOut />} />
          <Route exact path='/checkoutone' element={<Checkoutone cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>} />
          <Route exact path='/checkouttwo' element={<Checkouttwo  cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>} />
          <Route exact path='/checkoutthree' element={<Checkoutthree cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>} />
          <Route exact path='/checkoutfour' element={<Checkoutfour cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>} />
          <Route exact path='/checkoutfive' element={<Checkoutfive cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>} />

          <Route exact path='/product/:productId' element={<ProductDetails onAdd={onAdd}onRemove={onRemove}   cartItems={cartItems} />} />
          <Route exact path='/cart' element={<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
          <Route>404 Not Found!</Route>
        </Routes>
        <Footer />
       
      </Router>
    </div>
  );
}

export default App;
