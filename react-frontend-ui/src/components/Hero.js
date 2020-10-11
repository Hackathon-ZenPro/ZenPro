import React from "react";
import "../App.css";
import {  Button, Container } from 'react-bootstrap';
import Carousel from "./ReactCarousel"

// TODO why isn't img displaying
function Hero() {
  return (
    <div className="w-50 m-auto">
    <Container fluid>
      <div className="h-50">
      <Button className="myBorder" variant="secondary" size="lg" href="https://twitter.com/search?q=zenprosports&src=typed_query" block>See our products in action!</Button>{' '}
      </div>
      <div className="hero-img">
        <Carousel/>
      </div>
      

      </Container>
      </div>
  );
}

export default Hero;
