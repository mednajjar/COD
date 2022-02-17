import React, { useEffect, useState } from 'react'
import axios from 'axios';
axios.defaults.withCredentials = true;

const Orders = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        return async () => {
            const { data } = await axios.get('http://localhost:5000/api/getClientOrders');
            if (data) setOrders(data)
        }
    }, [])
    console.log('orders ==> ', orders)
    return (
        <div>
            <div className="App">
                <h1>orders</h1>
            </div>
            {
                orders.length > 0 && orders.map((res, i)=>(<div key={i}><h2>title : {res.title}</h2><h3>total : {res.cartTotal}</h3></div>))
            }
        </div>
    )
}

export default Orders
