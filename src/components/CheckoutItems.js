import React from 'react'

const CheckoutItems = ({cartItems, deleteCartItem}) => {
    return (
        <>
        {cartItems.map( (item, index) => {
                    return (
                    <div className="checkout-item" key = {index}>
                        <p className="checkout-item-name">{item.data.name + " " + item.data.type}</p>
                        <p className="checkout-item-price">$ {item.data.price}</p>
                        <button className = 'delete-cart-item' onClick = {() => deleteCartItem(item.id)}>Delete</button>
                    </div>
                    )
                    })}
            
        </>
    )
}

export default CheckoutItems
