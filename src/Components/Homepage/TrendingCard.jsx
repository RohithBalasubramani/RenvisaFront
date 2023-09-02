import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import SolCat from "../../Assets/SolCat.png";
import { CatSub, Cate } from "../../data";
import { Link, useNavigate } from "react-router-dom";
import StyledLink from "../StyLink";

const OverContainer = styled.div`
  height: 100%;
  width: 100%;
  background: #ffffff;
  padding-top: 3vh;
  padding-bottom: 3vh;
`;
const Text = styled.div`
  color: #000;
  text-align: center;
  width: 14vw;
  font-family: Lexend;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 160% */
`;

const Image = styled.img`
  height: 10vw;
  width: 10vw;
  margin: auto;
`;
const Wrapper = styled.div`
  margin-left: 0.95%;
  margin-right: 0.95%;
  display: flex;
`;

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-gap: 3.5vh;
`;

const Card = styled.div`
  height: 14.5vw;
  width: 14.5vw;
  display: flex;
  margin: 0.7%;
  /* width: 15vw; */
  border-radius: 100%;
  background-color: #f1f9ff;
  /* filter: grayscale(100%); */

  /* border: 1px solid #e0e0e0;

  border-radius: 8px;
  vertical-align: middle;
  overflow: hidden;
  /* box-shadow: 0 70px 63px -60px #000000; */
  /* text-align: middle;
  position: relative;
  background: url(${(props) => props.img}) right center no-repeat;
  background-size: 100px;
  transition: background 0.8s; */
  */ &:hover {
    /* background: url(${(props) => props.img}) right center no-repeat;
    background-size: 160px;
    transition: background 0.8s; */
  }
  &:hover ${Text} {
    font-weight: 600;
  }
`;

const CardCont = styled.div`
  &:hover ${Text} {
    transition: 0.5s ease;
    font-weight: 600;
  }
  &:hover ${Image} {
    height: 8vw;
    width: 8vw;
    transition: 0.5s ease;
  }
  &:hover ${Card} {
    background: #fff8eb;
    transition: 0.5s ease;
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
  const navigate = useNavigate();

  return (
    <OverContainer>
      <Wrapper>
        <GridDiv>
          {Cate.map((item) => (
            <StyledLink to={`/product?search=${item.Cat}`}>
              <CardCont>
                <Card>
                  <Image src={item.img} />
                </Card>
                <Text>{item.Cat}</Text>
              </CardCont>
            </StyledLink>
          ))}
        </GridDiv>
      </Wrapper>
    </OverContainer>
  );
};

export default TrendingCard;
