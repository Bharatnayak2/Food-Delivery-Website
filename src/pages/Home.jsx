import { useState, useCallback } from 'react';
import FoodCard from '../components/FoodCard';
import './Home.css';

const FOOD_ITEMS = [
  { id: 1, name: 'Margherita Pizza', emoji: '🍕', category: 'Pizza', price: 299, description: 'Classic pizza with fresh mozzarella' },
  { id: 2, name: 'Pepperoni Pizza', emoji: '🍕', category: 'Pizza', price: 349, description: 'Spicy pizza with pepperoni toppings' },
  { id: 3, name: 'Biryani', emoji: '🍚', category: 'Indian', price: 249, description: 'Aromatic rice with spiced meat' },
  { id: 4, name: 'Butter Chicken', emoji: '🍗', category: 'Indian', price: 199, description: 'Creamy tomato-based chicken curry' },
  { id: 5, name: 'Cheeseburger', emoji: '🍔', category: 'Burger', price: 179, description: 'Juicy beef patty with melted cheese' },
  { id: 6, name: 'Veggie Burger', emoji: '🍔', category: 'Burger', price: 149, description: 'Fresh vegetable patty burger' },
  { id: 7, name: 'Pad Thai', emoji: '🍜', category: 'Asian', price: 199, description: 'Stir-fried noodles with peanuts' },
  { id: 8, name: 'Sushi Roll', emoji: '🍣', category: 'Asian', price: 299, description: 'Fresh fish and vegetable rolls' },
  { id: 9, name: 'Caesar Salad', emoji: '🥗', category: 'Salad', price: 129, description: 'Crisp lettuce with parmesan' },
  { id: 10, name: 'Momos', emoji: '🥟', category: 'Indian', price: 89, description: 'Steamed dumplings with filling' },
];

function Home() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(FOOD_ITEMS.map(item => item.category))];

  const filteredItems = selectedCategory === 'All' 
    ? FOOD_ITEMS 
    : FOOD_ITEMS.filter(item => item.category === selectedCategory);

  const handleAddToCart = useCallback((food) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === food.id);
      let newCart;
      if (existingItem) {
        newCart = prevCart.map(item =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        newCart = [...prevCart, { ...food, quantity: 1 }];
      }
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to FoodHub</h1>
        <p>Order delicious food from your favorite restaurants</p>
      </div>

      <div className="category-filter">
        <h2>Categories</h2>
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="items-grid">
        {filteredItems.map(food => (
          <FoodCard
            key={food.id}
            food={food}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;