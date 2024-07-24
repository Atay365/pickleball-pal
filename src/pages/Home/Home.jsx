import "./Home.scss";
import heroImg from "../../assets/icons/court-pic.jpg";
import court3d from "../../assets/icons/pickleball_court.png";
import paddle3d from "../../assets/icons/pickleball_paddle.png";
import ranks from "../../assets/icons/allRanks.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <div className="hero-wrap">
          <img
            src={heroImg}
            alt="Pickleball Net and Court"
            className="hero__bg"
          />
          <div className="hero__content">
            <h1 className="hero__cta">
              Track Your Games, Find New Courts, and Connect with Players Near
              You!
            </h1>
            <Link to={"/signup"}>
              <button className="hero__button">Join Today</button>
            </Link>
          </div>
        </div>
        <div className="pages"></div>
        <div className="features features---left">
          <div>
            <p className="features__content">
              Discover nearby pickleball courts with ease! Use our interactive
              map to find the best spots to play within a 10-mile radius.
              Adventure awaits!
            </p>
            <Link to={"/courts"} className="features__link">
              <button className="features__button">Find a Court</button>
            </Link>
          </div>
          <img src={court3d} alt="" className="features__img court" />
        </div>
        <div className="features features---right">
          <div>
            <p className="features__content features__content--white">
              Keep track of all your matches with our game score tracker. Log
              every win, improve your game, and never forget a match!
            </p>
            <Link to={"/game"} className="features__link">
              <button className="features__button">Lets Play</button>
            </Link>
          </div>
          <img src={paddle3d} alt="" className="features__img paddle" />
        </div>
        <div className="features features---col">
          <p className="features__content">
            Climb the ranks and earn badges as you play! See where you stand
            among other players and celebrate your total wins with achievement
            badges. The more you win the higher you presetige!
          </p>
          <img
            src={ranks}
            alt=""
            className="features__img features__img--ranks"
          />
        </div>
      </main>
    </>
  );
}

export default Home;
