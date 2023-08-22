import { mobile } from "../../responsive";
import CartTab from "./CartTab";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../../Redux/actions/action";
import styled from "styled-components";
import Menu from "@mui/icons-material/Menu";
import {
  IconButton,
  Tab,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import cartgif from "../../Assets/cart.gif";
import Avatar from "@mui/material/Avatar";

const Container = styled.div`
  height: max-content;
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.div`
  display: flex;
  font-family: Lexend;
  font-size: 32px;
  font-weight: 500;
  line-height: 52px;
  letter-spacing: 0.02em;
  text-align: justified;
  color: #00337c;
`;

const TitSpan = styled.div`
  font-family: Lexend;
  font-size: 24px;
  font-weight: 400;
  line-height: 39px;
  letter-spacing: 0.02em;
  text-align: justified;
  color: #333333;
  margin-top: 7px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 2vh;
  font-weight: 600;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#09193D" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  &:hover {
    background-color: #09193d;
    color: #ffffff;
  }
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  padding: 20px;
  height: max-content;
  background: #ffffff;
`;

const SummaryTitle = styled.div`
  font-family: Lexend;
  font-size: 32px;
  font-weight: 500;
  line-height: 52px;
  letter-spacing: 0.02em;
  text-align: justified;
  padding: 2vh;
  border-bottom: 1px solid #e0e0e0;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  border-top: ${(props) => props.type === "total" && " 1px solid #E0E0E0"};
  border-bottom: ${(props) => props.type === "total" && " 1px solid #E0E0E0"};
  padding-top: ${(props) => props.type === "total" && " 2vh"};
  padding-bottom: ${(props) => props.type === "total" && "2vh"};
`;

const SummaryItemText = styled.div`
  font-family: Lexend;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemPrice = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

const Button = styled.button`
  width: 100%;
  padding: 2vh;
  padding-left: 30%;
  font-family: Lexend;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  border: 0ch;
  border-radius: 8px;

  background: #f5a91d;
  color: #00337c;

  &:hover {
    border: 2px solid #00337c;
  }
`;

const CartTab2 = () => {
  const [price, setPrice] = useState(0);
  console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const add = (id) => {
    dispatch(ADD(id));
  };

  const rmv = (id) => {
    dispatch(REMOVE(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <Container>
      <Wrapper>
        <Title>
          {" "}
          <div>Cart:</div>
          <TitSpan>({getdata.length})</TitSpan>
        </Title>
        {/* <Top>
          <Link to="/">
          <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>

          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top> */}
        <Bottom>
          <Info>
            <CartTab />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹ {Math.ceil(price)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Total GST</SummaryItemText>
              <SummaryItemPrice>₹ {Math.ceil(price * 0.18)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹ 0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText> Discount</SummaryItemText>
              <SummaryItemPrice>₹ 0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText type="total">Total</SummaryItemText>
              <SummaryItemPrice>₹ {Math.ceil(price)}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default CartTab2;
