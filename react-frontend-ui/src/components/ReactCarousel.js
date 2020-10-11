import React from "react";
import "../App.css";
import {  Carousel } from 'react-bootstrap';


function ReactCarousel() {
  return (
    <div className="mycarousel w-100 m-auto">
<Carousel>
  <Carousel.Item>
    <img
    
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Welcome to ZenPro!</h3>
      <p>Check out a few of our products</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1532349633002-7e3231a1dce3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  );
}

export default ReactCarousel;