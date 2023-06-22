import React from "react";
import axios from "axios";
import './ProductCard.css'

const ProductCard = ({ product, id }) => {

    console.log(product.img)

    const handleButtonClick = async () => {
        if (!id) {
            alert("you must be logged in !")
        } else {
            try {
                await axios.put(`https://ecom-api-ctiy.onrender.com/api/v1/cart/${id}`, { productId: product.id });
                alert("succefully added to the cart")
            } catch (error) {
                alert(error.response.data.error)
            }
        }
    };

    return (

        <div className="product-card">
            <div className="product-card-image">
                <img src={product.imgURL} alt={product.name} />
            </div>
            <div className="product-card-details">
                <h2 className="product-card-name">{product.name}</h2>
                <p className="product-card-description">{product.description}</p>
                <p className="product-card-price">${product.price}</p>
                <button className="add-to-cart-button" onClick={handleButtonClick}>
                    Add to Cart
                </button>
            </div>
        </div>


    );
};
/*<div className="product-card">
            <h2>{product.name}</h2>
            <img src={product.imgURL} alt={product.name} />
            <p>{product.description}</p>
            <p>{product.price} $</p>
            <button onClick={handleButtonClick}>Add to Cart</button>
        </div>*/

export default ProductCard;