import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BoldSecondWord from "./BoldSecond";

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: block;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;

  background: rgba(76, 175, 80, 0);
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
`;

const WrapperTwo = styled.div`
  height: 100%;
  display: flex;
`;

const WrapperA = styled.div`
  height: 100vh;
  width: 150vw;

  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -50}vw);
`;

const WrapperB = styled.div`
  position: absolute;
  left: 50%;
  z-index: 10;
  height: 300vh;
  width: 50vw;
  background: #fff8eb;

  display: flex;
  flex-direction: column;
  transition: all 1.5s ease;
  transform: translateY(${(props) => props.slideIndex * -100}vh);
`;

const SlideB = styled.div`
  width: 50vw;
  height: 300vh;
  display: flex;

  background: #fff8eb;

  display: flex;
  flex-direction: column;
  color: black;

  align-items: center;
  background-color: #${(props) => props.bg};
  /* background:url(${(props) => props.img}) ; */
  /* background: inherit; */
`;

const SlideContBox = styled.div`
  padding-top: 15%;
  padding-bottom: 15%;
  padding-left: 10%;
  padding-right: 11%;
`;

const Slide = styled.div`
  width: 150vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  /* background:url(${(props) => props.img}) ; */
  /* background: inherit; */
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 15%;
  left: 15%;
  padding: 1vh;
  z-index: 10;

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

const Emp = styled.div`
  background-color: #c5009a;
  height: 100vh;
  width: 50vw;
`;

const ContBoxCont = styled.p`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #4f4f4f;
  margin-bottom: 4vh;
`;

const Button = styled.div`
  background-color: #00337c;
  color: #ffffff;
  width: 35%;
  padding: 1.5vh;
  font-family: Lexend;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 1.25px;
  text-align: center;
  border-radius: 8px;
`;

const Solu = ({ Items, interval = 5000 }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClickOne = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % Items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, Items.length]);

  return (
    <Container>
      <WrapperTwo>
        <WrapperA slideIndex={slideIndex}>
          {Items.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <h2>{item.title}</h2>
            </Slide>
          ))}
        </WrapperA>

        <WrapperB slideIndex={slideIndex}>
          {Items.map((item) => (
            <SlideB key={item.id}>
              <SlideContBox>
                <BoldSecondWord sentence={item.title} />
                <ContBoxCont>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  at augue lacinia urna porta tempor eu vitae risus. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Aenean ac diam
                  sit amet purus tincidunt vehicula id tempor lorem. Praesent
                  ipsum tellus, congue a libero ut, congue dictum lorem. In
                  lacus metus, tempor at imperdiet at, consectetur sit amet
                  ligula.
                </ContBoxCont>
                <Button>TRY NOW</Button>
              </SlideContBox>
            </SlideB>
          ))}
        </WrapperB>

        {/* <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlined />
      </Arrow> */}

        <Indicators>
          {Items.map((image, index) => (
            <Indicator
              key={index}
              isActive={index === slideIndex}
              onClick={() => handleClickOne(index)}
            />
          ))}
        </Indicators>
      </WrapperTwo>
    </Container>
  );
};

export default Solu;
