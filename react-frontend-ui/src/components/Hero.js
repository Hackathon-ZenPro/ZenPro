import React from "react";
import "../App.css";
import {  Button } from 'react-bootstrap';

// TODO why isn't img displaying
function Hero() {
  return (
    <div className="hero-container">
      <div clasName="hero-img">
        <img src="images/hero-placeholder1.jpg" alt="Woman Running" />
      </div>
      <Button variant="productsTwitter" href="https://twitter.com/search?q=zenprosports&src=typed_query">See our products in action!</Button>{' '}

      </div>
  );
}

export default Hero;
