import React from "react";
import "./homepage.styles.scss";

import Directory from "../../components/directory/directory.component";
import Hero from "../../components/hero/hero.component";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Hero />
      <div
        style={{
          fontSize: "1.5rem",
          width: "80%",
          margin: "30px",
          padding: "20px",
          fontWeight: "lighter"
        }}
      >
        <span>
          KatieArt has a large selection of modern and contemporary canvas
          paintings for you to discover, organised under our various headers and
          themes. Painting has been a means of expression for mankind from
          Prehistoric times to the modern day, making it a true ambassador for
          the Fine Arts. Even today, it embodies the visual arts par excellence.
        </span>
      </div>
      <Directory />
      <div
        style={{
          fontSize: "1.5rem",
          width: "80%",
          margin: "30px",
          padding: "20px",
          fontWeight: "lighter"
        }}
      >
        KatieArt has a large selection of modern and contemporary canvas
        paintings for you to discover, organised under our various headers and
        themes. Painting has been a means of expression for mankind from
        Prehistoric times to the modern day, making it a true ambassador for the
        Fine Arts. Even today, it embodies the visual arts par excellence.
      </div>
      <div className="makeup-girl"></div>
    </HomePageContainer>
  );
};

export default HomePage;
