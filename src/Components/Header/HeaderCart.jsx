import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../../Redux/actions/action";
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
import { ReactComponent as CartEmpty } from "../../Assets/EmptyCart.svg";
import Avatar from "@mui/material/Avatar";

const Container = styled.div`
  margin: 3px;
  height: auto;
  width: 95vh;
  background-color: #ffffff;
`;
const Wrapper = styled.div`
  align-items: right;
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 35vh;
`;

const CartItems = styled.div`
  margin: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0vh;
`;

const SVGSize = styled.div`
  transform: scale(0.6);
`;

const EmptyText = styled.div`
  color: #011f46;
  font-family: Lexend;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.64px;
  margin: auto;
`;

const ButtonEmpty = styled.div`
  width: 15vw;
  background-color: #f5a91d;
  border-radius: 8px;
  color: #1e1e1e;
  padding: 2vh;
  color: #1e1e1e;
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 200% */
  text-align: center;
  margin: auto;
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
          <div className="card_details" style={{ width: "40rem", padding: 10 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="right">Delete</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Product</TableCell>
                  <TableCell>Image</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {getdata.map((row) => (
                  <TableRow
                    key={row.rname}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">
                      {" "}
                      <IconButton
                        sx={{ color: "red", fontSize: 20, cursor: "pointer" }}
                        onClick={() => dlt(row.id)}
                      >
                        <Delete />{" "}
                      </IconButton>{" "}
                    </TableCell>
                    <TableCell align="right">{row.qnty}</TableCell>
                    <TableCell align="right">₹ {row.price}</TableCell>

                    <TableCell align="right">{row.rname}</TableCell>
                    <TableCell component="th" scope="row">
                      <Avatar
                        alt="Remy Sharp"
                        src={row.img}
                        sx={{ width: "20vh", height: "20vh" }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
                <Wrapper>
                  <TableRow>Total :₹ {price}</TableRow>
                </Wrapper>
              </TableBody>
            </Table>
          </div>
        ) : (
          <EmptyCart>
            <CartItems>
              <SVGSize>
                <CartEmpty />
              </SVGSize>
              <EmptyText>The Cart is Empty</EmptyText>
            </CartItems>
          </EmptyCart>
        )}
      </Container>
    </div>
  );
};

export default HeaderCart;
