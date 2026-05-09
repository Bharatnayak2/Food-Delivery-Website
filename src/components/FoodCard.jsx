import { useCallback } from 'react';
import './FoodCard.css';

function FoodCard({ food, onAddToCart }) {
  const handleAddToCart = useCallback(() => {
    onAddToCart(food);
  }, [food, onAddToCart]);

  return (
    <div className="food-card">
      <div className="food-emoji">{food.emoji}</div>
      <h3 className="food-name">{food.name}</h3>
      <p className="food-category">{food.category}</p>
      <p className="food-description">{food.description}</p>
      <div className="food-footer">
        <span className="food-price">₹{food.price}</span>
        <button className="add-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;