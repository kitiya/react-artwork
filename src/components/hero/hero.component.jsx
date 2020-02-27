import React from "react";
import "./hero.styles.scss";
import { Link } from "react-router-dom";

const Hero = ({ className }) => (
  <div className={`hero ${className}`}>
    <div className="background-image">
      <div className="content">
        <h1 className="primary-header">
          <span className="title">
            Find Art You <span className="highlight">Love</span>
          </span>
          <span className="subtitle">
            Browse curated artwork in all styles, sizes, and budgets by today's
            top artists
          </span>
        </h1>
        <Link className="btn btn-white" to="/shop">
          Get Inspired
        </Link>
      </div>
    </div>
  </div>
);

export default Hero;
