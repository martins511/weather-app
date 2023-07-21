import React from "react";
import { Link } from "react-router-dom";
import "./App.css"
const WelcomePage = () => {
  return (
    <div className="linkContainer">
      <div className="linkContent">
        <Link to="forcast">Weather</Link>
        <Link to="trivia">Quiz</Link>
        <Link to="materiaui">MaterialUi</Link>
        <Link to="buttonui">ButtonUi</Link>
      </div>
    </div>
  );
};

export default WelcomePage;
