import React, { useContext } from 'react'
import '../css/orderhistory.css'
import { GlobalContext } from '../context/globalContext'

const OrderHistory = () => {

    const { orderHistory } = useContext(GlobalContext);

    const totalSpent = orderHistory.reduce( (total, acc) => {
        return  total += acc.data.orderTotal    
    },0)

    return (
        <div className="userInfo-previous-orders">  
            <h3 className="previous-orders-title">Your Order History</h3>
            <div className="single-orders-container">
                <div className = 'single-order-titles'>
                    <p className = 'single-order-titles-date'>Date</p>
                    <p className = 'single-order-titles-order'>Order</p>
                    <p className = 'single-order-titles-price'>Total Price</p>
                </div>
                {orderHistory.map((order) => {
                            return(
                                <div key = {order.id} className="single-order">
                                    <p className = 'single-order-date'>{ order.data.orderTime ? order.data.orderTime.toDate().toDateString() : new Date().toDateString}</p>
                                    <p className = 'single-order-items'>{order.data.orderItems.join(', ')}</p>
                                    <p className = 'single-order-total'>$ {order.data.orderTotal}</p>
                                </div>
                                )}
                        )} 
            </div>
            <div className="order-stats">
                    <p>Number of Orders : <span>{orderHistory.length}</span></p>
                    <p>Total Spent : <span>$ {totalSpent.toFixed(2)}</span></p>
            </div>
        </div>
    )
}

export default OrderHistory
