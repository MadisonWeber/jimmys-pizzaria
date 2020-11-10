import React, { useContext } from 'react';
import "../css/header.css";
import { GlobalContext } from '../context/globalContext';


const Header = () => {

    const { currentUser, setSignInOpen, cartItems, setShowCart, openTheMenu } = useContext(GlobalContext);

    const openSignIn = () => {
        setShowCart(false)
        setSignInOpen(true);
        let item = document.querySelector("html");
        item.style.overflowY = 'hidden';
    }

    return (
            <div className = 'header-container panel' id = 'header'>
                <nav>
                    <span className="phone-number">289-879-2020</span>
                    <button className="btn menu-btn" onClick = {openTheMenu}>Menu</button>
                    <button className="btn cart-btn" onClick = {()=> setShowCart(p => !p)}><i className = 'fas fa-shopping-cart'/>{cartItems.length >=1 && <span className = 'cart-item-number'>{cartItems.length}</span>}</button>
                    <button className = 'btn user-profile-btn' onClick = {openSignIn}>{currentUser ? currentUser.email : 'Log In'}</button>
                </nav>
            </div>
    )
}

export default Header
