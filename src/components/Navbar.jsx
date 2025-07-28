// Archivo: src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? 'nav-link active font-weight-bold' : 'nav-link';

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/imagenes/maniqui.png" alt="ModaSur" height="30" className="mr-2" />
          ModaSur
        </Link>

        {/* Botón hamburguesa para Bootstrap 4.5 */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú colapsable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className={isActive('/')} to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/productos')} to="/productos">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/nosotros')} to="/nosotros">Sobre Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/contacto')} to="/contacto">Contáctenos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
