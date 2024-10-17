import React, { useState } from 'react';
import ProductGallery from './compoents/productGallery';
import CartModal from './compoents/cartMadal';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './compoents/shoppingCart';
import './App.css';
import './compoents/header.css';


const App = () => {
    const [products] = useState([
        { id: 1, name: 'One Million', price: '$1000000', image: 'one-million.jpg' },
        { id: 2, name: 'Jean Paul Gaultir', price: '$95', image: 'JP-Gaultier.webp' },
        { id: 3, name: 'Irresistible', price: '$80', image: 'irresistible.jpg' },
        { id: 4, name: 'Bleu de chanel', price: '$85', image: 'bleu-de-chanel.jpg' }
    ]);

    const [cart, setCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const clearCart = () => {
        setCart([]); // Réinitialiser le panier
    };

    return (
        <div>
            <header>
                <h1>My Shop</h1>
                <FaShoppingCart onClick={toggleModal} style={{ cursor: 'pointer', fontSize: '24px', color:'light-brown' }} />
            </header>
            <br />

            <ProductGallery products={products} addToCart={addToCart} />

            {isModalOpen && (
                <CartModal cartItems={cart} onClose={toggleModal} clearCart={clearCart} />
            )}
        </div>
    );
};

export default App;
