import "./Footer.scss";
import SocialShare from "../SocialShare/SocialShare";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <p className="footer__content">Created by Austin Taylor</p>
        <SocialShare />
      </div>
    </footer>
  );
}

export default Footer;
