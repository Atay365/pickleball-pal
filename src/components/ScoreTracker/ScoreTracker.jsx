import "./ScoreTracker.scss";
import axios from "axios";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";

const baseURL = import.meta.env.VITE_API_URL;

function ScoreTracker({ userID, onGameSubmission }) {
  const [score, setScore] = useState({ user: 0, opponent: 0 });
  const [opponentName, setOpponentName] = useState("");

  const [userId, setUserId] = useState("");

  useEffect(() => {
    const grabUserId = sessionStorage.getItem("userID");
    if (grabUserId) {
      setUserId(grabUserId);
    } else {
      alert("Please log in first.");
      return;
    }
  }, []);

  const handleScoring = (player, increment) => {
    setScore((prevScore) => ({
      ...prevScore,
      [player]: prevScore[player] + increment,
    }));
  };

  const handleSubmit = async () => {
    if (score.user < 11 && score.opponent < 11) {
      alert(
        "Score must be 11 for one of the players in order to submit...Keep playing!"
      );
      return;
    } else if (!opponentName) {
      alert("Please enter your opponents name or names for the game to submit");
      return;
    }

    const result = {
      //   user_id: userId, // Will have to come back to this one. Hopefully I can pass as prop
      win: score.user > score.opponent,
      opponent: opponentName,
      score: `${score.user}-${score.opponent}`,
      date: new Date().toISOString().split("T")[0],
      user_id: userId,
    };
    // console.log(result);

    try {
      const postGame = await axios.post(`${baseURL}/score/${userId}`, result);
      alert("Game saved successfully!");

      //   The below is what is resetting the game
      setScore({ user: 0, opponent: 0 });
      setOpponentName("");
      onGameSubmission();
    } catch (error) {
      console.log("Failed to save the game:", error);
    }
  };

  return (
    <>
      <section className="score">
        <div className="score__container">
          <h2 className="score__team-titles">You</h2>
          <input
            type="text"
            name="partner"
            className="score__player-input"
            placeholder="Partner's Name"
          />
          <button
            onClick={() => handleScoring("user", 1)}
            className="score__button"
          >
            {score.user}
          </button>
        </div>
        <div className="score__vs">
          <p className="score__vs-text">VS</p>
        </div>
        <div className="score__container">
          <h2 className="score__team-titles">Opponent</h2>
          <input
            type="text"
            name="opponent"
            className="score__player-input"
            placeholder="Opp's Name/s"
            value={opponentName}
            onChange={(e) => setOpponentName(e.target.value)}
          />
          <button
            onClick={() => handleScoring("opponent", 1)}
            className="score__button"
          >
            {score.opponent}
          </button>
        </div>
      </section>
      <div className="score__submit">
        <button onClick={handleSubmit} className="score__submit-button">
          End Match
        </button>
      </div>
    </>
  );
}

export default ScoreTracker;
