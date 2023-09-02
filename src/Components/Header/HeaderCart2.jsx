import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD, DLT, REMOVE } from "../../Redux/actions/action";
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
import { Add, Delete, Remove } from "@mui/icons-material";
import { ReactComponent as CartEmpty } from "../../Assets/EmptyCart.svg";
import Avatar from "@mui/material/Avatar";
import { ReactComponent as DeleteIcon } from "../../Assets/DeleteIcon.svg";

const Container = styled.div`
  margin: 3px;
  height: auto;
  width: 90%;
`;
const Quant = styled.div`
  display: inline;
  outline-color: black;
`;
const ValueButtonDecrease = styled.button`
  display: inline-block;
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  padding: 11px 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-right: -4px;
  border-radius: 8px 0 0 8px;

  &:hover {
    cursor: pointer;
  }
`;

const ValueButtonIncrease = styled.button`
  display: inline-block;
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  padding: 11px 0;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-left: -4px;
  border-radius: 0 8px 8px 0;

  &:hover {
    cursor: pointer;
  }
`;

const Inp = styled.input`
  text-align: center;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 40px;
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ProdName = styled.div`
  font-family: Lexend;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  padding-top: 2vh;
  padding-bottom: 2vh;
`;

const ProdContainer = styled.div`
  margin-top: 0;
  margin-bottom: 6%;
`;

const Refno = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #a2a1a1;
`;

const ProdPrice = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 500;
  width: max-content;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: right;
  color: #333333;
  display: flex;
  margin-bottom: 0%;
  margin-top: 100%;
  margin-left: auto;
  margin-right: 0%;
  padding-left: 1vh;
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
`;

const CartItems = styled.div`
  margin: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4vh;
`;

const EmptyText = styled.div`
  color: #011f46;
  font-family: Lexend;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.64px;
  margin: auto;
`;

const Price = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: right;
  color: #00337c;
`;

const CartlineQuant = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  margin-bottom: 10vh;
  color: #4f4f4f;
  gap: 2vh;
`;

const QuantBox = styled.div`
  background: white;
  border-radius: 3px;
  border: 1px solid #4f4f4f;
  width: 25px;
  text-align: center;
`;

const ImageCont = styled.div`
  height: 40vh;
  width: 20vw;
  padding-top: 4.5vh;
  padding-left: 3vw;
  border: 1px solid #e0e0e0;
`;

const Img = styled.img`
  height: 75%;
  width: 75%;

  margin-left: auto;
  margin-right: auto;
`;

const RFQButton = styled.button`
  border: 1px solid #003171;
  font-family: Lexend;
  font-size: 14px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  border-radius: 8px;
  padding: 1vh;
  padding-left: 3vh;
  padding-right: 3vh;
  background-color: #ffffff;
  color: #003171;
  &:hover {
    font-weight: 600;
    border: 2px solid #003171;
  }
`;

const HeaderCart = () => {
  const [price, setPrice] = useState(0);
  // console.log(price);

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
    <div>
      <Container>
        {getdata.length ? (
          <Table sx={{ borderCollapse: "separate", borderSpacing: "0px 3vh" }}>
            {/* <TableHead sx={{fontWeight:"600",fontSize:"18px"}}>
                              <TableRow>
                              <TableCell sx={{fontWeight:"600",fontSize:"18px"}}>Image</TableCell>
                              <TableCell sx={{fontWeight:"600",fontSize:"18px"}}  align="Left">Product Details</TableCell>
                              <TableCell align="Left"sx={{width:"22vh", fontWeight:"600",fontSize:"18px"}}>Quantity</TableCell>
                              <TableCell align="Left"sx={{width:"10vh", fontWeight:"600",fontSize:"18px"}}>Price</TableCell>
                              <TableCell sx={{fontWeight:"600",fontSize:"18px"}} align="Left">Delete</TableCell>
                                  
                                  
                              </TableRow>
                              </TableHead> */}
            <TableBody>
              {getdata.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    background: "#ffffff",
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {/* <Avatar
                                      alt="Remy Sharp"
                                      src={row.img}
                                      sx={{ width: "20vh", height: "20vh" }}
                                  />                                   */}
                    <ImageCont>
                      <Img class="center" src={row.image} />
                    </ImageCont>
                  </TableCell>

                  <TableCell align="left">
                    <ProdContainer>
                      <Refno>HSN Code :{row.HSN_code}</Refno>
                      <ProdName> {row.name}</ProdName>

                      <CartlineQuant>
                        Quantity{" "}
                        <Remove
                          onClick={
                            row.qnty <= 1 ? () => dlt(row.id) : () => rmv(row)
                          }
                        />{" "}
                        <QuantBox>{row.qnty}</QuantBox>{" "}
                        <Add onClick={() => add(row)} />
                      </CartlineQuant>
                    </ProdContainer>

                    {/* 
                          <CartlineQuant><IconButton onClick={row.qnty <=1 ? ()=>dlt(row.id) : ()=>rmv(row)}><Remove/></IconButton> {row.qnty} <IconButton onClick={()=>add(row)}><Add/></IconButton>
                                  </CartlineQuant>
                                   */}
                  </TableCell>

                  {/* <Quant>
                                  <ValueButtonDecrease  onClick={row.qnty <=1 ? ()=>dlt(row.id) : ()=>rmv(row)}>-</ValueButtonDecrease>
                                  <Inp value={row.qnty}/>
                                  <ValueButtonIncrease  onClick={()=>add(row)}>+</ValueButtonIncrease>
                                  </Quant> */}

                  {/* <Box sx={{display:"inline", border: '3px black' }}>
                                      <IconButton  sx={{size:"small", zIndex:10, paddingRight:"3vh", backgroundColor:'orange'}} onClick={row.qnty <=1 ? ()=>dlt(row.id) : ()=>rmv(row)}><Remove/></IconButton>
                                      {row.qnty}
                                      <IconButton sx={{size:"small", zIndex:10, paddingLeft:"3vh", backgroundColor:'orange'}} onClick={()=>add(row)}><Add/></IconButton>
                                      </Box> */}

                  <TableCell align="right" sx={{}}>
                    <IconButton
                      sx={{
                        color: "red",
                        fontSize: 20,
                        cursor: "pointer",
                        marginTop: "0%",
                        marginBottom: "55%",
                      }}
                      onClick={() => dlt(row._id)}
                    >
                      <DeleteIcon />{" "}
                    </IconButton>

                    <ProdPrice>
                      Total: &nbsp;
                      <Price>
                        ₹ {Math.ceil(row.discounted_price * row.qnty)}{" "}
                      </Price>
                    </ProdPrice>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <EmptyCart>
            <CartItems>
              {/* <SVGSize> */}
              <CartEmpty />
              {/* </SVGSize> */}
              <EmptyText>The Cart is Empty</EmptyText>
            </CartItems>
          </EmptyCart>
        )}
      </Container>
    </div>
  );
};

export default HeaderCart;
