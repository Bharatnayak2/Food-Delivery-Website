import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🍕 FoodHub
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">🛒 Cart</Link>
          </li>
          <li className="nav-item">
            <Link to="/orders" className="nav-link">📦 Orders</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;