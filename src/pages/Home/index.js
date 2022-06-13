import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <main>
      <h1>JDM QUIZ</h1>
      <p className="home__p">
        A quiz about the japanese domestic market
      </p>
      <NavLink
       className="home_play"
       to="/about"
      >
      <a className="home_playA">Play</a>
      </NavLink>
    </main> 
  );
};

export default Home;
