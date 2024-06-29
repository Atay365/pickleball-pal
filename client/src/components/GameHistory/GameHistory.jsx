import "./GameHistory.scss";

function GameHistory({ gameHistory }) {
  return (
    <>
      <section className="courts">
        <ul className="courts__list">
          <li className="courts__item courts__item-header">
            <p className="courts__info">Date</p>
            <p className="courts__info">Opponent</p>
            <p className="courts__info">Score</p>
            <p className="courts__info">W/L</p>
          </li>
          {gameHistory.map((game) => {
            const formattedDate = new Date(game.date).toLocaleDateString(
              "en-US",
              { month: "2-digit", day: "2-digit", year: "numeric" }
            );
            return (
              <li className="courts__item" key={game.id}>
                <p className="courts__info">{formattedDate}</p>
                <p className="courts__info">{game.opponent}</p>
                <p className="courts__info">{game.score}</p>
                <p className="courts__info">{!game.win ? "Loss" : "Win"}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default GameHistory;
