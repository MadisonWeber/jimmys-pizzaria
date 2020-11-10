import React, { useContext } from 'react';
import '../css/landing.css';
import Header from './Header';
import { GlobalContext } from "../context/globalContext"

const Landing = () => {

    const { openTheMenu } = useContext(GlobalContext)

    const quickScroll = ()=> {
        let location = document.getElementById('history-one');
        location.scrollIntoView()
    }

 
    return (
        <div className = 'landing-container' id = 'landing'>
            <Header />
            <div className="landing-hero">
                <div className="landing-hero-overlay">
                    <h1 className = 'landing-title'>Jimmy's Pizzaria</h1>
                    <button className="btn call-to-order" onClick = {openTheMenu}>Order Now</button>
                    
                </div>
            </div>
            <div className = 'begin-history'>
                <h3>A Rich History of Pizza Making</h3>
                <button className = 'btn start-story-btn' onClick = {quickScroll}><i className="fas fa-arrow-down"></i></button>
            </div>
            
        </div>
    )
}

export default Landing

