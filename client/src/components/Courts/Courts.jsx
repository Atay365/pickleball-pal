import "./Courts.scss";

function Courts({ mapData }) {
  return (
    <section className="courts">
      <ul className="courts__list">
        <li className="courts__item courts__item-header">
          <p className="courts__info">Court Name</p>
          <p className="courts__info">Address</p>
          <p className="courts__info">Hours</p>
        </li>
        {mapData.map((map) => (
          <li className="courts__item" key={map.place_id}>
            <p className="courts__info">{map.name}</p>
            <p className="courts__info">{map.vicinity}</p>
            <p className="courts__info">
              {map.opening_hours && map.opening_hours.open_now
                ? "Open Now"
                : "Closed"}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Courts;
