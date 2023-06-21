import React from 'react';
import './OrderCard.css';

const OrderCard = ({ order }) => {
    return (
        <div className="order-card">
            <div className="order-id">Order ID: {order.id}</div>
            <div className="product-list">
                {order.orderItems.map((item) => (
                    <div key={item.product.id} className="product-item">
                        <div className="product-name">{item.product.name}</div>
                        <div className="product-price">${item.product.price}</div>
                    </div>
                ))}
            </div>
            <div className="total">Total: {order.total} $</div>
        </div>
    );
};

export default OrderCard;