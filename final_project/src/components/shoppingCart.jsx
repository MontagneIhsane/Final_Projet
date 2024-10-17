import './shoppingCart.css';

const ShoppingCart = ({ cartItems }) => (
    <div className="shopping-cart">
    <h2>Your Cart</h2>
    {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
    ) : (
        cartItems.map((item) => (
        <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
        </div>
        ))
    )}
    </div>
);