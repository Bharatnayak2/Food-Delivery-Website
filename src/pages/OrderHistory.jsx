import { useState, useEffect } from 'react';
import './OrderHistory.css';

function OrderHistory() {
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('orders');
    return saved ? JSON.parse(saved) : [];
  });

  if (orders.length === 0) {
    return (
      <div className="orders-container">
        <h1>Order History</h1>
        <div className="no-orders">
          <p>No orders yet. Start ordering now!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-container">
      <h1>Order History</h1>
      <div className="orders-list">
        {orders.map((order, index) => (
          <div key={index} className="order-card">
            <div className="order-header">
              <div>
                <h3>Order #{order.id.toString().slice(-4)}</h3>
                <p className="order-date">{order.timestamp}</p>
              </div>
              <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
            </div>
            
            <div className="order-items">
              <h4>Items:</h4>
              {order.items.map((item, idx) => (
                <div key={idx} className="order-item">
                  <span>{item.emoji} {item.name}</span>
                  <span>x{item.quantity}</span>
                  <span className="price">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            
            <div className="order-total">
              <span>Total Amount:</span>
              <span>₹{order.total}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;