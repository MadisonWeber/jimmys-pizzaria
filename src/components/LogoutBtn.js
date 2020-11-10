import React from 'react'
import "../css/logoutbtn.css"


const LogoutBtn = ({logOut}) => {
    return (
        <>
            <button className = 'btn logoutBtn' onClick = {logOut}>Log Out</button>
        </>
    )
}

export default LogoutBtn
