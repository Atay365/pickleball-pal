import "./Courts.scss";

function Courts({ mapData }) {
  return (
    <section className="courts">
      <ul className="courts__list courts__list--second">
        {mapData.map((map) => (
          <li className="courts__item" key={map.place_id}>
            <div className="courts__info-wrapper-1">
              <p className="courts__info courts__info--name">{map.name}</p>
              <p className="courts__info courts__info--address">
                {map.vicinity}
              </p>
            </div>
            <div className="courts__info-wrapper-2">
              {map.opening_hours && map.opening_hours.open_now ? (
                <p className="open">Open</p>
              ) : (
                <p className="closed">Closed</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Courts;
