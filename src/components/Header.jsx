import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to={'/'} className="navbar-brand">
          <h1>CRUD-React,Redux </h1>
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={'/'} className="btn btn-warning mr-4">
              <strong>LISTA PRODUCTOS</strong>
            </Link>
            <Link to={'/productos/nuevo'} className="btn btn-info">
              <strong>AGREGAR PRODUCTO &#43;</strong>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
