import {
  BiLogoGithub,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiMailSend,
} from "react-icons/bi";

function Footer() {
  return (
    <div className="container footer col-12" id="ContactMe">
      <div className="footer-header container-child">
        <h3>Contact Me</h3>
      </div>
      <div className="socmed-container container-child">
        <div className="socmed-item">
          <BiLogoGithub
            onClick={() => window.open("https://github.com/phillip-steven")}
          />
        </div>
        <div className="socmed-item">
          <BiLogoLinkedinSquare
            onClick={() =>
              window.open("https://linkedin.com/in/iputuphillipsteven")
            }
          />
        </div>
        <div className="socmed-item">
          <BiLogoInstagramAlt
            onClick={() => window.open("https://instagram.com/iputuphillip")}
          />
        </div>
        {/* <div className="socmed-item">
          <BiMailSend />
        </div> */}
      </div>
      <div className="footer-writer container-child">
        <p>
          Made by me using <mark>react</mark>
        </p>
      </div>
    </div>
  );
}

export default Footer;
