/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useContext } from 'react'
import "../css/historyOne.css"
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlobalContext } from '../context/globalContext'

const HistoryOne = () => {
    
    if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }

    const { setCurrentSection } = useContext(GlobalContext)

    const pictureRef = useRef(null)
    const explanationRef = useRef(null)
    const titleRef = useRef(null)


    useEffect(()=> {

        gsap.fromTo( pictureRef.current, {
            autoAlpha : 0,
            x : -250},
            {
                autoAlpha: 1,
                x : 0,
                y : -50,
                ease : 'back',
                duration : 1.2,
                scrollTrigger : {
                    trigger : pictureRef.current,
                    start : 'top center+=50',
                    toggleActions: 'play none none none',
                    onEnter : ()=> {setCurrentSection('historyOne')},
                    onEnterBack : () => {setCurrentSection('historyOne')},
                    onLeaveBack : () => {setCurrentSection('landing')}
                    
                }
        })
       
        gsap.fromTo( explanationRef.current, {
            autoAlpha : 0,
            x : 150},
            {
                autoAlpha: 1,
                x :  0,
                y : -60,
                ease : 'back',
                duration : 1.5,

                scrollTrigger : {
                    trigger : pictureRef.current,
                    start : 'top center-=50',
                    toggleActions: 'play none none none',
                }
        })

        gsap.fromTo( titleRef.current, {
            autoAlpha : 0,
            y : -150},
            {
                autoAlpha: 1,
                x :  0,
                y : 0,
                ease : 'back',
                duration : 1,
                delay : .5, 
               
                scrollTrigger : {
                    trigger : pictureRef.current,
                    start : 'top center-=50',
                    toggleActions: 'play none none none',
                }
        })


    }, [])


    
    return (
        <div className = 'history-one-container panel' id = 'history-one'>
            <div className="history-one-info-holder" ref = {explanationRef}>
                <h3 className = 'history-one-title' ref = {titleRef}>Humble Beginnings</h3>
                <h4 className = 'history-one-year'>1944</h4>
                <p className = 'history-one-text' >In 1944 <span className = 'black'>Jimmy Piazza</span> was fighting for the Candian 2nd infantry in Caen, where we was shot in the foot. He was removed from action and placed with other wounded in the kitchen, to help prepare food for the active troops. 
                Using fresh tomato from the fields of France, this is where Jimmy's passion for cooking Pizza blossomed.</p>
            </div>
            <img className = 'history-one-image remove-image' src={require("../photos/canada.jpg").default} alt="" ref = {pictureRef}/>
        </div>
    )
}

export default HistoryOne
