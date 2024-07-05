import axios from "axios";
import ScoreTracker from "../../components/ScoreTracker/ScoreTracker";
import { useEffect, useState } from "react";
import GameHistory from "../../components/GameHistory/GameHistory";
import Loading from "../../components/Loading/Loading";

const baseURL = import.meta.env.VITE_API_URL;

const Score = () => {
  const [gameHistory, setGameHistory] = useState([]);
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const [loading, setLoading] = useState(true);

  const userID = sessionStorage.getItem("userID");

  const fetchGames = async () => {
    if (!userID) {
      console.error("User ID not found in session storage");
      return;
    }

    try {
      const response = await axios.get(`${baseURL}/score/${userID}`);
      setGameHistory(response.data);
      setLoading(false);
      // console.log(response.data);
      // console.log(userID);
    } catch (error) {
      console.error("Failed to fetch game history", error);
    }
  };

  useEffect(() => {
    fetchGames();

    // console.log("useEffect triggered");
  }, [fetchTrigger]);

  const handleGameSub = () => {
    console.log("game submitted and updating the fetch trigger");
    setFetchTrigger((prev) => !prev);
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
