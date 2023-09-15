import React, { useState } from "react";
import ProductCard from "../Homepage/ProductCard/ProductCard";

import styled from "styled-components";
import { ChevronRight } from "@mui/icons-material";
import ProdCardTwo from "../Homepage/ProductCard/ProdCardTwo";
import { useNavigate } from "react-router-dom";
import StyledLink from "../StyLink";

const Container = styled.div`
  background-color: #fdfdfd;
  width: 100%;
  border-top: 1px solid #e0e0e0;
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
  padding-right: 0vh;
  display: inline-flex;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
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

  padding-bottom: 5vh;
`;

const SimilarProdDiv = styled.div`
  padding-top: 10vh;
  padding-bottom: 10vh;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const ProdWrapper = styled.div`
  display: flex;
  gap: 3vh;
`;

const Flex = styled.div`
  display: flex;
`;

const SimilarProd = ({ data, sub }) => {
  const [limitedData, setLimitedData] = useState(data.slice(0, 5));
  const navigate = useNavigate();

  const handleSearchButtonClick = ({ search }) => {
    navigate(`/product?search=${search}`);
  };

  console.log(data, "this is consoledata");

  return (
    <Container>
      <SimilarProdDiv>
        <Head>
          Similar Products{" "}
          <HeadSpan>
            <StyledLink to={`/product?search=${sub}`}>
              <Flex>
                <div>See more</div> <ChevronRight sx={{ marginTop: "5px" }} />
              </Flex>
            </StyledLink>
          </HeadSpan>
        </Head>
        <ProdWrapper>
          {limitedData.map((items) => (
            <ProdCardTwo item={items} />
          ))}
        </ProdWrapper>
      </SimilarProdDiv>
    </Container>
  );
};

export default SimilarProd;
