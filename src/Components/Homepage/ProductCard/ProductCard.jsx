import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { ADD } from "../../../Redux/actions/action";
import { Link } from "react-router-dom";
import axios from "axios";
import { Rating } from "@mui/material";

const Container = styled.div``;

const Instocktext = styled.p`
  color: green;
  opacity: 0;
  text-align: center;
`;

const ContBoxBuy = styled.button`
  position: absolute;
  top: 100px;
  margin-left: 15%;
  opacity: 0;
  display: flex;
  margin-right: 2vh;
  padding: 10px 30px;
  margin-top: 50%;
  width: 22vh;

  color: #000000;
  text-decoration: none;
  background: #ff9471;
  border-radius: 30px;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 1px;
  transition: 0.5s;
  z-index: 7;

  &:hover {
    background: #fe8b64;
  }

  &:hover ${Instocktext} {
    color: green;

    opacity: 1;
  }
`;

const CardImage = styled.img`
  height: 278px;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
  width: 300px;
  overflow: hidden;
  transition: height 1s;
`;

const Card = styled.div`
  position: relative;
  background: #ffffff;
  overflow: hidden;
  height: 550px;
  width: 390px;
  border: 2px solid #f2f2f2;

  transition: height 2s;
  &:hover ${CardImage} {
    height: 305px;
    overflow: hidden;
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
  font-family: Lexend;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ContBoxPrice = styled.h2`
  font-size: 24px;
  color: white;
  font-weight: 700;
  letter-spacing: 1px;
`;

const ProdBotDet = styled.div`
  display: flex;
  align-items: flex-start;
  font-family: Lexend;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

const BrandDiv = styled.div`
  font-family: Lexend;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #828282;
`;

const ProdPrice = styled.div`
  font-family: Lexend;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
  margin-right: 10px;
`;

const ProdPriceOld = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-decoration: line-through;
  color: #828282;
`;

const RefNum = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #828282;
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

const ProductCard = ({ item }) => {
  // const [mydata, setmydata] = useState();

  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/products")
  //     .then((res) => console.log(res.data.products));
  // }, []);

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
            <Rating
              name="read-only"
              value={item.rating}
              readOnly
              precision={0.5}
            />
            ({item.numReviews})<BrandDiv>{item.brand}</BrandDiv>
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

export default ProductCard;
