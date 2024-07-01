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
  const labels = gameHistory.map((game) =>
    new Date(game.date).toLocaleDateString()
  );
  const wins = gameHistory.map((game) => (game.win ? 1 : 0));
  const losses = gameHistory.map((game) => (game.win ? 0 : 1));

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
