import React from 'react';
import './CartItemCard.css'

const CartItemCard = ({ product, onButtonClick }) => {

    return (
        <div className="cart-item-card">
            <div className="item-details">
                <p className="item-name">{product.name}</p>
                <p className="item-price">{product.price} $</p>
            </div>
            <button className="delete-button" onClick={onButtonClick}>
                Delete
            </button>
        </div>
    );
};

export default CartItemCard;