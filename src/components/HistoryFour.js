/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useContext } from 'react';
import "../css/historyFour.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlobalContext } from '../context/globalContext'

const HistoryFour = () => {

    const fourthExplanation = useRef(null)
    const fourthPhoto = useRef(null)
    const { setCurrentSection } = useContext(GlobalContext) 

    if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }

    useEffect(()=> {
        gsap.fromTo( fourthPhoto.current, {
            autoAlpha : 0,
            y : -350},
            {
                autoAlpha: 1,
                y : 0,
                ease : 'back',
                duration : 1.2,
                scrollTrigger : {
                    trigger : fourthPhoto.current,
                    start : 'top center+=50',
                    toggleActions: 'play none none none',
                    onEnter : ()=> {setCurrentSection('historyFour')},
                    onEnterBack : () => {setCurrentSection('historyFour')}
                }
        })
       
        gsap.fromTo( fourthExplanation.current, {
            autoAlpha : 0,
            y : 190},
            {
                autoAlpha: 1,
                y :  0,
                ease : 'back',
                duration : 1.5,

                scrollTrigger : {
                    trigger : fourthPhoto.current,
                    start : 'top center-=50',
                    toggleActions: 'play none none none',
                }
        })
    }, [])

    const scrollTop = () => {
        let location = document.getElementById('header');
        location.scrollIntoView()
    }


    return(
        <div className = 'history-four-container panel' id = 'history-four'>
            <img className = 'history-four-image remove-image' src={require("../photos/pizza-dough.jpg").default} alt="" ref = {fourthPhoto}/>
            <div className="history-four-info-holder" ref = {fourthExplanation}>
                <h3 className = 'history-four-title'>Whats Next</h3>
                <h4 className = 'history-four-year'>2020</h4>
                <p className = 'history-four-text' > The escalation of Covid-19 has changed much about the world. But at Jimmy's pizza we keep our focus narrow. <br /> <span className = 'mission'>Make great Pizza, Make People Happy. </span> <br />Pizza is supposed to be fun after all.</p>
            </div>
            <div className="back-to-top btn" href = "#header" onClick = {scrollTop}> <i className="fas fa-arrow-up"></i> <p>Back to Top</p></div>
        </div>
    )
}

export default HistoryFour
