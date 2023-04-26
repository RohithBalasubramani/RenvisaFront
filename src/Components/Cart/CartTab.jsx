import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT, ADD, REMOVE } from '../../Redux/actions/action';
import styled from 'styled-components';
import Menu from '@mui/icons-material/Menu';
import { IconButton, Tab, Table, TableRow, TableCell, TableBody, TableHead, Input} from '@mui/material';
import { Add, Delete, Remove } from '@mui/icons-material';
import cartgif from "../../Assets/cart.gif"
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';
import { ReactComponent as DeleteIcon } from "../../Assets/DeleteIcon.svg"

const Container=styled.div`
  margin: 3px;
  height: auto;
  width: 90%;

`
const Quant=styled.div`
  display: inline;
  outline-color: black;

`
const ValueButtonDecrease= styled.button`
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


`

const ValueButtonIncrease= styled.button`
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


`


const Inp= styled.input`
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
`

const ProdName = styled.div`
font-family: Lexend;
font-size: 20px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0em;
text-align: left;
padding-top: 2vh;
padding-bottom: 2vh;

`

const ProdContainer = styled.div`
margin-top: 0;
margin-bottom: 6%;
`

const Refno = styled.div`
font-family: Lexend;
font-size: 16px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
color: #a2a1a1 ;`

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
margin-right:0%;
padding-left: 1vh;

`

const Price = styled.div`
font-family: Lexend;
font-size: 16px;
font-weight: 700;
line-height: 28px;
letter-spacing: 0em;
text-align: right;
color: #00337C;

`

const CartlineQuant = styled.div`

font-family: Lexend;
font-size: 16px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
display: flex;
margin-bottom: 10vh;
color: #4F4F4F;
gap: 2vh;
`

const QuantBox = styled.div`
background: white;
border-radius: 3px;
border: 1px solid #4F4F4F;
width: 25px;
text-align: center;

`

const ImageCont = styled.div`
height: 40vh;
width: 20vw;
padding-top: 4.5vh;
padding-left: 3vw;
border: 1px solid #E0E0E0;
`

const Img = styled.img`
height:80%;

margin-left: auto;
  margin-right: auto;


`

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
&:hover{
    font-weight: 600;
    border: 2px solid #003171;
}

`


const CartTab = () => {

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

    const add = (id)=>{
        dispatch(ADD(id))
    }

    const rmv = (id)=>{
        dispatch(REMOVE(id))
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
                        <div className='card_details' style={{width:"auto" }}>
                            <Table sx={{borderCollapse: 'separate',  borderSpacing: '0px 3vh'}}>
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
                                key={row.rname}
                                sx={{  background:"#ffffff", '&:last-child td, &:last-child th': { border: 0} }}
                                >

                                <TableCell component="th" scope="row"> 
                                {/* <Avatar
                                    alt="Remy Sharp"
                                    src={row.img}
                                    sx={{ width: "20vh", height: "20vh" }}
                                />                                   */}
                                <ImageCont>
                                    <Img class="center" src ={row.img}/>
                                </ImageCont>
                                
                                </TableCell>


                                <TableCell align="left">

                                    <ProdContainer>
                                    <Refno>Ref no. :{row.refno}</Refno> 
                                    
                                    <ProdName> {row.rname}</ProdName>
                                    
                                    



                                    
                                    <CartlineQuant>Quantity <Remove onClick={row.qnty <=1 ? ()=>dlt(row.id) : ()=>rmv(row)} /> <QuantBox>{row.qnty}</QuantBox> <Add onClick={()=>add(row)}/>
                        </CartlineQuant>
                        <RFQButton>Request RFQ</RFQButton>

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

                                    <IconButton sx={{color:"red",fontSize:20,cursor:"pointer", marginTop:"0%", marginBottom:"55%"}}  onClick={()=>dlt(row.id)}><DeleteIcon/> </IconButton>
                                     
                                    <ProdPrice>
                                    Total: &nbsp;<Price>₹  {Math.ceil(row.price * row.qnty)} </Price>
                                    </ProdPrice> 
                                     </TableCell>




                                </TableRow>
                            ))}

                            </TableBody>

  
                            </Table>
                        </div>:
                        
                   <div className='card_details d-flex justify-content-center align-items-center' style={{width:"100%",padding:10,position:"relative"}}>
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

export default CartTab
