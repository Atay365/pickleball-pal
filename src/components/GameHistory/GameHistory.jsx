import "./GameHistory.scss";

function GameHistory({ gameHistory }) {
  return (
    <>
      <section className="courts">
        <ul className="courts__list">
          <li className="courts__item-1 courts__item-header-1">
            <p className="courts__info-1">Date</p>
            <p className="courts__info-1">Opponent</p>
            <p className="courts__info-1">Score</p>
            <p className="courts__info-1">W/L</p>
          </li>
          {gameHistory.map((game) => {
            const formattedDate = new Date(game.date).toLocaleDateString(
              "en-US",
              { month: "2-digit", day: "2-digit", year: "numeric" }
            );
            return (
              <li className="courts__item-1" key={game.id}>
                <p className="courts__info-1">{formattedDate}</p>
                <p className="courts__info-1">{game.opponent}</p>
                <p className="courts__info-1">{game.score}</p>
                <p className="courts__info-1">{!game.win ? "Loss" : "Win"}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default GameHistory;
