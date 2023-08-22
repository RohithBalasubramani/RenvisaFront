import { Avatar, Rating } from "@mui/material";
import React from "react";
import styled from "styled-components";
import LC from "../../../Assets/lc.jpg";
import LCC from "../../../Assets/Review/Office1.jpg";

import { ReviewData } from "../../../data";

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
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #fff8eb;

  transform: translateY(100%);
  transition: 0.2s ease-in-out;
`;
const CardHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  gap: 2em;
  padding: 2em;
  background-color: #fff8eb;
  transform: translateY(-100%);
  transition: 0.2s ease-in-out;
`;

const Card = styled.div`
  position: relative;
  display: block;
  height: 40vh;
  width: 60vh;
  border-width: 1px, 1px, 1px, 1px;
  border-style: solid;
  border-color: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;

  &:hover ${CardOverlay} {
    transform: translateY(0);
  }

  &:hover ${CardHeader} {
    transform: translateY(0);
  }
`;
const CardImg = styled.img`
  width: 100%;
  height: auto;
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
const CardDes = styled.p`
  padding: 0 2em 2em;
  margin: 0;
  color: #ffffff;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  background-color: #fff8eb;

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
            <CardImg src={LCC} />
            <CardOverlay>
              <CardHeader>
                <Avatar
                  sx={{ width: "50px", height: "50px" }}
                  src={item.imgUser}
                />

                <CardTagline>
                  <CardTitle>{item.name}</CardTitle>
                  <CardStatus>
                    <Rating
                      name="half-rating-read"
                      defaultValue={5}
                      precision={0.5}
                      readOnly
                    />
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
