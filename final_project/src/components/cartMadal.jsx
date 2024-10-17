import React from 'react';
import './cartModal.css';

const CartModal = ({ cartItems, onClose, clearCart }) => {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', '')); 
            return total + price;
        }, 0).toFixed(2); 
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index}>
                                    {item.name} - {item.price}
                                </li>
                            ))}
                        </ul>
                        <h3>Total: ${calculateTotal()}</h3>
                        {/* Bouton Clear Cart */}
                        <button onClick={clearCart} style={buttonStyle}>
                            Clear Cart
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

// Style pour le bouton Clear Cart
const buttonStyle = {
    backgroundColor: '#f44336', // Couleur rouge
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px', // Espacement en haut
};

export default CartModal;
