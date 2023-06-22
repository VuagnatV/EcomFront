import React, { useState, useContext, useEffect } from 'react';
import { SessionContext } from '../../context/SessionContext';
import OrderCard from '../../components/OrderCard/OrderCard';
import axios from 'axios';
import './Order.css';

const Order = () => {


    const [orders, setOrders] = useState([]);
    const [session] = useContext(SessionContext);

    useEffect(() => {

        if (session?.loggedIn) {
            axios.get("https://ecom-api-ctiy.onrender.com/api/v1/order/" + session.id)
                .then((response) => {
                    setOrders(response.data);
                })
                .catch((err) => {
                    alert(err.response.data.error);
                })
        }

    }, [orders]);

    return (
        <div className="order-page">
            <h2>Order History</h2>
            <div className="order-list">
                {!session?.loggedIn
                    ? <p> not logged in </p>
                    : (!orders
                        ? <p>loading</p>
                        : orders.map((order) => (
                            <OrderCard key={order.id} order={order} />
                        )))}
            </div>
        </div>
    );
};

export default Order;