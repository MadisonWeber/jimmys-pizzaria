/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, useState, useEffect} from 'react';
import { auth } from '../firebase/firebase';
import db from '../firebase/firebase'

export const GlobalContext = createContext()

const GlobalContextProvider = ({children})=>{
    
    const [ currentSection, setCurrentSection ] = useState('landing');
    const [ menu , setMenu ] = useState([]);
    const [ menuOpen, setMenuOpen] = useState(false);
    const [ currentUser, setCurrentUser ] = useState('');
    const [ userLoggedIn, setUserLoggedIn ] = useState(false);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const [ hasAccount, setHasAccount ] = useState(false);
    const [ signInOpen, setSignInOpen ] = useState(false);
    const [ orderHistory, setOrderHistory ] = useState([])
    const [ cartItems, setCartItems ] = useState([])
    const [ showCart, setShowCart ] = useState(false)


    const getOrderHistory =  (id) => {
        db.collection('order-history').where('usersID', '==', id).onSnapshot( snapshot => {
            setOrderHistory( snapshot.docs.map( (doc) => (
                {
                    id: doc.id, 
                    data : doc.data()
                }
            )))
        })
    }

    useEffect(()=>{
        const unsub = auth.onAuthStateChanged((user) => {
            if(user){
                setCurrentUser({
                    id : user.uid,
                    email : user.email
                })
                getOrderHistory(user.uid)
            }else {
                console.log('no user currently')
                setCurrentUser('')
            }
        })

        return () => unsub()

    },[userLoggedIn])

    const goToCheckout = () => {
        setMenuOpen(false)
        setShowCart(true)
    }

     const openTheMenu = ()=>{
        setShowCart(false)
        setMenuOpen(true)
        let item = document.querySelector("html");
        item.style.overflowY = 'hidden';
    }

    return(
        <GlobalContext.Provider value = {{currentSection, setCurrentSection, menu,
         setMenu, menuOpen, setMenuOpen, setEmail, email, password, setPassword, error, 
         setError, hasAccount, setHasAccount, setUserLoggedIn, currentUser, setSignInOpen, signInOpen,
          orderHistory, setOrderHistory, cartItems, setCartItems, showCart, setShowCart, goToCheckout, openTheMenu}}>
            {children}
        </GlobalContext.Provider>
    )


}

export default GlobalContextProvider