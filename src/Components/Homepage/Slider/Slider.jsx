import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { Radio } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../../data";
import { mobile } from "../../../responsive";
import solcat from "../../../Assets/SolCat.png";
import { useEffect } from "react";
import Header from "../../Header/Header";
import StyledLink from "../../StyLink";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;
  overflow: hidden;
  background: rgba(76, 175, 80, 0);
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
  background-size: contain;

  ${mobile({ display: "none" })}
`;

const WrapperTwo = styled.div`
  height: 100%;
  display: flex;
`;

const Arrow = styled.div`
  width: 50px;
  height: 85vh;
  background-color: transparent;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "2px"};
  right: ${(props) => props.direction === "right" && "2px"};
  margin: 0%;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;

  &:hover {
    outline: 2px solid black;
  }
`;

const Wrapper = styled.div`
  height: 85vh;
  display: flex;
  transition: all 100ms ease;
  transition-delay: 450ms;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  /* background-color: #${(props) => props.bg}; */
  /* background:url(${(props) => props.bg}) ; */
  background: inherit;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;

  padding-top: 3vh;
`;

const Center = styled.div`
  width: 66%;
  margin: auto;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 5vh;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.div`
  color: #fff;
  text-align: center;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-family: Urbanist;
  font-size: 90px;
  font-style: normal;
  font-weight: 700;
  line-height: 72.5px; /* 80.556% */
  width: 100%;
`;

const Desc = styled.div`
  color: #fff;
  text-align: center;
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.7px;
  width: 33vw;
  margin: auto;
`;

const ShopNow = styled.button`
  border: 2px solid #ffffff;
  border-radius: 65px;
  padding: 2vh;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 32px;
  /* identical to box height */
  background-color: transparent;
  text-align: center;
  letter-spacing: 0.1em;

  color: #ffffff;
  text-transform: uppercase;
  transition: 0.4s;

  &:hover {
    color: #09193d;
    background-color: #ffffff;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  width: 42vh;
  height: 21vh;
  padding: 3vh;
  background-color: transparent;
  border: 0vh;
  border-radius: 20px;
  /* box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px; */
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.344) 0px 5px 10px;
  margin: 3vh;
  background-color: #fff9eb;
  cursor: pointer;

  font-family: Poppins;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.05em;
  text-align: center;
  color: #1f1f1f;
  top: 0px;
  transition: 0.5s;

  &:hover {
    top: -30px;
  }

  &:focus {
    background: #ff9471;
    height: 24vh;
    align-self: flex-start;
  }
`;

const ButtonText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;

  color: #1f1f1f;
`;

const RadCon = styled.div`
  display: flex;
  z-index: 10;
  position: absolute;
  bottom: 290px;
  left: 45%;
`;

const RadCon2 = styled.div`
  display: flex;
  align-items: flex-end;
  align-content: flex-end;
  z-index: 10;
  position: absolute;
  bottom: 100px;
  left: 15%;
`;

const Indicators = styled.div`
  position: absolute;
  background-color: inherit;
  rotate: -90deg;
  padding: 1vh;
  left: 90%;
  top: 33%;
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

const Aarya = styled.div`
  background-color: #c50000;
  border-radius: 15px;
  color: Blue;
  &:hover {
    background-color: green;
  }
`;

const ButtonCont = styled.div`
  display: flex;
  gap: 1vw;
  text-align: center;
  align-content: center;
  align-self: center;
  margin: auto;
  font-family: Lexend;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 1.25px;
`;

const ButtonCustomOne = styled.div`
  background: #f5a91d;
  color: #00337c;
  padding: 6vh;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  border-radius: 7px;
  width: 17vw;
  margin-top: auto;
  letter-spacing: 0;
  margin-bottom: auto;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.2s ease-out,
    box-shadow 0.2s ease-out; /* Add transition properties */

  /* Add hover styles */
  &:hover {
    transform: scale(1.02); /* Add a slight scale-up animation */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a shadow effect */
  }
`;

const ButtonCustomTwo = styled.div`
  background: transparent;
  color: #ffffff;
  padding: 6vh;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  border-radius: 7px;
  letter-spacing: 0;
  border: 1px solid #ffffff;
  width: 17vw;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;

  /* Hover styles */
  &:hover {
    transform: scale(1.02); /* Add a slight scale-up animation */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a shadow effect */
  }
`;

const Slider = ({ Items }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleClickOne = (index) => {
    setSelectedValue(index);
    setSlideIndex(index);
    setIsVisible((prevState) => !prevState);
    setTimeout(() => {
      setIsVisible(true); // Fade back in after 1 second
    }, 550);
  };

  // Auto slide after 5 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      const newIndex = (slideIndex + 1) % Items.length;
      handleClickOne(newIndex);
    }, 7000);

    return () => clearInterval(autoSlide); // Clear the interval when component unmounts
  }, [slideIndex, Items.length]);

  return (
    <Container>
      <WrapperTwo>
        <Wrapper slideIndex={slideIndex}>
          {Items.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <InfoContainer>
                <Center isVisible={isVisible}>
                  <Title>{item.title}</Title>
                  <Desc>{item.content}</Desc>

                  <ButtonCont>
                    <StyledLink to={`/product?search=${item.destinationPage}`}>
                      <ButtonCustomOne>Explore</ButtonCustomOne>
                    </StyledLink>
                    <StyledLink to="sellersaccount">
                      <ButtonCustomTwo>Join as a seller</ButtonCustomTwo>
                    </StyledLink>
                  </ButtonCont>
                </Center>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>

        {/* <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlined />
      </Arrow> */}

        <Indicators>
          {Items.map((image, index) => (
            <Indicator
              key={index}
              isActive={index === selectedValue}
              onClick={() => handleClickOne(index)}
            />
          ))}
        </Indicators>
      </WrapperTwo>
    </Container>
  );
};

export default Slider;
