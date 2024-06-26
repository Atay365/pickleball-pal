import "./Courts.scss";

function Courts() {
  return (
    <section className="courts">
      <ul className="courts__list">
        <li className="courts__item courts__item-header">
          <p>Court Name</p>
          <p>Address</p>
          <p>Hours</p>
        </li>
        <li className="courts__item">
          <p>CGreystone Pickleball</p>
          <p>243 Ash Drive, Birmingham AL</p>
          <p>9AM - 9PM</p>
        </li>
        <li className="courts__item">
          <p>CGreystone Pickleball</p>
          <p>243 Ash Drive, Birmingham AL</p>
          <p>9AM - 9PM</p>
        </li>
      </ul>
    </section>
  );
}

export default Courts;
