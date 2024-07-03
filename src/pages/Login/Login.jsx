import Input from "../../components/Input/Input.jsx";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./Login.scss";

const baseURL = import.meta.env.VITE_API_URL;

function Login() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${baseURL}/users/login`, {
        email: event.target.email.value,
        password: event.target.password.value,
      });

      console.log(response);

      const token = response.data.token;
      const userId = response.data.user;

      // ! Move to local storage
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("userID", userId);

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
