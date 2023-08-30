import React from "react";
import styled from "styled-components";
import OrdersTable from "../Components/Orders/OrdersTable";
import HeaderTwo from "../Components/Header/HeaderTwo";

const Container = styled.div`
  background: #f9f9f9;
  height: 100vh;
  width: 100%;
  padding: 2.5vw;
  padding: 15vh;
`;

const WhiteBG = styled.div`
  background-color: #ffffff;
  width: 95%;
  height: 60vh;
`;

const Heading = styled.div`
  color: #00337c;
  text-align: justify;
  font-family: Lexend;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 162.5%; /* 52px */
  letter-spacing: 0.64px;
  text-transform: capitalize;
  margin-bottom: 3vh;
`;

const OrdersHead = styled.div`
  background-color: #fafdff;
  width: 100%;
  display: flex;
  padding: 2vh;
`;

const HeadItem = styled.div`
  width: ${(props) => props.width};
  display: block;
`;

const HeadTit = styled.div`
  font-family: Lexend;
  font-size: 14px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;

const HeadSpan = styled.div`
  font-family: Lexend;
  font-size: 14px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #979797;
`;

const PriceHead = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
`;

const HeadCon = styled.div`
  position: sticky;
  width: 100vw;
  z-index: 100;
`;

const Orders = () => {
  return (
    <div>
      <HeadCon>
        <HeaderTwo />
      </HeadCon>
      <Container>
        <Heading>My orders</Heading>
        <WhiteBG>
          <OrdersHead>
            <HeadItem width="10%">
              <HeadTit>Order ID</HeadTit>
              <HeadSpan>123456789</HeadSpan>
            </HeadItem>
            <HeadItem width="15%">
              <HeadTit>Ordered Placed </HeadTit>
              <HeadSpan>27 feb 2023</HeadSpan>
            </HeadItem>
            <HeadItem width="32%">
              <HeadTit>Address</HeadTit>
              <HeadSpan>Lorem ipsum dolor sit amet, </HeadSpan>
            </HeadItem>
            <HeadItem width="35%">
              <HeadTit>Payment Details</HeadTit>
              <HeadSpan>Lorem ipsum dolor sit amet, </HeadSpan>
            </HeadItem>
            <HeadItem>
              <PriceHead>Total</PriceHead>
              <PriceHead>7000.00 Rs </PriceHead>
            </HeadItem>
          </OrdersHead>
          <OrdersTable />
        </WhiteBG>
      </Container>
    </div>
  );
};

export default Orders;
