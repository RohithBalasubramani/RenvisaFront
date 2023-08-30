import { ExpandMore } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

const ScrollButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [indicator, setIndicator] = useState("Top");
  const [isBouncing, setBouncing] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      if (position >= 2700) {
        setIndicator("Bottom");
      } else if (position >= 1800) {
        setIndicator("Middle");
      } else {
        setIndicator("Top");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const scrollLength = 630; // adjust the scroll length here
    setBouncing(false);
    window.scrollBy({
      top: scrollLength,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Button onClick={handleClick} bouncing={isBouncing}>
        <ExpandMore sx={{ transform: "scale(1.6)", fontWeight: "600" }} />

        {/* <Indicator active={indicator === "Top"} />
      <Indicator active={indicator === "Middle"} />
      <Indicator active={indicator === "Bottom"} /> */}
      </Button>
      <ShowNow>Shop Now</ShowNow>
    </div>
  );
};

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const ShowNow = styled.div`
  color: #fff;
  font-family: Urbanist;
  position: absolute;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 100% */
  bottom: 30px;
  left: 48.5%;
`;

const Button = styled.button`
  position: absolute;
  bottom: 50px;
  right: 48%;
  background-color: #00337c;
  color: #fff;

  border: none;
  border-radius: 50%;
  padding: 0.8vh;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.83;
  animation: ${(props) =>
    props.bouncing
      ? css`
          ${bounceAnimation} 1s infinite
        `
      : "none"};

  /* &:hover {
    opacity: 0.6;
  } */
`;

const Indicator = styled.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 10px solid
    ${(props) => (props.active ? "white" : "rgba(255, 255, 255, 0.5)")};
  margin: 0 0.2rem;
  cursor: pointer;
  transform: ${(props) =>
    props.active ? "translateX(2px)" : "translateX(0px)"};
  transition: transform 0.3s ease;
`;

const Text = styled.span`
  margin-right: 8px;
`;

export default ScrollButton;
