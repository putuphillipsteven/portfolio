import * as React from "react";
import Nav from "../../components/nav";
import "../../../src/App.css";
import Jumbotron from "../Jumbotron";
import AboutMe from "../AboutMe";
import RecentWork from "../RecentWork";
import Footer from "../Footer";

function Home() {
  return (
    <div className="row">
      <Nav />
      <Jumbotron />
      <AboutMe />
      <RecentWork />
      <Footer />
    </div>
  );
}

export default Home;
