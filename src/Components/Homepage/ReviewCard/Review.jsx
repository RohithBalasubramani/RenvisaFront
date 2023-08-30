import { Avatar, Rating } from "@mui/material";
import React from "react";
import styled from "styled-components";

import { ReviewData } from "../../../data";
import StyRating from "../ProductCard/StyRating";

const Container = styled.div`
  font-family: "Poppins";
  font-style: normal;
  color: #ffffff;
  padding: 3vh;
  background: inherit;
`;

const Cards = styled.div`
  display: flex;
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  gap: 2vw;
  margin: 2vh;
  margin-right: auto;
  margin-left: 10vh;
  padding: 0;
  list-style-type: none;
`;
const CardOverlay = styled.div`
  /* position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1; */
  background-color: #f1faff;
  height: 60%;
  /* 
  transform: translateY(100%);
  transition: 0.2s ease-in-out; */
`;
const CardHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  gap: 2em;
  padding: 2em;
  background-color: #f1faff;
  /* transform: translateY(-100%);
  transition: 0.2s ease-in-out; */
`;

const Card = styled.div`
  position: relative;
  display: block;
  height: 60vh;
  width: 60vh;
  border-width: 1px, 1px, 1px, 1px;
  border-style: solid;
  border-color: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  background-color: #f1faff;

  /* &:hover ${CardOverlay} {
    transform: translateY(0);
  }

  &:hover ${CardHeader} {
    transform: translateY(0);
  } */
`;

const ImgCon = styled.div`
  height: 40%;
  background-color: white;
  display: flex;
`;

const CardImg = styled.img`
  width: 60%;
  height: 100%;
  padding: 5vh;
  margin: auto;
`;

const CardTitle = styled.div`
  font-family: "Lexend";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  color: #000000;
`;

const CardTagline = styled.div`
  display: block;
`;

const CardStatus = styled.span`
  font-size: 0.8em;
  color: #ffffff;
`;
const CardDes = styled.div`
  padding: 0 2em 2em;
  margin: 0;
  color: #ffffff;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  background-color: #f1faff;

  font-family: "Lexend";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  color: #000000;

  /* or 28px */

  text-align: justify;
`;

const Review = () => {
  return (
    <Container>
      <Cards>
        {ReviewData.map((item) => (
          <Card>
            <ImgCon>
              <CardImg src={item.imgOf} />
            </ImgCon>
            <CardOverlay>
              <CardHeader>
                <Avatar
                  sx={{ width: "50px", height: "50px" }}
                  src={item.imgUser}
                />

                <CardTagline>
                  <CardTitle>{item.name}</CardTitle>
                  <CardStatus>
                    <StyRating value={5} />
                  </CardStatus>
                </CardTagline>
              </CardHeader>
              <CardDes>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                ullam assumenda nesciunt maiores iusto. Soluta quas fuga earum
                amet porro?
              </CardDes>
            </CardOverlay>
          </Card>
        ))}
      </Cards>
    </Container>
  );
};

export default Review;
