import React, { useEffect, useContext } from 'react';
import './css/App.css';
import Landing from './components/Landing';
import HistoryOne from './components/HistoryOne';
import HistoryTwo from './components/HistoryTwo'
import HistoryThree from './components/HistoryThree';
import HistoryFour from './components/HistoryFour';
import FloatingNav from './components/FloatingNav';
import Menu from './components/Menu'
import { GlobalContext } from './context/globalContext'
import db from "./firebase/firebase"
import SignUp from './components/SignUp';
import Checkout from './components/Checkout';
/* eslint-disable dot-location */
/* eslint-disable react-hooks/exhaustive-deps */

function App() {



    const { setMenu, menuOpen, showCart, signInOpen } = useContext(GlobalContext)

    useEffect(()=> {
      db.collection('menu').
      onSnapshot( snapshot => {
          setMenu( snapshot.docs.map( (doc) => (
              {
                  id: doc.id, 
                  data : doc.data()
              }
          )))
      })
  }, [])


  
 

  return (
    <div className="App" >
        <Landing/>
        <HistoryOne />
        <HistoryTwo />
        <HistoryThree />
        <HistoryFour />
        <FloatingNav /> 
        {menuOpen && <Menu /> }
        {signInOpen && <SignUp /> }
        {showCart && <Checkout />}
    </div>
        
  );
}

export default App;
