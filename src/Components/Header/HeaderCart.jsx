import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../../Redux/actions/action';
import styled from 'styled-components';
import Menu from '@mui/icons-material/Menu';
import { IconButton, Tab, Table, TableRow, TableCell, TableBody, TableHead} from '@mui/material';
import { Delete } from '@mui/icons-material';
import cartgif from "../../Assets/cart.gif"
import Avatar from '@mui/material/Avatar';


const Container=styled.div`
  margin: 3px;
  height: auto;
  width: 95vh;

`
const Wrapper=styled.div`
  align-items: right;

`

const HeaderCart = () => {

    const [price,setPrice] = useState(0);
    // console.log(price);

    const getdata = useSelector((state)=> state.cartreducer.carts);
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


    const dlt = (id)=>{
        dispatch(DLT(id))
    }

    
    const total = ()=>{
        let price = 0;
        getdata.map((ele,k)=>{
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };

    useEffect(()=>{
        total();
    },[total])



  return (
    <div>
        <Container>

                    {
                        getdata.length ? 
                        <div className='card_details' style={{width:"40rem",padding:10}}>
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
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >


                                <TableCell align="right"> <IconButton sx={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>dlt(row.id)}><Delete/> </IconButton>  </TableCell>
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
                            <TableRow>
                            Total :₹ {price}

                            </TableRow>
                            </Wrapper>
                            </TableBody>

  
                            </Table>
                        </div>:
                        
                   <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                    <i className='fas fa-close smallclose'
                    onClick={handleClose}
                     style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                    <p style={{fontSize:22}}>Your carts is empty</p>
                    <img src={cartgif} alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
                   </div>
                    }

      
                </Container>
      
    </div>
  )
}

export default HeaderCart
