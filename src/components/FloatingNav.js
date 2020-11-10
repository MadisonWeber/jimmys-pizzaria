import React, { useRef, useContext } from 'react';
import "../css/floatingNav.css";
import { GlobalContext } from '../context/globalContext'


const FloatingNav = () => {
    
    const scrollIntoView = (e) => {
        let destination = e.target.getAttribute('data-going')
        let location = document.getElementById(destination);
        location.scrollIntoView()
    }   

    const floatingNav = useRef(null)

    const { currentSection } = useContext(GlobalContext)

    return (
        <div className = {currentSection === 'landing' ? 'floating-nav hidden' : 'floating-nav'} ref = {floatingNav} >
            <div  onClick = {scrollIntoView} className = 'floating-header floating-item'  ><i className = 'fas fa-circle header-circle'  data-going = 'header'></i></div>
            <div onClick = {scrollIntoView} className = 'floating-history-one floating-item' ><i className = {currentSection === 'historyOne' ? 'fas fa-circle  active' : 'fas fa-circle'} data-going = 'history-one'></i></div>
            <div onClick = {scrollIntoView} className = 'floating-history-two floating-item' ><i className = {currentSection === 'historyTwo' ? 'fas fa-circle  active' : 'fas fa-circle'} data-going = 'history-two'></i></div>
            <div onClick = {scrollIntoView} className = 'floating-history-three floating-item' ><i className = {currentSection === 'historyThree' ? 'fas fa-circle  active' : 'fas fa-circle'} data-going = 'history-three'></i></div>
            <div onClick = {scrollIntoView} className = 'floating-history-four floating-item'><i className = {currentSection === 'historyFour' ? 'fas fa-circle  active' : 'fas fa-circle'} data-going = 'history-four'></i></div>
        </div>
    )
}

export default FloatingNav
