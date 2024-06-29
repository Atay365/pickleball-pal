import "./ScoreTracker.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = import.meta.VITE_API_URL;

function ScoreTracker({ userId }) {
  [score, setScore] = useState({ user: 0, opponent: 0 });
  [opponentName, setOpponentName] = useState("");
  [win, setWin] = useState(null);
  [userId, setUserId] = useState("");

  useEffect(() => {
    const grabUserId = sessionStorage.getItem("userID");
    if (grabUserId) {
      setUserId(grabUserId);
    } else {
      alert("Please log in first.");
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
    } else if (!opponentName) {
      alert("Please enter your opponents name or names for the game to submit");
    }

    const result = {
      //   user_id: userId, // Will have to come back to this one. Hopefully I can pass as prop
      win: score.user === 11,
      opponent: opponentName,
      score: `${score.user}-${score.opponent}`,
      date: new Date().toISOString.split("T")[0],
      user_id: userId,
    };

    try {
      const postGame = await axios.post(`${API_URL}/score/${userId}`, result);
      alert("Game saved successfully!");

      //   The below is what is resetting the game
      setScore({ user: 0, opponent: 0 });
      setOpponentName("");
      setWin(null);
    } catch (error) {
      console.log("Failed to save the game:", error);
    }
  };

  return (
    <>
      <section>
        <div>
          <h2>You</h2>
          <input type="text" name="partner" />
          <button onClick={() => handleScoring(user, 1)}>{score.user}</button>
        </div>
        <div>
          <h2>Opponent</h2>
          <input
            type="text"
            name="opponent"
            value={opponentName}
            onChange={(e) => setOpponentName(e.target.value)}
          />
          <button onClick={() => handleScoring(opponent, 1)}>
            {score.opponent}
          </button>
        </div>
      </section>
      <div>
        <button onSubmit={handleSubmit}>End Match</button>
      </div>
    </>
  );
}

export default ScoreTracker;
