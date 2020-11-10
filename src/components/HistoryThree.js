/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useContext } from 'react'
import "../css/historyThree.css"
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlobalContext } from '../context/globalContext';

const HistoryThree = () => {

    const thirdPhoto = useRef(null)
    const thirdExplanation= useRef(null)
    const { setCurrentSection } = useContext(GlobalContext)

    if (typeof window !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        gsap.core.globals("ScrollTrigger", ScrollTrigger)
    }



    useEffect(() =>{
        gsap.fromTo( thirdExplanation.current, {
            autoAlpha : 0,
            x : -30},
            {
                autoAlpha: 1,
                x : 0,
           
                duration : .6,
                scrollTrigger : {
                    trigger : thirdPhoto.current,
                    start : 'top center+=40',
                    toggleActions: 'play none none none',
                    onEnter : ()=> {setCurrentSection('historyThree')},
                    onEnterBack : () => {setCurrentSection('historyThree')},
                }
        })
       
        gsap.fromTo( thirdPhoto.current, {
            autoAlpha : 0,
            x : 40,
            y: 40},
            {
                autoAlpha: 1,
                x : 0,
                y :0 ,
                duration : 1,
                scrollTrigger : {
                    trigger : thirdPhoto.current,
                    start : 'top center-=50',
                    toggleActions: 'play none none none',
                    
                }
        })


       

    }, [])

    return (
        <div className = 'history-three-container panel' id = 'history-three'>
            <div className="history-three-info-holder" ref = {thirdExplanation}>
                <h3 className = 'history-three-title'>The Next Generation</h3>
                <h4 className = 'history-three-year'>1988</h4>
                <p className = 'history-three-text' > Jimmy's daughter Jessica Piazza takes over the family business. A second location in the west end is added. The person in charge has changed, but the pizza does not. The ingredients are always fresh, and the tomatoes are still brought in weekly from the fields of france. </p>
            </div>
            <img className = 'history-three-image remove-image' src={require("../photos/eating-pizza.jpg").default} alt="" ref = {thirdPhoto}/>
        </div>
    )
}

export default HistoryThree
