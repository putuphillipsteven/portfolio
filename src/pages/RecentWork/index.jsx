import { Link } from "react-router-dom";
import calculator from "../../img/png/calculator.png";
import FAQ from "../../img/png/FAQ.png";
import interactiverating from "../../img/png/interactive-rating.png";

function RecentWork() {
  return (
    <div className="col-12 container recent-work" id="RecentWork">
      <div className="recent-work-header container-header container-child">
        <h2>My Recent Work</h2>
      </div>
      <div className="recent-work-paragraph container-child">
        <p>Here a few past personal project I've worked on.</p>
      </div>
      <div className="recent-work-container container-child">
        <div className="recent-work-child">
          <img
            src={calculator}
            alt="calculator"
            onClick={() =>
              window.open("https://phillip-steven.github.io/calculator")
            }
          />
        </div>
        <div className="recent-work-child">
          <img
            src={FAQ}
            alt="FAQ"
            onClick={() =>
              window.open("https://phillip-steven.github.io/faq-accordion-card")
            }
          />
        </div>
        <div className="recent-work-child">
          <img
            src={interactiverating}
            alt="calculator"
            onClick={() =>
              window.open("https://phillip-steven.github.io/interactive-rating")
            }
          />
        </div>
      </div>
    </div>
  );
}

export default RecentWork;
