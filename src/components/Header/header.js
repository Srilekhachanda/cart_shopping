import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import { FiShoppingBag } from 'react-icons/fi';
import '../../assets/scss/header.css';
import '../../assets/css/aem-grid.css';
import venia from '../../assets/images/venia.png';

const Header = (props) => {
  const [loading, setLoading] = useState(false);
  
  return (
    <div className="header__content">
                <div className="header__logo" >
                  <NavLink className="" to="/"><img className="logoimg" src={venia} /></NavLink>
                </div>
                <div className="header__selected">
                  <ul>
                    <li><NavLink to="/" activeClassName="active" >Home</NavLink></li>
                    <li><NavLink to="/women">Women</NavLink></li>
                    <li><NavLink to="/men" >Men</NavLink></li>
                    <li><NavLink to="/electronics">Electronics</NavLink></li>
                    <li><NavLink to="/jewellery" >Jewellery</NavLink></li>
                  </ul>
                </div>
                <div className="header__icons">
                    <div className="cartCount_zero">
                      <NavLink to="/cart" className="">
                        <FiShoppingBag />{' '}
                        {props.countCartItems ? (
                          <button className="cartCount_one">{props.countCartItems}</button>
                        ) : (
                          ''
                        )}
                      </NavLink>{' '}
                    </div>
                </div>
              </div>
  )
}
export default Header;
