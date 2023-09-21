import {
  AddCircle,
  DownloadDone,
  LocalShipping,
  Login,
  Payment,
  ReceiptLong,
  RequestQuote,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Checkbox,
  Divider,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import CustomizedAccordions from "../Components/Bulkquery/Accordion";
import Sellers from "../Components/SellersAccount/SellerTwo";
import SliderBack from "../Assets/Sellers/SellersBack.jpg";
import Logo from "../Components/Header/Logo";
import LogoWhite from "../Components/Header/LogoWhite";
import HeaderTwo from "../Components/Header/HeaderTwo";

const Container = styled.div`
  background-image: url(${SliderBack});
  background-size: 100vw 180vh;
  height: 180vh;
  width: 100%;
  display: flex;
  position: relative;
  font-family: "Lexend";
  font-style: normal;
  padding-top: 10vh;
`;

const Title = styled.div`
  color: #fff;
  font-family: Urbanist;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  flex: 1;
  padding: 5vh;
`;

const SVGSize = styled.div`
  transform: scale(1.3);
`;

const TitSpan = styled.div`
  color: var(--Gray-6, #f2f2f2);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.7px;
  width: 80%;
  margin-top: 2vh;
  margin-left: 8vh;
`;

const TitAccent = styled.div`
  font-weight: 700;
  color: #ff9471;
`;
const Midcon = styled.div`
  position: relative;
  flex: 1;
`;

const FaqBox = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 180.5%;
  padding: 3vh;
  /* identical to box height, or 65px */
  margin-top: 6vh;
  margin-bottom: 2vh;

  align-items: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #000000;
`;

const SellersCont = styled.div`
  width: 100%;
  padding: 10vh;
`;

const Instruc = styled.div`
  display: inline-flex;
  align-items: center;
`;
const InsDis = styled.div`
  display: block;
  font-weight: 700;
  font-size: 35px;
  line-height: 180.5%;
  /* or 63px */

  align-items: center;
  letter-spacing: 0.05em;
  text-transform: capitalize;

  color: #ffffff;
`;

const InsDisSpan = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 180.5%;
  /* or 25px */
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

const InsCont = styled.div`
  display: block;
`;

const Instot = styled.div`
  padding: 10vh;
  padding-left: 10vh;
`;

const VertiLine = styled.div`
  color: white;
  border-left: 3px solid white;
  height: 10vh;
  margin-left: 5vh;
`;

const TitFlex = styled.div`
  display: flex;
  gap: 1.5vh;
`;

const HeadCon = styled.div`
  position: sticky;
  width: 100vw;
  z-index: 100;
`;

const SellersAccount = () => {
  return (
    <div>
      <HeadCon>
        <HeaderTwo />
      </HeadCon>
      <Container>
        <Title>
          <TitFlex>
            <LogoWhite />
            <div>Are you a seller? Join Renvisa Tech today!</div>
          </TitFlex>
          <TitSpan>
            Now you can easily elevate your business with Renvisa's online B2B
            Industrial Marketplace. Gain access to a vast network of potential
            buyers, increase your visibility, and boost your sales. Our platform
            is designed to connect you with the right customers for your
            products.
          </TitSpan>
        </Title>

        <Midcon>
          <SellersCont>
            <Sellers />
          </SellersCont>
        </Midcon>

        {/* <FaqBox>
        <FaqTit>Frequently asked questions</FaqTit>

        <CustomizedAccordions />
      </FaqBox> */}
      </Container>
    </div>
  );
};

export default SellersAccount;
