import React, {useContext} from 'react';
import { auth } from '../firebase/firebase';
import { GlobalContext } from '../context/globalContext';
import "../css/signup.css"
import UserInfo from "../components/UserInfo";


const SignUp = () => {
    
    const { password, setPassword, email, setEmail, error, setError, hasAccount, setHasAccount, setUserLoggedIn, signInOpen, setSignInOpen, currentUser, setOrderHistory } = useContext(GlobalContext)

    const signUpUser = async(e) => {
        e.preventDefault()
        try{
            await auth.createUserWithEmailAndPassword(email, password)
            setUserLoggedIn(true)
            setEmail('')
            setPassword('')
       

        }catch (err){
            setError(err.message)
            setTimeout(()=>{
                setError('')
                setEmail('')
                setPassword('')
            }, 4500)
        }

    }  

    const logInUser = async(e) =>{
        e.preventDefault()
        try{
            await auth.signInWithEmailAndPassword(email, password)
            setUserLoggedIn(true)
            setEmail('')
            setPassword('')
            
        }catch (err) {
            setError(err.message)
            setTimeout(()=>{
                setError('')
                setEmail('')
                setPassword('')
            }, 4500)
        }
    }
    
    const toggleAccount = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setHasAccount( (p) => !p)
    }

    const logOut = async () => {
        try{
            await auth.signOut()
            setUserLoggedIn(false)
            setOrderHistory([])
        } catch (err) {
            setError(err.message)
            setTimeout(()=>{
                setError('')
                setEmail('')
            }, 4500)
        }
    }

    const closeSignIn = () => {
        let item = document.querySelector("html");
        item.style.overflowY = 'scroll';
        setSignInOpen(false);
    }

    return (

        <div className =  "form-container" >
           {currentUser ? (
               <UserInfo logOut = {logOut} />
               ) : (
            <>
                <form onSubmit = { hasAccount ?  logInUser : signUpUser}>
                    <h1 className = 'loginTitle'> {hasAccount? "Log In" : "Sign Up"}</h1>
                    <input className = 'loginEmail' autoComplete = 'on' value = {email} type="email" placeholder = 'email' onChange = {(e)=> setEmail(e.target.value)}/>
                    <input className = 'signInEmail' autoComplete = 'on' value = {password} type="password" placeholder = 'password' minLength = {6} onChange = {(e)=> setPassword(e.target.value)}/>
                    <p className = 'signUpError'>{error}</p>
                    <button className = "btn loginButton" type = 'submit'> {hasAccount ? "Login" : "Sign Up"}</button>
                    <button className = 'btn toggleHasAccount' onClick = {toggleAccount}>{hasAccount ?  `Need an Accout? Sign Up` : `Already have an Account? Log In`} </button>
                </form>
            </>
            )} 
            <button className = 'btn close-sign-in' onClick = {closeSignIn}><i className = 'fas fa-times'/></button>

        </div>
    )
    
}

export default SignUp
