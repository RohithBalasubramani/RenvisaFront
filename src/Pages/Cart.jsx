import React, { useState } from "react";
import CartTab2 from "../Components/Cart/CartTab2";
import styled from "styled-components";
import HeaderTwo from "../Components/Header/HeaderTwo";
import { ChevronRight } from "@mui/icons-material";
import { Products4 } from "../data";
import ProductCard from "../Components/Homepage/ProductCard/ProductCard";
import ProdCardTwo from "../Components/Homepage/ProductCard/ProdCardTwo";

const Container = styled.div`
  background: #f9f9f9;
  padding-top: 13vh;
`;

const HeadCon = styled.div`
  position: sticky;
  width: 100vw;
  z-index: 100;
`;

const Head = styled.div`
  font-family: Lexend;
  font-size: 34px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0.15000000596046448px;
  text-align: left;
  color: #00337c;
  display: flex;
  margin-bottom: 3vh;
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

const SimilarProdDiv = styled.div`
  width: 95%;
  margin-left: 2vw;
  margin-bottom: 5vh;
  margin-top: 10vh;
`;

const ProdWrapper = styled.div`
  display: flex;
  gap: 3vh;
  margin-top: 2vh;

  margin-right: auto;
`;

const Cart = ({ data }) => {
  const [limitedData, setLimitedData] = useState(data.slice(12, 18));

  return (
    <>
      <HeadCon>
        <HeaderTwo />
      </HeadCon>
      <Container>
        <CartTab2 />

        <SimilarProdDiv>
          <Head>
            Similar Products{" "}
            <HeadSpan>
              <div>See more</div> <ChevronRight sx={{ marginTop: "5px" }} />
            </HeadSpan>
          </Head>

          <ProdWrapper>
            {limitedData.map((items) => (
              <ProdCardTwo item={items} />
            ))}
          </ProdWrapper>
        </SimilarProdDiv>
      </Container>
    </>
  );
};

export default Cart;
