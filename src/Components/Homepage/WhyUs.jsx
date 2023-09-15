import {
  CachedTwoTone,
  LocalShipping,
  Margin,
  SupportAgent,
  WorkspacePremium,
} from "@mui/icons-material";
import React from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as QualIcon } from "../../Assets/Home/WhyUs/Quality.svg";
import { ReactComponent as ReplaceIcon } from "../../Assets/Home/WhyUs/Replacement.svg";
import { ReactComponent as ShippingIcon } from "../../Assets/Home/WhyUs/Shipping.svg";
import { ReactComponent as SupportIcon } from "../../Assets/Home/WhyUs/Support.svg";
import { Icon } from "@mui/material";

// Define the keyframes animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  50% {
    opacity: 0;
    /* transform: translateY(10px); */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  font-family: Lexend;
  display: flex;
  padding-top: 3vh;
  padding-bottom: 3vh;
  background: #ffffff;
  width: 95%;
  margin: 2%;
`;
const TitCon = styled.div`
  width: 20%;
  margin-right: 5vh;
`;

const CardCon = styled.div`
  width: 80%;
  display: flex;
`;

const Title = styled.div`
  font-family: Lexend;
  font-size: 48px;
  font-weight: 500;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: left;
  color: #00337c;
  padding: 5vh;
`;
const TitleSpan = styled.span`
  text-align: Left;
`;

const CardInfo = styled.div`
  font-family: Lexend;
  margin-left: auto;
  margin-right: 0%;
  z-index: 3;
  opacity: 0;
  flex: 0;
  overflow: hidden;
  border-left: 3px;
  border-left-color: grey;
  border-left-style: dashed;
  padding: 1vh;
  padding-left: 2vh;
  cursor: pointer;
`;

const IconCon = styled.div`
  height: 55%;
  width: auto;
`;

const CardTit = styled.div`
  color: #4f4f4f;
  text-align: center;
  font-family: Lexend;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 177.778% */
  /* margin-top: 6vh; */
  margin-left: auto;
  margin-right: auto;
`;

const SVGSize = styled.div`
  transform: scale(0.8);
  margin-left: auto;
  margin-right: auto;
`;

const Card = styled.div`
  color: #4f4f4f;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-content: center;
  font-size: 2vh;
  font-weight: 700;
  opacity: 1;
  padding-left: 2vh;
  padding-right: 2vh;
  flex: 1;
  padding-bottom: 1vh;

  /* &:hover{ 
    width: 20%;
    align-content:left;
    text-align: left;
    font-size: 1.5vh;
    font-weight: 500;
}

&:hover ${CardInfo}{
    opacity: 1;
} */
`;

const CardCont = styled.div`
  background-color: #fafdff;
  display: flex;
  width: 20%;
  height: 30vh;
  margin: 2vh;
  margin-bottom: 3vh;
  transition: 0.5s;
  overflow: hidden;
  padding-bottom: 2vh;
  padding-top: 2vh;
  color: #4f4f4f;

  border-radius: 8px;
  padding: 32px 16px 32px 16px;

  &:hover {
    width: 33%;
    background-color: #fff8eb;
    color: #4f4f4f;
  }

  &:hover ${CardInfo} {
    opacity: 1;
    flex: 3;
    color: #4f4f4f;
    animation-delay: 0.5s;
    animation: ${fadeIn} 0.6s ease-in-out forwards;

    /* Apply the animation */
  }

  &:hover ${Card} {
    flex: 1;
    font-size: 2.5vh;
    font-weight: 500;
    color: #4f4f4f;
  }

  &:hover ${CardTit} {
    /* margin-left: 10%; */
    margin-top: -8px;
    transition: margin-top 1s;
  }

  &:hover ${SVGSize} {
    /* margin-left: 10%; */
    transform: scale(0.7);
    transition: transform 1s;
  }
`;

const WhyUs = () => {
  return (
    <Container>
      <TitCon>
        <Title>Renvisa Offers</Title>
      </TitCon>

      <CardCon>
        <CardCont>
          <Card>
            <SVGSize>
              <ReplaceIcon />
            </SVGSize>
            <CardTit>Easy Replacement</CardTit>
          </Card>
          <CardInfo>
            Hassle-free product replacements for your convenience. Shop
            worry-free with our easy replacement policy.
          </CardInfo>
        </CardCont>

        <CardCont>
          <Card>
            <SVGSize>
              <ShippingIcon />
            </SVGSize>
            <CardTit>Nationwide Delivery</CardTit>
          </Card>
          <CardInfo>
            Get your orders delivered nationwide, right to your business
            doorstep. Enjoy the convenience of nationwide delivery services.
          </CardInfo>
        </CardCont>

        <CardCont>
          <Card>
            <SVGSize>
              <SupportIcon />
            </SVGSize>
            <CardTit>
              Support
              <br />
            </CardTit>
          </Card>
          <CardInfo>
            Elevating your shopping experience with exceptional customer care
            support. Our dedicated team is here to assist you when in need.{" "}
          </CardInfo>
        </CardCont>

        <CardCont>
          <Card>
            <SVGSize>
              <QualIcon />
            </SVGSize>
            <CardTit>
              Quality
              <br />
            </CardTit>
          </Card>
          <CardInfo>
            We're committed to providing top-quality certified industrial
            products. Trust in the best when you shop with us.
          </CardInfo>
        </CardCont>
      </CardCon>
    </Container>
  );
};

export default WhyUs;
