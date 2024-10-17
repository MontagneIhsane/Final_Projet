import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import './header.css';

const Header = ({ cartItems }) => {
    const [isCartOpen, setCartOpen] = useState(false); 

    const toggleCart = () => {
        setCartOpen(!isCartOpen); 
    };

    return (
        <header className="header">
            <h1 className="header-title">My Product Gallery</h1>
            <div className="header-cart">
                <button onClick={toggleCart} className="cart-link">
                    <FaShoppingCart className="cart-icon" />
                    <span className="cart-count">
                        {cartItems.length} {/* Vérifie que cartItems.length est bien utilisé ici */}
                    </span> 
                </button>

                {isCartOpen && (
                    <div className="cart-popup"> {/* Panneau du panier */}
                        <h2>Your Cart</h2>
                        {cartItems.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <ul>
                                {cartItems.map((item, index) => (
                                    <li key={index}>
                                        {item.name} - {item.price}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <button onClick={toggleCart}>Close</button> {/* Bouton pour fermer le panier */}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
