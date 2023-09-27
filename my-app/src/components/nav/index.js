import * as React from "react";
import { BsList } from "react-icons/bs";
function Nav() {
  return (
    <nav>
      <div className="navlist">
        <div className="toggleMenu">
          <BsList className="BsList" />
        </div>
        <div className="linkList">
          <ul>
            <li>Home</li>
            <li>Portfolio</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
