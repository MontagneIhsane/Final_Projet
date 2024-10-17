import React from 'react';
import ProductCard from './productCard';
import './productGallery.css'

const ProductGallery = () => {
    const products = [
        { id: 1, name: 'One Million', price: '$75', image: 'one-million.jpg' },
        { id: 2, name: 'Bleu de Chanel', price: '$70', image: 'bleu-de-chanel.jpg' },
        { id: 3, name: 'Irresistible', price: '$100', image: 'irresistible.jpg' },
        { id: 4, name: 'Jean Paul Gaultier', price: '$90', image: 'JP-Gaultier.webp' },
    ];

    const addToCart = (product) => {
        console.log(`${product.name} has been added to the cart.`);
    };

    return (
        <div className="product-gallery">
            {products.map((prod) => (
                <ProductCard key={prod.id} product={prod} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductGallery;

