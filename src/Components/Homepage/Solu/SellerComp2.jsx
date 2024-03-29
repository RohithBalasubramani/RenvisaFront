import React, { useEffect, useState } from "react";
import styled from "styled-components";

import BoldSecondWord from "./BoldSecond";
import StyledLink from "../../StyLink";

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: block;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;

  background: rgba(76, 175, 80, 0);
  font-family: "Lexend";
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
`;

const WrapperTwo = styled.div`
  height: 100%;
  display: flex;
`;

const WrapperA = styled.div`
  height: 100vh;
  width: 150vw;
  margin-left: 50vw;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -50}vw);
`;

const WrapperB = styled.div`
  position: absolute;
  left: 0%;
  z-index: 10;
  height: 300vh;
  width: 50vw;

  display: flex;
  flex-direction: column;
  transition: all 1.5s ease;
  transform: translateY(${(props) => props.slideIndex * -100}vh);
`;

const SlideB = styled.div`
  width: 50vw;
  height: 300vh;
  display: flex;

  background: #f1faff;

  display: flex;
  flex-direction: column;
  color: black;

  align-items: center;
  background-color: #${(props) => props.bg};
  /* background:url(${(props) => props.img}) ; */
  /* background: inherit; */
`;

const Slide = styled.div`
  width: 150vw;
  height: 100vh;
  display: flex;
  align-items: center;
  /* background-color: #${(props) => props.bg}; */
  /* background:url(${(props) => props.img}) ; */
  /* background: inherit; */
`;

const Image = styled.img`
  background-color: #c50000;
  width: 100%;
  height: 100%;
`;

const ContBoxCont = styled.p`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #4f4f4f;
  margin-bottom: 4vh;
`;

const Button = styled.div`
  background: #ffbf00;

  color: #333333;
  width: 35%;
  padding: 1.5vh;
  font-family: Lexend;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 1.25px;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.2s ease-out,
    box-shadow 0.2s ease-out; /* Add transition properties */

  /* Add hover styles */
  &:hover {
    background: #000000; /* Change the background color on hover */
    color: #f5a91d;
    transform: scale(1.02); /* Add a slight scale-up animation */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a shadow effect */
  }
`;
const SlideContBox = styled.div`
  padding-top: 15%;
  padding-bottom: 15%;
  padding-left: 10%;
  padding-right: 11%;
  display: flex;
  flex-direction: column;
  gap: 4vh;
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 15%;
  right: 15%;
  padding: 1vh;
  z-index: 10;

  transform: translateX(-50%);
  display: flex;
`;

const Indicator = styled.span`
  width: ${(props) => (props.isActive ? "70px" : "50px")};
  height: 3px;
  margin: 0 5px;

  background-color: ${(props) => (props.isActive ? "#ffffff" : "#FFFFFF4D")};
  cursor: pointer;
`;

const SellerTwo = ({ Items, interval = 5000 }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClickOne = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % Items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, Items.length]);

  return (
    <Container>
      <WrapperTwo>
        <WrapperA slideIndex={slideIndex}>
          {Items.map((item) => (
            <Slide key={item.id}>
              <Image src={item.backgroundImage} />
            </Slide>
          ))}
        </WrapperA>

        <WrapperB slideIndex={slideIndex}>
          {Items.map((item) => (
            <SlideB key={item.id}>
              <SlideContBox>
                <BoldSecondWord sentence={item.title} />
                <ContBoxCont>{item.content}</ContBoxCont>
                <StyledLink to={`/product?search=${item.destinationPage}`}>
                  <Button>View More</Button>
                </StyledLink>
              </SlideContBox>
            </SlideB>
          ))}
        </WrapperB>

        <Indicators>
          {Items.map((image, index) => (
            <Indicator
              key={index}
              isActive={index === slideIndex}
              onClick={() => handleClickOne(index)}
            />
          ))}
        </Indicators>
      </WrapperTwo>
    </Container>
  );
};

export default SellerTwo;
