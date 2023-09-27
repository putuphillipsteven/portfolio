import * as React from "react";
import Button from "../../components/Button";

function Jumbotron() {
  return (
    <div className="col-12 container jumbotron">
      <h2>Hello I'm Putu</h2>
      <h1>Front End Developer</h1>
      <p>If you want to see my portfolio directly, click this button below</p>
      <Button text="Portfolio" />
    </div>
  );
}

export default Jumbotron;
