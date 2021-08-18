import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Caroussel.css'
const CarousselC = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1500} className="CarI">
    <img
      className="d-block w-100"
      src="/img1.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={1000} className="CarI">
    <img
      className="d-block w-100"
      src="/img2.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500} className="CarI">
    <img
      className="d-block w-100"
      src="/img3.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item className="CarI">
    <img
      className="d-block w-100"
      src="/img4.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  
</Carousel>
        </div>
    )
}

export default CarousselC

