import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript, BiLogoReact } from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";

function Skills() {
  return (
    <div className="col-6 container skills">
      <div className="header-skills">
        <h2>SKILLS</h2>
        <p>Below are my skills that i have learned</p>
      </div>
      <div className="container-skills">
        <div>
          <AiFillHtml5 />
        </div>
        <div>
          <BiLogoCss3 />
        </div>
        <div>
          <BiLogoJavascript />
        </div>
        <div>
          <BsFiletypeScss />
        </div>
        <div>
          <BiLogoReact />
        </div>
      </div>
    </div>
  );
}

export default Skills;
