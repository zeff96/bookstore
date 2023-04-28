import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-white">
      <div className="container">
        <NavLink to="/" className="navbar-brand text-primary fw-bold fs-3">
          Bookstore CMS
        </NavLink>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#mynav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mynav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                BOOKS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-light" to="/categories">
                CATEGORIES
              </NavLink>
            </li>
          </ul>
          <div className="ms-auto">
            <ImUser
              className=" text-primary fs-5 border rounded-circle p-2"
              style={{ width: '2rem', height: '2rem' }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
