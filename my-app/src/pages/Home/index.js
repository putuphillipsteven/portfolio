import * as React from "react";
import Nav from "../../components/nav";
import "../../../src/App.css";
import Jumbotron from "../Jumbotron";
import AboutMe from "../AboutMe";
import Skills from "../Skills";
import RecentWork from "../RecentWork";
import Footer from "../Footer";

function Home() {
  return (
    <div className="row">
      <Nav />
      <Jumbotron />
      <AboutMe />
      {/* <Skills /> */}
      <RecentWork />
      <Footer />
    </div>
  );
}

export default Home;
