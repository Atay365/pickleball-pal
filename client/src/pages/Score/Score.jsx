import axios from "axios";
import ScoreTracker from "../../components/ScoreTracker/ScoreTracker";
import { useEffect, useState } from "react";
import GameHistory from "../../components/GameHistory/GameHistory";

const userID = sessionStorage.getItem("userID");

const Score = () => {
  const [gameHistory, setGameHistory] = useState([]);
  const fetchGames = async () => {
    const response = await axios.get(`http://localhost:5050/score/${userID}`);
    setGameHistory(response.data);
    console.log(response.data);
    console.log(userID);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  console.log(gameHistory);

  return (
    <>
      <main>
        <ScoreTracker userId={userID} />
        <GameHistory gameHistory={gameHistory} />
      </main>
    </>
  );
};

export default Score;
