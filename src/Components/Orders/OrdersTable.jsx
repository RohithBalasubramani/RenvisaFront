import React from "react";
import styled from "styled-components";
import PVImg from "../../Assets/Product/p1.png";
import BpCheckbox from "./CustomCheckbox";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 35vh;
  margin-bottom: 1px solid grey;
`;

const OrderItem = styled.div`
  width: ${(props) => props.width};
  display: block;
  height: 100%;
`;

const ImageDiv = styled.div`
  height: 95%;
  margin: 5%;
  border: 1px solid var(--gray-5, #e0e0e0);
  background: lightgray 50% / cover no-repeat, #d9d9d9;
`;

const Image = styled.img`
  height: 95%;
`;

const ContInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vh;
  gap: 2vh;
`;

const RefNumber = styled.div`
  color: var(--gray-3, #828282);
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
`;

const ProdTit = styled.div`
  color: #000;
  font-family: Lexend;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Quant = styled.div`
  color: var(--gray-2, #4f4f4f);
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PriceDiv = styled.div`
  display: flex;
  gap: 5vw;
`;

const Price = styled.div`
  color: #00337c;
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 175% */
`;

const Saved = styled.div`
  color: #f5a91d;
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
`;

const Delived = styled.div`
  color: #308000;
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
  margin-top: 5vh;
  margin-left: 15%;
`;

const ListObtain = styled.div`
  display: block;
  margin-top: 5vh;
`;
const ListItems = styled.div`
  display: flex;
`;

const ListItem = styled.div`
  color: #000;
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 200% */
`;

const LeftMar = styled.div`
  border-left: 1px solid #000000;
  height: 5vh;
  margin-left: 2.3vh;
  margin-top: -8px;
`;

const OrdersTable = () => {
  return (
    <Container>
      <OrderItem width="18%">
        <ImageDiv>
          <Image src={PVImg}></Image>
        </ImageDiv>
      </OrderItem>
      <OrderItem width="35%">
        <ContInfo>
          <RefNumber>Ref no: 5SV44140RC</RefNumber>
          <ProdTit>Dimond Aluminium Solar panel Mounting Structure</ProdTit>
          <Quant>Quantity : 1</Quant>
          <PriceDiv>
            <Price>Rs. 7,000</Price>
            <Saved>Saved Rs.250/-</Saved>
          </PriceDiv>
        </ContInfo>
      </OrderItem>
      <OrderItem width="30%">
        <Delived>Expected Delivery : 05 Jan 2023 </Delived>
      </OrderItem>
      <OrderItem width="15%">
        <ListObtain>
          <ListItems>
            <BpCheckbox disabled checked />
            <ListItem>Order Placed</ListItem>
          </ListItems>
          <LeftMar />
          <ListItems>
            <BpCheckbox disabled checked />
            <ListItem>Dispatched</ListItem>
          </ListItems>
          <LeftMar />
          <ListItems>
            <BpCheckbox disabled checked />
            <ListItem>Shipped</ListItem>
          </ListItems>
          <LeftMar />
          <ListItems>
            <BpCheckbox disabled />
            <ListItem>Delivered</ListItem>
          </ListItems>
        </ListObtain>
      </OrderItem>
    </Container>
  );
};

export default OrdersTable;
