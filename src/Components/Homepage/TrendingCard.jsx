import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import SolCat from "../../Assets/SolCat.png";
import { CatSub } from "../../data";

const OverContainer = styled.div`
  height: 100%;
  width: 100%;
  background: #ffffff;
  padding-top: 3vh;
  padding-bottom: 3vh;
`;
const Text = styled.div`
  color: black;
  position: float;
  z-index: 50;
  width: min-content;
  height: 100%;
  background: transparent;
  padding-top: 30px;
  padding-left: 10px;
  font-family: Lexend;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: middle;
  margin-top: auto;
  margin-bottom: auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Wrapper = styled.div`
  margin-left: 0.95%;
  margin-right: 0.95%;
  display: flex;
`;

const Card = styled.div`
  height: 25vh;
  margin: 0.7%;
  width: 53vh;
  filter: grayscale(100%);

  border: 1px solid #e0e0e0;

  border-radius: 8px;
  vertical-align: middle;
  overflow: hidden;
  /* box-shadow: 0 70px 63px -60px #000000; */
  text-align: middle;
  position: relative;
  background: url(${(props) => props.img}) right center no-repeat;
  background-size: 100px;
  transition: background 0.8s;

  &:hover {
    background: url(${(props) => props.img}) right center no-repeat;
    background-size: 160px;
    transition: background 0.8s;
  }
  &:hover ${Text} {
    font-weight: 600;
  }
`;

const Htwo = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  padding-top: 4vh;
  padding-left: 2vh;
  color: #000000;
  opacity: 0.5;
  transition: opacity 1s;
`;
const Fa = styled.li`
  opacity: 0;
  transition: opacity 1s;
  margin-left: 0vh;
  margin-bottom: 0%;
  cursor: pointer;
  color: #ffffffbb;
  &:hover {
    color: #ff9471;
  }
`;

const CardZero = styled.div`
  background: url(${(props) => props.img}) right center no-repeat;
  background-size: 100px;
  transition: background 0.8s;

  &:hover {
    background: url(${(props) => props.img}) right center no-repeat;
    background-size: 200px;
    transition: background 0.8s;
  }
  &:hover ${Htwo} {
    opacity: 1;
  }
  &:hover ${Fa} {
    opacity: 1;
  }
`;
const Icons = styled.ul`
  position: relative;
  padding-top: 0vh;
  justify-content: space-around;
  margin-left: 0%;
  list-style: square;
  color: white;
  width: 70%;
`;

const TrendingCard = () => {
  return (
    <OverContainer>
      <Wrapper>
        {CatSub.map((item) => (
          <Card img={item.img}>
            <Text>{item.Cat}</Text>
          </Card>
        ))}
      </Wrapper>
    </OverContainer>
  );
};

export default TrendingCard;
