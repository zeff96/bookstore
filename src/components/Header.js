import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <div className="header">
    <h1>Bookstore CMS</h1>
    <NavLink to="/">BOOKS</NavLink>
    <NavLink to="/categories">CATEGORIES</NavLink>
  </div>
);

export default Header;
