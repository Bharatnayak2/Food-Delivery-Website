import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const DELIVERY_FEE = 50;

function Cart() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [notification, setNotification] = useState('');

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
      return;
    }
    const updated = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const removeItem = (itemId) => {
    const updated = cartItems.filter(item => item.id !== itemId);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalTotal = total + DELIVERY_FEE;

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      setNotification('Cart is empty!');
      setTimeout(() => setNotification(''), 3000);
      return;
    }
    const order = {
      id: Date.now(),
      items: cartItems,
      total: finalTotal,
      timestamp: new Date().toLocaleString(),
      status: 'Confirmed'
    };
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    setCartItems([]);
    localStorage.setItem('cart', JSON.stringify([]));
    setNotification('Order placed successfully!');
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      
      {notification && <div className="notification">{notification}</div>}
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/" className="continue-btn">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <span className="item-emoji">{item.emoji}</span>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>₹{item.price} each</p>
                  </div>
                </div>
                <div className="item-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                  <span className="quantity">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <span className="item-total">₹{item.price * item.quantity}</span>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>🗑️</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>₹{total}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee:</span>
              <span>₹{DELIVERY_FEE}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>₹{finalTotal}</span>
            </div>
            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
            <Link to="/" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;