import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [indicator, setIndicator] = useState('Top');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      if (position >= 2700) {
        setIndicator('Bottom');
      } else if (position >= 1800) {
        setIndicator('Middle');
      } else {
        setIndicator('Top');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const scrollLength =615; // adjust the scroll length here
    window.scrollBy({
      top: scrollLength,
      behavior: 'smooth'
    });
  };

  return (
    <Button onClick={handleClick}>
      <Indicator active={indicator === 'Top'} />
      <Indicator active={indicator === 'Middle'} />
      <Indicator active={indicator === 'Bottom'} />
    </Button>
  );
};

const Button = styled.button`
  position: fixed;
  bottom: 50px;
  right: 45%;
  width: 45px;
  height: 30px;
  background-color: #00337C;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  z-index: 20;
  transform: rotate(90deg);

  &:hover {
    opacity: 0.8;
  }
`;

const Indicator = styled.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left:10px solid ${(props) => (props.active ? "white" : "rgba(255, 255, 255, 0.5)")};
  margin: 0 0.2rem;
  cursor: pointer;
  transform: ${(props) => (props.active ? "translateX(2px)" : "translateX(0px)")};
  transition: transform 0.3s ease;
`;

const Text = styled.span`
  margin-right: 8px;
`;

export default ScrollButton;
