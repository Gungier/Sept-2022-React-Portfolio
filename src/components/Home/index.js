import React, { useEffect, useState } from "react";
import "./index.scss";
import LogoTitle from "../../assets/images/figmaG.png";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimateLetters";
import Logo from "./Logo";
import BackgroundImage from "../../assets/images/background-portrait.png";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
    "a",
    "b",
    "r",
    "i",
    "e",
    "l",
    " ",
    "U",
    "n",
    "g",
    "i",
    "e",
    "r",
  ];

  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>’</span>
          <span className={`${letterClass} _14`}>m</span>
          <img className="LogoTitle" src={LogoTitle} alt="dveloper" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            index={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            index={22}
          />
        </h1>
        <h2>Full Stack Developer / JavaScript & TypeScript Expert</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      {/* <Logo /> */}
    </div>
  );
};
export default Home;
