import "./Profile.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profilePic from "../../assets/icons/Profile.svg";

function Profile() {
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);
  const [totalWins, setTotalWins] = useState(0);
  const [userRank, setUserRank] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const token = sessionStorage.getItem("token");

      if (!token) {
        return setFailedAuth(true);
      }

      // console.log(token);

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
        // console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
        setFailedAuth(true);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userId = sessionStorage.getItem("userID");

        if (userId) {
          const response = await axios.get(
            `http://localhost:5050/score/profile/${userId}`
          );
          // console.log(response.data);
          setTotalWins(response.data.totalWins);
          setUserRank(response.data.rank);
        } else {
          console.error("Couldnt find user id in session storage");
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchProfileData();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userID");
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
        src={profilePic}
        alt="Image Description"
      />

      <p>
        Welcome back, {user.first_name} {user.last_name}
      </p>

      <h2 className="profile__subtitle">My Info</h2>
      <p>Email: {user.email}</p>
      <section className="achievements__container">
        <div className="achievements">
          Current Rank <p className="achievements__info">{userRank}</p>
        </div>
        <div className="achievements">
          Total Wins <p className="achievements__info">{totalWins}</p>
        </div>
      </section>
      <div className="achievements achievements--history">History</div>

      <button className="profile__logout" onClick={handleLogout}>
        Log out
      </button>
    </main>
  );
}

export default Profile;
