import axios from "axios";
import ScoreTracker from "../../components/ScoreTracker/ScoreTracker";
import { useEffect, useState } from "react";
import GameHistory from "../../components/GameHistory/GameHistory";
import Loading from "../../components/Loading/Loading";

const baseURL = import.meta.env.VITE_API_URL;

const userID = sessionStorage.getItem("userID");

const Score = () => {
  const [gameHistory, setGameHistory] = useState([]);
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const [loading, setLoading] = useState(true);

  const userID = sessionStorage.getItem("userID");

  const fetchGames = async () => {
    const response = await axios.get(`${baseURL}/score/${userID}`);
    setGameHistory(response.data);
    setLoading(false);
    // console.log(response.data);
    // console.log(userID);
  };

  useEffect(() => {
    if (userID) {
      fetchGames();
    }
    // console.log("useEffect triggered");
  }, [fetchTrigger, userID]);

  const handleGameSub = () => {
    console.log("game submitted and updating the fetch trigger");
    setFetchTrigger(!fetchTrigger);
  };

  // console.log(gameHistory);
  if (loading) {
    <Loading />;
  }

  return (
    <>
      <main>
        <ScoreTracker userId={userID} onGameSubmission={handleGameSub} />
        <GameHistory gameHistory={gameHistory} />
      </main>
    </>
  );
};

export default Score;
