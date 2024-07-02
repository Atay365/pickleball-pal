import "./ProfileHistoryChart.scss";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProfileHistoryChart = ({ gameHistory }) => {
  const gamesByDate = gameHistory.reduce((acc, game) => {
    // Below had to be reworked to combine the timestamps into dates to show all that matched date
    //  If not it shows each entry as a new bar because its still reading the times.
    const date = new Date(game.date).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = { wins: 0, losses: 0 };
    }
    if (game.win) {
      acc[date].wins += 1;
    } else {
      acc[date].losses += 1;
    }
    return acc;
  }, {});

  const labels = Object.keys(gamesByDate);
  const wins = labels.map((date) => gamesByDate[date].wins);
  const losses = labels.map((date) => gamesByDate[date].losses);

  const data = {
    labels,
    datasets: [
      {
        label: "Wins",
        data: wins,
        backgroundColor: "#597e52",
      },
      {
        label: "Losses",
        data: losses,
        backgroundColor: "#8B0000",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Game History" },
    },
    maintainAscpectRatio: false,
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default ProfileHistoryChart;
