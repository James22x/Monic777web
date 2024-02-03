import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();


  const { login } = useContext(AuthContext);


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="auth">
      <form>
        <h1>Ingreso</h1>
        <input
          required
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Ingresar</button>
        {err && <p>{err}</p>}
        <span>
          ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
