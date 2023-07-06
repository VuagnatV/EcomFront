import React, { useState, useEffect, useContext } from 'react';
import CartItemCard from '../../components/CartItemCard/CartItemCard';
import { SessionContext } from '../../context/SessionContext';
import axios from 'axios';

const Cart = () => {

    const [cartItems, setCartItems] = useState([]);
    const [session] = useContext(SessionContext);

    useEffect(() => {

        if (session?.loggedIn) {
            axios.get("https://ecom-api-ctiy.onrender.com/api/v1/cart/" + session.id)
                .then((response) => {
                    setCartItems(response.data);
                })
                .catch((err) => {
                    alert(err.response.data.error);
                })
        }

    }, [cartItems]);

    const handleDeleteCart = async () => {
        if (cartItems.length === 0) {
            alert("your cart is empty")
        } else {
            try {
                await axios.delete(`https://ecom-api-ctiy.onrender.com/api/v1/cart/${session.id}`);
                alert("successfully deleted from the cart")
            } catch (error) {
                // Handle any errors that occurred during the API call
                alert(error.response.data.error)
            }
        }

    }

    const handleOrder = async () => {
        if (cartItems.length === 0) {
            alert("your cart is empty")
        } else {
            try {
                await axios.post(`https://ecom-api-ctiy.onrender.com/api/v1/order/${session.id}`, cartItems);
                alert("successfully placed the order")
            } catch (error) {
                // Handle any errors that occurred during the API call
                alert(error.response.data.error)
            }

            handleDeleteCart()
        }
    }

    const handleDeleteCartItem = async (id) => {

        try {
            await axios.delete(`https://ecom-api-ctiy.onrender.com/api/v1/cart/${session.id}/${id}`);
            alert("successfully deleted from the cart")
        } catch (error) {
            // Handle any errors that occurred during the API call
            alert(error.response.data.error)
        }
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>

            {!session?.loggedIn
                ? (<p>You must log in to acces your cart</p>)
                : (
                    !cartItems ? (
                        <p>Loading</p>
                    ) : (
                        cartItems.length === 0
                            ? <p>Your cart is empty</p>
                            :
                            <div>
                                <button onClick={() => handleDeleteCart()}> Delete ALL </button>
                                <button onClick={() => handleOrder()}> Place order </button>
                                {cartItems.map((item) => (
                                    <CartItemCard key={item.id} product={item} onButtonClick={() => handleDeleteCartItem(item.id)} />
                                ))}
                            </div>
                    )
                )}
        </div>
    );
};

export default Cart;