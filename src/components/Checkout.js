import React, { useContext, useEffect, useState } from 'react';
import "../css/checkout.css";
import { GlobalContext } from '../context/globalContext';
import db from '../firebase/firebase'
import firebase from 'firebase'
import CheckoutItems from '../components/CheckoutItems';

/* eslint-disable react-hooks/exhaustive-deps */

const Checkout = () => {


    const { cartItems, setCartItems, setShowCart, currentUser, setSignInOpen, openTheMenu  } = useContext(GlobalContext)


    const [ noItemMessage, setNoItemMessage ] = useState('No Items')
 
    const cartItemsTotal = cartItems.reduce( (total, acc) => {
        return total += acc.data.price
    }, 0)

    const deleteCartItem = (id) => {
        
        const cartClone = [...cartItems]
        const removeIndex = cartItems.findIndex((item) => {
            return item.id === id
        })
        cartClone.splice(removeIndex, 1)
        setCartItems(cartClone)
     
    }

    const closeCheckoutIfClickOutside = (e) =>{
        if(!e.path.some( ele => ele.className === 'checkout-container')){
            setShowCart(false)
        }
    }

    useEffect(()=> {

        window.addEventListener('click', closeCheckoutIfClickOutside);

        return () =>  window.removeEventListener('click', closeCheckoutIfClickOutside);

    }, [])

    useEffect(()=>{
        const scroll = document.querySelector('html');
        scroll.style.overflowY = 'hidden';

        return ()=> scroll.style.overflowY = 'scroll'

    }, [])

    const checkout = () => {

        if(cartItems.length < 1){
            setNoItemMessage('You Must Have Items To Checkout')
            setTimeout(()=>{
                setNoItemMessage('No Items')
            }, 3000)
            return 
        }

        const itemArray = cartItems.map( item => item.data.name)

        try{
            db.collection('order-history').doc().set({
                orderItems : itemArray, 
                orderTime : firebase.firestore.FieldValue.serverTimestamp(),
                orderTotal :  parseFloat(cartItemsTotal.toFixed(2)),
                usersID : currentUser.id
            }
            )
            
            setCartItems([])
            setNoItemMessage('Thank You For Your Purchase, It should be ready in 15-20 minuites.')
            setTimeout(()=>{
                
                setShowCart(false)
                setSignInOpen(true)
            }, 5000)
        } catch (err){
            console.log(err)
        }

    }

    const returnToSignIn = () =>{
        setShowCart(false)
        setSignInOpen(true)
    }



    
    return (
        <div className = 'checkout-container'>
            <h1>Checkout</h1>
            <div className="checkout-items">
                {cartItems.length >= 1 ? <CheckoutItems cartItems = {cartItems}  deleteCartItem = {deleteCartItem} /> :
                ( <div className ='no-items-container'><h4 className = 'no-items'>{noItemMessage}</h4><button className = 'btn no-items-btn' onClick = {openTheMenu}>Go To Menu</button></div>) }
            </div>
            <div className="checkout-totals">
                <p className="checkout-totals-total">Total :<span className = 'make-gold'> $ {cartItemsTotal.toFixed(2)}</span></p>
                <p className="checkout-totals-total-after-tax">Total After Tax:<span className = 'make-gold'> $ {(cartItemsTotal * 1.15).toFixed(2)}</span></p>
            </div>
            {currentUser ? <button className = 'btn checkout-btn' onClick = {checkout}>Checkout</button> :
            <button className = 'btn needs-to-sign-in' onClick = {returnToSignIn}>Sign In To Checkout</button>}
            
        </div>
    )
}

export default Checkout
