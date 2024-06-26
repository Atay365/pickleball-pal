import "./Profile.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const token = sessionStorage.getItem("token");

      if (!token) {
        return setFailedAuth(true);
      }

      console.log(token);

      try {
        // Get the data from the API
        const { data } = await axios.get(
          "http://localhost:5050/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
        setFailedAuth(true);
      }
    };
    loadData();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setUser(null);
    setFailedAuth(true);
  };

  if (failedAuth) {
    return (
      <main className="Profile">
        <p>You must be logged in to see this page.</p>
        <p>
          <Link to="/login">Log in</Link>
        </p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="Profile">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="profile">
      <h1 className="profile__title">Profile</h1>
      <img
        className="profile__image"
        src="https://www.hollywoodreporter.com/wp-content/uploads/2022/05/tgm-10180r-H-2022-1.jpg?w=1296"
        alt="Image Description"
      />

      <p>
        Welcome back, {user.first_name} {user.last_name}
      </p>

      <h2>My Profile</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p>
      <p>You are a {user.role} </p>
      <button className="profile__logout" onClick={handleLogout}>
        Log out
      </button>
    </main>
  );
}

export default Profile;
