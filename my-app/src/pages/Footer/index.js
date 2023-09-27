import {
  BiLogoGithub,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiMailSend,
} from "react-icons/bi";

function Footer() {
  return (
    <div className="container footer col-12">
      <div className="footer-header container-child">
        <h3>Contact Me</h3>
      </div>
      <div className="socmed-container container-child">
        <div className="socmed-item">
          <BiLogoGithub />
        </div>
        <div className="socmed-item">
          <BiLogoLinkedinSquare />
        </div>
        <div className="socmed-item">
          <BiLogoInstagramAlt />
        </div>
        <div className="socmed-item">
          <BiMailSend />
        </div>
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
