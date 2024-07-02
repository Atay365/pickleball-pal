import "./Profile.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profilePic from "../../assets/icons/Profile.svg";
import rank1 from "../../assets/icons/Rank1.svg";
import rank2 from "../../assets/icons/Rank2.svg";
import rank3 from "../../assets/icons/Rank3.svg";
import rank4 from "../../assets/icons/Rank4.svg";
import rank5 from "../../assets/icons/Rank5.svg";
import rank6 from "../../assets/icons/Rank6.svg";
import ProfileHistoryChart from "../../components/ProfileHistoryChart/ProfileHistoryChart";

const baseURL = import.meta.env.VITE_API_URL;

function Profile() {
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);
  const [totalWins, setTotalWins] = useState(0);
  const [userRank, setUserRank] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const token = sessionStorage.getItem("token");

      if (!token) {
        return setFailedAuth(true);
      }

      // console.log(token);

      try {
        // Get the data from the API
        const { data } = await axios.get(`${baseURL}/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
            `${baseURL}/score/profile/${userId}`
          );
          // console.log(response.data);
          setTotalWins(response.data.totalWins);
          setUserRank(response.data.rank);

          const gameHistoryResponse = await axios.get(
            `${baseURL}/score/history/${userId}`
          );
          setGameHistory(gameHistoryResponse.data);
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
        <h2>You must be logged in to see this page.</h2>
        <p className="Profile__button">
          <Link to="/login">
            <button className="Profile__button">Log in</button>
          </Link>
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
      <div className="profile__header">
        <img
          className="profile__image"
          src={profilePic}
          alt="Image Description"
        />
      </div>

      <p>
        Welcome back, {user.first_name} {user.last_name}
      </p>

      <h2 className="profile__subtitle">My Info</h2>
      <p>Email: {user.email}</p>
      <section className="achievements__container">
        <div className="achievements">
          <p className="achievements__info-title">Current Rank</p>{" "}
          <p className="achievements__info">{userRank}</p>
        </div>
        <div className="achievements">
          <p className="achievements__info-title">Total Wins</p>{" "}
          <p className="achievements__info">{totalWins}</p>
        </div>
        <div className="achievements">
          <p className="achievements__info-title">Prestige</p>
          {totalWins >= 500 ? (
            <img src={rank6} className="achievements__badge" />
          ) : null}
          {totalWins >= 200 ? (
            <img src={rank5} className="achievements__badge" />
          ) : null}
          {totalWins >= 100 ? (
            <img src={rank4} className="achievements__badge" />
          ) : null}
          {totalWins >= 50 ? (
            <img src={rank3} className="achievements__badge" />
          ) : null}
          {totalWins >= 10 ? (
            <img src={rank2} className="achievements__badge" />
          ) : null}
          {totalWins >= 1 ? (
            <img src={rank1} className="achievements__badge" />
          ) : null}
        </div>
      </section>
      <div className="achievements achievements--history">
        <ProfileHistoryChart gameHistory={gameHistory} className="chart" />
        <button className="profile__logout" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </main>
  );
}

export default Profile;
