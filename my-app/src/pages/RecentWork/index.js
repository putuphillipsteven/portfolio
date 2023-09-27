import calculator from "../../img/png/calculator.png";
import FAQ from "../../img/png/FAQ.png";
import interactiverating from "../../img/png/interactive-rating.png";

function RecentWork() {
  return (
    <div className="col-6 container recent-work">
      <div className="recent-work-header container-header container-child">
        <h2>My Recent Work</h2>
      </div>
      <div className="recent-work-paragraph container-child">
        <p>Here a few past personal project I've worked on.</p>
      </div>
      <div className="recent-work-container container-child">
        <div className="recent-work-child">
          <img src={calculator} alt="calculator" />
        </div>
        <div className="recent-work-child">
          <img src={FAQ} alt="FAQ" />
        </div>
        <div className="recent-work-child">
          <img src={interactiverating} alt="calculator" />
        </div>
      </div>
    </div>
  );
}

export default RecentWork;
