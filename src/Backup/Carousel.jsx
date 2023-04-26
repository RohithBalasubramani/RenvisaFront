import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'



const StyledCarousel = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;

`;

const ImageContainer = styled.div`
  display: flex;
  width: ${props => props.width}px;
  transition: transform 0.5s ease;
`;

const Image = styled.img`
  width: 30%;
  height: 15%;
  object-fit: cover;
  transition: opacity 0.5s ease;
  opacity: ${props => props.isActive ? 1 : 0};
`;

const Indicators = styled.div`
  position: absolute;
  background-color: #ff0400;
  padding: 1vh;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

const Indicator = styled.span`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${props => props.isActive ? '#1eff00' : '#0000ff'};
  cursor: pointer;
`;

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    setCarouselWidth(carouselRef.current.offsetWidth);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  }

  return (
    <StyledCarousel ref={carouselRef}>
      <ImageContainer width={images.length * carouselWidth} style={{ transform: `translateX(-${activeIndex * carouselWidth}px)` }}>
        {images.map((image, index) => (
          <Image key={index} src={image.img} alt={image.alt} isActive={index === activeIndex} />
        ))}
      </ImageContainer>
      <Indicators>
        {images.map((image, index) => (
          <Indicator key={index} isActive={index === activeIndex} onClick={() => handleClick(index)} />
        ))}
      </Indicators>
    </StyledCarousel>
  );
}

export default Carousel;
