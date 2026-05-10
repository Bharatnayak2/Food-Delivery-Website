# FoodHub - Food Delivery Website

A modern, fully functional food delivery web application built with React and Vite.

## Features

✨ **Core Features:**
- 🏠 Browse restaurants and food items by category
- 🛒 Add items to cart with quantity management
- 💳 Place orders with order summary
- 📦 View order history with status tracking
- 💾 Persistent cart and orders using localStorage
- 📱 Fully responsive design

## Technology Stack

- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 5.4.1
- **Router:** React Router DOM 6.26.1
- **HTTP Client:** Axios 1.7.7
- **Styling:** CSS3 with modern features
- **State Management:** React Hooks

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── FoodCard.jsx
│   └── FoodCard.css
├── pages/
│   ├── Home.jsx
│   ├── Home.css
│   ├── Cart.jsx
│   ├── Cart.css
│   ├── OrderHistory.jsx
│   └── OrderHistory.css
├── App.jsx
├── App.css
└── main.jsx
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Bharatnayak2/Food-Delivery-Website.git
cd Food-Delivery-Website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features in Detail

### Home Page
- Browse 10+ food items across multiple categories (Pizza, Indian, Burger, Asian, Salad)
- Beautiful card-based UI with emojis
- Quick add to cart functionality
- Responsive grid layout
- Category filtering

### Shopping Cart
- View all cart items with quantities
- Adjust item quantities on the fly
- Remove items from cart
- Real-time total calculation with delivery fee (₹50)
- Order summary before checkout
- Persistent storage of cart items

### Order History
- View all past orders
- Order status tracking
- Itemized order details
- Order timestamps
- Order ID references

## Data Persistence

The application uses browser's localStorage to persist:
- Shopping cart items
- Order history
- User preferences

Data is automatically saved and restored on page refresh.

## Styling Features

Modern CSS with:
- Gradient backgrounds and buttons
- Smooth transitions and animations
- Mobile-first responsive design
- Flexbox and CSS Grid layouts
- Custom CSS variables for consistent theming
- Hover effects and interactive feedback
- Box shadows for depth

## Future Enhancements

- User authentication system
- Backend API integration
- Real-time order tracking with live updates
- Payment gateway integration (Stripe, PayPal)
- Restaurant ratings and reviews
- Favorite items/restaurants
- User profile management with saved addresses
- Delivery location tracking
- Multiple payment methods
- Promotional codes and discounts
- Estimated delivery time

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Author

[Bharatnayak2](https://github.com/Bharatnayak2)

---

Happy ordering! 🍕🍔🍚
