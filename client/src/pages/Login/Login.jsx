import Input from "../../components/Input/Input.jsx";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./Login.scss";
import Footer from "../../components/Footer/Footer.jsx";

function Login() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5050/users/login", {
        email: event.target.email.value,
        password: event.target.password.value,
      });

      sessionStorage.setItem("token", response.data.token);

      navigate("/profile");
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <>
      <main className="login-page">
        <form className="login" onSubmit={handleSubmit}>
          <h1 className="login__title">Log in</h1>
          <Input type="text" name="email" label="Email" />
          <Input type="password" name="password" label="Password" />
          <button className="login__button">Log in</button>
          {error && <div className="login__message">{error}</div>}
        </form>
        <p>
          Need an account? <Link to="/signup">Sign up</Link>
        </p>
      </main>
    </>
  );
}

export default Login;
