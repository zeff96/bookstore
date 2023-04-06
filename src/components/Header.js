import { NavLink } from 'react-router-dom';
import './Header.scss';
import { BiUserCircle } from 'react-icons/bi';

const Header = () => (
  <div className="header">
    <h1 className="header-title">Bookstore CMS</h1>
    <NavLink className="books" to="/">
      BOOKS
    </NavLink>
    <NavLink className="categories" to="/categories">
      CATEGORIES
    </NavLink>
    <span className="user-icon">
      <BiUserCircle />
    </span>
  </div>
);

export default Header;
