import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <form>
      <h1>Registro</h1>
        <input
          required
          type="text"
          placeholder="Nombre de Usuario"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="Correo electrónico"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          ¿Ya tienes una cuenta? <Link to="/login">Ingresar</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
