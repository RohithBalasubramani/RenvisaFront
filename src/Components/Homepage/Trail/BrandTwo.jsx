import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Products5 } from "../../../data";
import Product from "../../../Pages/ProductDescription";
import { Brands } from "./Brands/BrandData";

const ContainerWhole = styled.div`
  overflow-x: hidden;
  background: #f1faff;
  padding-bottom: 5vh;
`;

const BrandHead = styled.div`
  color: #00337c;
  font-family: Lexend;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 135.5%; /* 48.78px */
  padding: 5vh;
  padding-bottom: 0%;
  display: flex;
  width: 100vw;
`;

const Center = styled.div`
  margin: auto;
`;

const Container = styled.div`
  height: 40vh;
  width: 400vh;
  display: block;

  transform: translateX(${(props) => props.pos % window.innerWidth}px);
  margin-right: 100vh;
`;

const Wrapper = styled.div`
  height: 12vh;
  width: 20vh;
  margin-left: 10vh;
  background-image: url(${(props) => props.bg});
  /* background-size: contain; */
  background-size: 20vh 12vh;
`;

const WrapperContainer = styled.div`
  margin-left: 3vh;
  display: flex;
  margin-top: 5vh;
`;
const WrapperContainerTwo = styled.div`
  margin-left: -5vh;
  display: flex;
  margin-top: 8vh;
`;

const BrandTwo = () => {
  const [position, setPosition] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPosition((position) => position + 1);
  //   }, 10);

  //   return () => clearInterval(interval);
  // }, []);

  const slicedBrands = Brands.slice(0, 6);
  const slicedBrands2 = Brands.slice(6, 13);
  return (
    <ContainerWhole>
      <BrandHead>
        <Center>Choose from 10+ Brands</Center>
      </BrandHead>

      <Container>
        <WrapperContainer>
          {slicedBrands.map((product) => (
            <Wrapper bg={product.img} />
          ))}
        </WrapperContainer>

        <WrapperContainerTwo>
          {slicedBrands2.map((product) => (
            <Wrapper bg={product.img} />
          ))}
        </WrapperContainerTwo>
      </Container>
    </ContainerWhole>
  );
};

export default BrandTwo;
