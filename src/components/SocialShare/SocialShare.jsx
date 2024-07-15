import "./SocialShare.scss";
import {
  FacebookShareButton,
  EmailShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

function SocialShare() {
  const siteUrl = window.location.href;
  return (
    <>
      <div className="share-bar">
        {/* Come back and change this to siteUrl once hosted */}
        <EmailShareButton
          className="share-bar__button"
          url="https://pickleball-pal.netlify.app/"
          subject="🏓 Challenge Accepted? Join Me on Pickleball Tracker! 🏓"
          body="Hey there,

          I just had an epic Pickleball match and tracked it all on Pickleball Tracker! 🏆
          
          Think you can beat me? Join the app and track all the matches I beat you in!"
        >
          <EmailIcon round={true} className="share-bar__icon" />
        </EmailShareButton>
        <FacebookShareButton
          className="share-bar__button"
          url="https://pickleball-pal.netlify.app/"
          hashtag="PickleballPal"
        >
          <FacebookIcon round={true} className="share-bar__icon" />
        </FacebookShareButton>
        <TwitterShareButton
          className="share-bar__button"
          url="https://pickleball-pal.netlify.app/"
          title="Register on Pickleball Pal"
        >
          <TwitterIcon round={true} className="share-bar__icon" />
        </TwitterShareButton>
      </div>
    </>
  );
}

export default SocialShare;
