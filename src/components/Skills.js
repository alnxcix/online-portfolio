import amazonaws from "../assets/svg/amazonaws.svg";
import androidstudio from "../assets/svg/androidstudio.svg";
import bootstrap from "../assets/svg/bootstrap.svg";
import css3 from "../assets/svg/css3.svg";
import dotnet from "../assets/svg/dotnet.svg";
import electron from "../assets/svg/electron.svg";
import git from "../assets/svg/git.svg";
import html5 from "../assets/svg/html5.svg";
import java from "../assets/svg/java.svg";
import javascript from "../assets/svg/javascript.svg";
import mongodb from "../assets/svg/mongodb.svg";
import mysql from "../assets/svg/mysql.svg";
import nextdotjs from "../assets/svg/nextdotjs.svg";
import nodedotjs from "../assets/svg/nodedotjs.svg";
import oracle from "../assets/svg/oracle.svg";
import php from "../assets/svg/php.svg";
import phpmyadmin from "../assets/svg/phpmyadmin.svg";
import python from "../assets/svg/python.svg";
import react from "../assets/svg/react.svg";
import tailwindcss from "../assets/svg/tailwindcss.svg";

const Skills = () => (
  <>
    <h2 className="fw-bold">
      💯 <span className="gradient">Proficient</span>
    </h2>
    <div className="ms-5">
      <p className="text-muted">
        Languages, tools, and frameworks that I am most comfortable with.
      </p>
      {[html5, css3, javascript, bootstrap, react].map((e, i) => (
        <span key={i}>
          <img alt="icon" className="mb-3" src={e} height="50" />{" "}
        </span>
      ))}
      <hr />
    </div>
    <h2 className="fw-bold mb-3">
      👍 <span className="gradient">With Experience</span>
    </h2>
    <div className="ms-5">
      <p className="text-muted">
        Languages and tools that I also work (or used to work) with.
      </p>
      {[
        java,
        oracle,
        git,
        nodedotjs,
        mongodb,
        androidstudio,
        electron,
        dotnet,
        python,
        php,
        phpmyadmin,
        mysql,
      ].map((e, i) => (
        <span key={i}>
          <img alt="icon" className="mb-3" src={e} height="50" />{" "}
        </span>
      ))}
      <hr />
    </div>
    <h2 className="fw-bold mb-3">
      ⏳ <span className="gradient">Currently Learning</span>
    </h2>
    <div className="ms-5">
      <p className="text-muted">Tools on their way to the lists above.</p>
      {[amazonaws, tailwindcss, nextdotjs].map((e, i) => (
        <span key={i}>
          <img alt="icon" className="mb-3" src={e} height="50" />{" "}
        </span>
      ))}
    </div>
  </>
);

export default Skills;
