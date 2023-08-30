import React, { useState } from "react";
import styled from "styled-components";
import ProdCardTwo from "./ProdCardTwo";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const CarouselContainer = styled.div`
  /* display: flex; */
`;

const Slide = styled.div`
  display: flex;
  gap: 1.3vw;
  padding-left: 1vw;
  transition: transform 0.5s ease;
`;

const Wrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  height: 50vh;
  transition: transform 0.5s ease;
`;

const Head = styled.div`
  font-family: Lexend;
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0.15000000596046448px;
  text-align: left;
  color: #00337c;
  display: flex;
  padding-top: 3vh;
  padding-left: 3vh;
  margin-bottom: 3vh;
`;

const Button = styled.button`
  border-radius: 100%;
  width: 2vw;
  margin-left: 1vw;
  /* border-color: #828282; */
  background-color: white;
  color: #828282;
`;

const HeadSpan = styled.div`
  font-family: Lexend;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.15000000596046448px;
  text-align: left;
  margin-right: 0%;
  margin-left: auto;
  padding-right: 3vh;
  display: inline-flex;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div``;

const Carousel = ({ cards }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (newSlide) => {
    setCurrentSlide(newSlide);
  };

  const slideWidth = 100 / Math.ceil(cards.length / 6);

  return (
    <CarouselContainer>
      <Head>
        Best Seller{" "}
        <HeadSpan>
          <ButtonContainer>
            <Button
              onClick={() => handleSlideChange(currentSlide - 1)}
              disabled={currentSlide === 0}
            >
              <ChevronLeft />
            </Button>
            <Button
              onClick={() => handleSlideChange(currentSlide + 1)}
              disabled={currentSlide === Math.ceil(cards.length / 6) - 1}
            >
              <ChevronRight />
            </Button>
          </ButtonContainer>{" "}
        </HeadSpan>
      </Head>

      <Wrapper>
        <Slide
          style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}
        >
          {/* {cards.map((card, index) => (
          <Card key={index}>{card}</Card>
        ))} */}
          {cards.map((items) => (
            <ProdCardTwo item={items} />
          ))}
        </Slide>
      </Wrapper>
    </CarouselContainer>
  );
};

export default Carousel;
