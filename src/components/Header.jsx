import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to={'/'} className="navbar-brand">
          <h1>CRUD - REACT * REDUX * FIREBASE</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to={'/productos/nuevo'} className="btn btn-info">
                <strong>AGREGAR PRODUCTO &#43;</strong>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
