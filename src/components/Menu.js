/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '../context/globalContext';
import "../css/menu.css";


const Menu = () => {

    const { menu, setMenuOpen, setCartItems, cartItems, goToCheckout } = useContext(GlobalContext);
    const overlayRef= useRef(null)


    const closeMenu = (e) => {
         setMenuOpen(false)
    }

    const closeMenuIfOverlay = (e) => {
        if(e.srcElement.className === 'menu-overlay'){
            setMenuOpen(false)
        }else{
            return 
        }
    }

    useEffect(()=> {
        const overlay = overlayRef.current;
        overlay.addEventListener('click', closeMenuIfOverlay);
        return ()=> overlay.removeEventListener('click', closeMenuIfOverlay);
    }, [])

    useEffect(()=> {
        let item = document.querySelector("html");
        item.style.overflowY = 'hidden'
        return ()=> item.style.overflowY = 'scroll'
    }, [])



    const addToCart = (item) => {
        setCartItems((p)=>{
            setCartItems([...p, item])
        })
    }   

   
    return (
        <div className="menu-overlay" ref = {overlayRef}>
                <div className="menu-container">
                    <h1 className = 'jimmys-menu-title'>Jimmys Pizza Menu</h1>
                    <div className="menu-salads-container">
                        <h3>Salads</h3>
                        {menu.filter( item => item.data.type === 'salad').map( (item) => {
                             return (
                                <div key = {item.id} className = 'menu-item'>
                                    <p className = 'menu-item-name'>{item.data.name}</p>
                                    <p className = 'menu-item-toppings'>{item.data.toppings}</p>
                                    <p className = 'menu-item-price'>$ {item.data.price}</p>
                                    <button className = 'btn menu-add-to-cart' onClick = {() => addToCart(item)}>Add to Cart</button>
                                </div> 
                            )
                        })}
                    </div>
                    <div className="menu-appetizers-container">
                        <h3>Appetizers</h3>
                        {menu.filter( item => item.data.type === 'appetizer').map( (item) => {
                                return (
                                    <div key = {item.id} className = 'menu-item'>
                                        <p className = 'menu-item-name'>{item.data.name}</p>
                                        <p className = 'menu-item-toppings'>{item.data.toppings}</p>
                                        <p className = 'menu-item-price'>$ {item.data.price}</p>
                                        <button className = 'btn menu-add-to-cart' onClick = {() => addToCart(item)}>Add to Cart</button>
                                    </div> 
                                )
                            })}
                    </div>
                    <div className="menu-item-container">
                        <h3>Pizzas</h3>
                        {menu.filter( item => item.data.type === 'pizza').map( (item) => {
                            return (
                                <div key = {item.id} className = 'menu-item'>
                                    <p className = 'menu-item-name'>{item.data.name}</p>
                                    <p className = 'menu-item-toppings'>{item.data.toppings}</p>
                                    <p className = 'menu-item-price'>$ {item.data.price}</p>
                                    <button className = 'btn menu-add-to-cart' onClick = {() => addToCart(item)}>Add to Cart</button>
                                </div> 
                            )
                        })}
                    </div>
                    {cartItems.length >=1 && <button className = 'go-to-checkout-from-menu' onClick = {goToCheckout}>Go To Checkout <i className = 'fas fa-shopping-cart fa-shopping-cart-menu'/> <span>{cartItems.length}</span></button>}
                    <button className = 'btn close-menu' onClick = {closeMenu}><i className = 'fas fa-times' /></button>
                </div>
        </div>
    )
}

export default Menu
