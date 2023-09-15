import React from "react";
import styled from "styled-components";
import HeaderTwo from "../Components/Header/HeaderTwo";
import SliderBack from "../Assets/AboutUs/AboutUsStock.jpg";

const Title = styled.div`
  font-family: Lexend;
  font-size: 36px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;

  text-transform: capitalize;
  color: #000000;
  padding: 3vh;
`;

const Image = styled.div`
  background-color: #c50000;
`;

const TitleCon = styled.div`
  display: flex;
  padding: 4vh;
  padding-top: 8vh;
  padding-bottom: 8vh;
`;

const TitSpan = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  margin-bottom: 4vh;
  color: #424242;
  gap: 2vh;
  padding: 3vh;
`;

const HeadCon = styled.div`
  position: sticky;
  width: 100%;
  z-index: 100;
  padding-bottom: 15vh;
`;

const Slide = styled.div`
  background-image: url(${SliderBack});
  background-size: contain;
  background-size: 100vw 100vh;
  height: 100vh;
`;

const AboutUs = () => {
  return (
    <div>
      <HeadCon>
        <HeaderTwo />
      </HeadCon>
      <TitleCon>
        <Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          nihil hic quos? Obcaecati cumque rerum tenetur consequatur?
        </Title>
        <TitSpan>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
          voluptatibus at necessitatibus itaque quia possimus tempore quo, illo
          dolore obcaecati autem unde quis ad culpa!
        </TitSpan>
      </TitleCon>
      <Slide></Slide>
    </div>
  );
};

export default AboutUs;
