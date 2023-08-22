import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { ADD } from "../../../Redux/actions/action";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import StyRating from "./StyRating";

const Container = styled.div``;

const Instocktext = styled.p`
  color: green;
  opacity: 0;
  text-align: center;
`;

const CardImage = styled.img`
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
  object-fit: contain;
  height: 80%;
  overflow: hidden;
  transition: height 1s;
`;

const Card = styled.div`
  position: relative;
  background: #ffffff;
  overflow: hidden;
  height: 26vw;
  width: 15vw;
  border: 2px solid #f2f2f2;

  transition: height 2s;
  &:hover ${CardImage} {
    /* height: 305px;
    overflow: hidden; */
  }

  &:hover {
  }
`;
const CardImgBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2vh;
  background: #f2f2f2;
  height: 60%;
  width: 100%;
  padding: 10px;
  z-index: 1;
`;

const CardContBox = styled.div`
  position: relative;
  width: 100%;

  padding: 2vh;
  padding-top: 0.5vh;
  /* border-width: 0px, 0px, 1px, 1px;
  border-style: solid;
  border-color: #E0E0E0; */

  display: block;
  justify-content: center;
  align-items: left;
  font-family: Lexend;
  /* border-width: 0px 3px 3px 3px;
  border-style: solid;
  border-color: #E0E0E0; */
`;
const ContBoxHead = styled.div`
  color: #000;
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 175% */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ContBoxPrice = styled.h2`
  font-size: 24px/3;
  color: white;
  font-weight: 700;
  letter-spacing: 1px;
`;

const ProdBotDet = styled.div`
  display: flex;
  align-items: flex-start;
  font-family: Lexend;
  font-size: 20px/3;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

const BrandDiv = styled.div`
  color: var(--gray-3, #828282);
  font-family: Lexend;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 186.667% */
  text-overflow: ellipsis; /* enables ellipsis */
  white-space: nowrap; /* keeps the text in a single line */
  overflow: hidden;
`;

const ProdPrice = styled.div`
  color: #333;
  font-family: Lexend;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */
`;

const ProdPriceOld = styled.div`
  color: var(--gray-3, #828282);
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-decoration: line-through;

  margin-left: 2%;
`;

const RefNum = styled.div`
  color: var(--gray-3, #828282);
  font-family: Lexend;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 233.333% */
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const ProdCardTwo = ({ item }) => {
  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  return (
    <Container>
      <Card>
        <StyledLink to={`/products/${item._id}`}>
          <CardImgBox>
            {/* <Image/> */}
            <CardImage src={item.image}></CardImage>
          </CardImgBox>

          <CardContBox>
            {/* <ProdBotDetDivRight>asjkdnjk</ProdBotDetDivRight> */}

            <RefNum>HSN Code:{item.HSN_code}</RefNum>
            <ContBoxHead>{item.name}</ContBoxHead>
            <StyRating value={item.rating} />
            <BrandDiv>{item.brand}</BrandDiv>
            {/* <ContBoxPrice> */}
            <ProdBotDet>
              <ProdPrice>₹{item.discounted_price}</ProdPrice>
              <ProdPriceOld>₹{item.price}</ProdPriceOld>
            </ProdBotDet>

            {/* 61.<small>98</small> €</ContBoxPrice> */}
          </CardContBox>
        </StyledLink>
      </Card>
    </Container>
  );
};

export default ProdCardTwo;
