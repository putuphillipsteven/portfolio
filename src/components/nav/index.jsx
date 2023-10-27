import * as React from "react";
import { BsList } from "react-icons/bs";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navlist">
      <div
        className="toggleMenu"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <BsList className="BsList" />
      </div>
      <div className={isNavExpanded ? "linkList expanded" : "linkList"}>
        <Link class="Link" to="#Jumbotron">
          Home
        </Link>
        <Link class="Link" to="#AboutMe">
          About Me
        </Link>
        <Link class="Link" to="#ContactMe">
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
