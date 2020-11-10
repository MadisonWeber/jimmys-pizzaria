/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useContext } from 'react';
import '../css/historyTwo.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GlobalContext } from '../context/globalContext'


const HistoryTwo = () => {

    if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }

    const secondPhoto = useRef(null)
    const secondExplanation = useRef(null)
    const historyTwo = useRef(null)
    const descriptionRefTwo = useRef(null)
    const { setCurrentSection } = useContext(GlobalContext)

    useEffect(()=>{
        gsap.fromTo( secondPhoto.current, {
            autoAlpha : 0,
            x : -200, y : -280},
            {
                autoAlpha: 1,
                x : -25,
                y : -40,
                duration : .75,
                scrollTrigger : {
                    trigger : secondPhoto.current,
                    start : 'top center+=40',
                    toggleActions: 'play none none none',
                    onEnter : ()=> {setCurrentSection('historyTwo')},
                    onEnterBack : () => {setCurrentSection('historyTwo')},
                }
        })
       
        gsap.fromTo( secondExplanation.current, {
            autoAlpha : 0,
            x : 150,
        },
            {
                autoAlpha: 1,
                x : 25,
                y : 65,
                duration : 1,
                delay : .3,
                ease: "back",
                scrollTrigger : {
                    trigger : secondPhoto.current,
                    start : 'top center-=50',
                    toggleActions: 'play none none none',
                 
                }
        })

        gsap.fromTo( descriptionRefTwo.current, {
            autoAlpha : 0,
            x : 0,
            y : -200,
        },
            {
                autoAlpha: 1,
                x : 0,
                y : 0,
                duration : 1,
                delay : .5,
                ease: "back",
                scrollTrigger : {
                    trigger : secondPhoto.current,
                    start : 'top center-=50',
                    toggleActions: 'play none none none',
                 
                }
        })

    }, [])


 

    return (
        <div className = 'history-two-container panel' id = 'history-two' ref = {historyTwo} >
            <img className = 'history-two-image remove-image' src={require("../photos/pizza-oven.jpeg").default} alt="" ref = {secondPhoto}/>
            <div className="history-two-info-holder" ref = {secondExplanation}>
                <h3 className = 'history-two-title'  >A New Business</h3>
                <h4 className = 'history-two-year'>1946</h4>
                <p className = 'history-two-text' ref = {descriptionRefTwo}> Upon return from the war, the first thing Jimmy did was marry his high-school sweetheart, Gertrude. The second thing he did was purchase a wood-fire oven and open Jimmys Pizzaria, at the corner of Coxwell and Gerrard. With tireless experimentation, it was at this point Jimmy created his now infamous double layed crust. </p>
            </div>
        </div>
    )
}

export default HistoryTwo
