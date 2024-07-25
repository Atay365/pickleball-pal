import "./FindCourt.scss";
import Courts from "../../components/Courts/Courts";
import Map from "../../components/Map/Map";

function FindCourt() {
  return (
    <>
      <h2 className="title">Pickleball Courts within 10 Miles</h2>
      <Map />
    </>
  );
}

export default FindCourt;
