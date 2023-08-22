import React from "react";
import Review from "../Components/Homepage/ReviewCard/Review";

import TrendingCard from "../Components/Homepage/TrendingCard";
import WhyUs from "../Components/Homepage/WhyUs";
import styled from "styled-components";
import Slider from "../Components/Homepage/Slider/Slider";
import Header from "../Components/Header/Header";
import { Products5, sliderItems } from "../data";
import ScrollButton from "../Components/Homepage/ScrollButton";
import SliderBack from "../Assets/Slider/Slider.png";
import SellerTwo from "../Components/Homepage/Solu/SellerComp2";
import Solu from "../Components/Homepage/Solu/Solu";
import MovingDiv from "../Components/Homepage/Trail/BrandTwo";
import { Products4 } from "../data";
import ProdCardTwo from "../Components/Homepage/ProductCard/ProdCardTwo";
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Container = styled.div`
  background: #ffffff;
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
`;

const HeadTwo = styled.div`
  font-family: Lexend;
  font-size: 28px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: left;
  color: #00337c;
  margin-top: 5vh;
  margin-left: 36%;
  margin-right: auto;
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

const Slide = styled.div`
  background-image: url(${SliderBack});
  background-size: contain;
  background-size: 100vw 100vh;
`;

const HeadCon = styled.div`
  background-color: inherit;
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const ProdWrapper = styled.div`
  display: flex;
  gap: 2vh;
  padding: 4vh;
  padding-left: 3vh;
`;

const BrandCont = styled.div`
  overflow-x: hidden;
`;

const Home = () => {
  const navigate = useNavigate();

  const handleViewProd = () => {
    navigate(`/product?search=`);
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://renvisa.org/product/");
        setData(response.data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const Prod = data.slice(0, 6);

  return (
    <>
      <HeadCon>
        <Header />
      </HeadCon>

      <Slide>
        <Slider Items={sliderItems} />
      </Slide>
      <ScrollButton />

      <Container>
        {/* <Trail/> */}

        <Head>
          Best Seller{" "}
          <HeadSpan onClick={handleViewProd}>
            <div>See more</div> <ChevronRight sx={{ marginTop: "5px" }} />
          </HeadSpan>
        </Head>

        <ProdWrapper>
          {Prod.map((items) => (
            <ProdCardTwo item={items} />
          ))}
        </ProdWrapper>

        <Head>
          Categories{" "}
          <HeadSpan>
            <div>See more</div> <ChevronRight sx={{ marginTop: "5px" }} />
          </HeadSpan>
        </Head>
        <TrendingCard />

        <Solu Items={sliderItems} />

        <WhyUs />

        {/* <InfiniteMove/> */}
        <BrandCont>
          <MovingDiv />
        </BrandCont>

        <HeadTwo>Why Customers Love Renvisa </HeadTwo>
        <Review />

        <SellerTwo Items={sliderItems} />
        {/* <HalfWidthCarousel items={sliderItems} /> */}
      </Container>
    </>
  );
};

export default Home;
