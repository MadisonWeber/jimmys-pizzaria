import React, { useContext } from 'react';
import "../css/userInfo.css";
import { GlobalContext } from '../context/globalContext';
import LogoutBtn from '../components/LogoutBtn'
import OrderHistory from '../components/OrderHistory'

const UserInfo = ({logOut}) => {

    const {currentUser, orderHistory} = useContext(GlobalContext);


    return (
        <div className = 'userInfo-container'>
            <h4 className = 'success-signedIn'>You are signed in as <span>{currentUser.email}</span></h4>
            {orderHistory.length >= 1 ? <OrderHistory /> : <p className = 'no-previous'>No Previous Orders</p>}
            <LogoutBtn logOut = {logOut}/>
        </div>
    )
}

export default UserInfo
