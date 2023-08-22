import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #f9f9f9;
  height: 100vh;
`;

const WhiteBG = styled.div`
  background-color: #ffffff;
  width: 60vw;
  height: 60vh;
  margin: 20vh;
`;

const OrdersHead = styled.div`
  color: #00337c;
  text-align: justify;
  font-family: Lexend;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 162.5%; /* 52px */
  letter-spacing: 0.64px;
  text-transform: capitalize;
`;

const Orders = () => {
  return (
    <Container>
      <OrdersHead>My orders</OrdersHead>
      <WhiteBG></WhiteBG>
    </Container>
  );
};

export default Orders;
