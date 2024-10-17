import React from 'react';
import './productCard.css';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
