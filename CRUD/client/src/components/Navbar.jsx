import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/">
            <h6>Inicio</h6>
          </Link>
          <Link className="link" to="/?cat=acerca">
            <h6>Acerca de Nosotros</h6>
          </Link>
          <Link className="link" to="/?cat=servicios">
            <h6>Servicios</h6>
          </Link>
          <Link className="link" to="/?cat=testimonios">
            <h6>Testimonios</h6>
          </Link>
          <Link className="link" to="/?cat=blog">
            <h6>Blog</h6>
          </Link>          
          <span className="write">
            <Link className="link" to="/write">
              Postea
            </Link>
          </span>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout} id="logoutButton">Salir</span>
          ) : (
            <Link className="link" id="loginButton" to="/login">
              Ingresar
            </Link>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
