import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <div className="header">
    <h1 className="header-title">Bookstore CMS</h1>
    <NavLink className="books" to="/">
      BOOKS
    </NavLink>
    <NavLink className="categories" to="/categories">
      CATEGORIES
    </NavLink>
  </div>
);

export default Header;
