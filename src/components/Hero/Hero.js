import React from "react";
import "../../App.css";
import { Button } from "../Button/Button";
import "./Hero.css";
import video from "../../assets/videos/video-2.mp4";

function Hero() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1>Build the Ultimate PC Now</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--lage"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default Hero;
