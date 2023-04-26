import { AddCircle, DownloadDone, LocalShipping, Login, Payment, ReceiptLong, RequestQuote } from '@mui/icons-material'
import { Avatar, Button, Checkbox, Divider, ListItemText, MenuItem, OutlinedInput, Paper, Select, TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import CustomizedAccordions from '../Components/Bulkquery/Accordion'
import Sellers from '../Components/SellersAccount/Sellers'
  
 
 
const Container = styled.div`
background: #FFFFFF;
height: 260vh;
width: 100%;
display: block;
position: relative;
font-family: 'Poppins';
font-style: normal;

`


const Title = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 40px;
/* or 72px */
margin: 3vh;
margin-left: 5vh;
margin-bottom: 6.5vh;

display: block;
align-items: center;
letter-spacing: 0.05em;
text-transform: uppercase;

color: #000000;
`

const TitSpan = styled.div`
font-weight: 400;
font-size: 32px;
/* or 58px */
margin-top:0;

display: flex;
align-items: center;
letter-spacing: 0.05em;
color: #000000;
`

const TitAccent = styled.div`
font-weight: 700;
color: #FF9471;
`
const Midcon = styled.div`
background: #09193D;
border-radius: 100px 0px 0px 100px;
width: 100%;
height: 140vh;
position: relative;
`

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
`

const SellersCont = styled.div`
z-index: 4;
width: 40%;
position: absolute;
right: 7vh;
top: -25vh;
`

const Instruc = styled.div`
display: inline-flex;
align-items: center;

`
const InsDis = styled.div`
display: block;
font-weight: 700;
font-size: 35px;
line-height: 180.5%;
/* or 63px */

align-items: center;
letter-spacing: 0.05em;
text-transform: capitalize;

color: #FFFFFF;
`

const InsDisSpan = styled.div`
font-weight: 500;
font-size: 14px;
line-height: 180.5%;
/* or 25px */
display: flex;
align-items: center;
letter-spacing: 0.05em;
color: #FFFFFF;
`

const InsCont = styled.div`
display: block;
`

const Instot = styled.div`
padding: 10vh;
padding-left: 10vh;
`

const VertiLine = styled.div`
color: white ;
border-left:3px solid white;
height: 10vh;
margin-left: 5vh;
`

const FaqTit = styled.div`
text-align: center;
align-content: center;
`



const DispLeft = styled.div`
flex: 2;
height: 100%;
display: relative;

`






const SellersAccount = () => {

  

  return (
    <Container>
      <Title>
        Sell on Renvisa
      <TitSpan> In&nbsp; <TitAccent>4&nbsp;</TitAccent> simple steps</TitSpan>
      </Title>



      <Midcon>

      <Instot>

          <InsCont>
          <Instruc>
            <Avatar sx={{'&:hover':{background:"#FF9471", color:"#FF9471"},background:"white" , padding:"2.5vh", marginRight:"3vh" ,color:"black"}}>
              <Login  sx={{height:"4vh",width:"4vh", borderWidth:"1vh",padding:"2vh", background:"white", borderRadius:"50%"}} /></Avatar>
            <InsDis>Log in
            <InsDisSpan>Inorder to place Bulk Orders, LOG IN/ SIGN UP to your B2B Account.</InsDisSpan>
            </InsDis>

          </Instruc>
          <VertiLine/>


          </InsCont>



          <InsCont>
          <Instruc>
            <Avatar sx={{'&:hover':{background:"#FF9471"},background:"white" , padding:"2.5vh", marginRight:"3vh"}}>
              <AddCircle  sx={{height:"4vh",width:"4vh", borderWidth:"1vh",color:"black",padding:"2vh", background:"white", borderRadius:"50%"}} /></Avatar>
            <InsDis>Add Products
            <InsDisSpan>Add your product and brand information.</InsDisSpan>
            </InsDis>

          </Instruc>
          <VertiLine/>


          </InsCont>


          <InsCont>
          <Instruc>
            <Avatar sx={{'&:hover':{background:"#FF9471"},background:"white" , padding:"2.5vh", marginRight:"3vh"}}>
              <ReceiptLong  sx={{height:"4vh",width:"4vh", borderWidth:"1vh",color:"black",padding:"2vh", background:"white", borderRadius:"50%"}} /></Avatar>
            <InsDis>Receive Purchase Order
            <InsDisSpan>You will receive a purchase order as soon as there is one.</InsDisSpan>
            </InsDis>

          </Instruc>
          <VertiLine/>


          </InsCont>


          <InsCont>
          <Instruc>
            <Avatar sx={{'&:hover':{background:"#FF9471"},background:"white" , padding:"2.5vh", marginRight:"3vh"}}>
              <LocalShipping  sx={{height:"4vh",width:"4vh", borderWidth:"1vh",color:"black",padding:"2vh", background:"white", borderRadius:"50%"}} /></Avatar>
            <InsDis>Order Picked up
            <InsDisSpan>Once the purchase order is confirmed, it will be picked-up and dispatched.</InsDisSpan>
            </InsDis>

          </Instruc>
          <VertiLine/>


          </InsCont>


          <InsCont>
          <Instruc>
            <Avatar sx={{'&:hover':{background:"#FF9471"},background:"white" , padding:"2.5vh", marginRight:"3vh"}}>
              <Payment  sx={{height:"4vh",width:"4vh", borderWidth:"1vh",color:"black",padding:"2vh", background:"white", borderRadius:"50%"}} /></Avatar>
            <InsDis>Payment Received
            <InsDisSpan>Once the order is received, the due payment will be completed.</InsDisSpan>
            </InsDis>

          </Instruc>
          </InsCont>

          </Instot>


      


      <SellersCont>
        <Sellers/>
      </SellersCont>

      </Midcon>



      <FaqBox>
        <FaqTit>Frequently asked questions</FaqTit>
      

      <CustomizedAccordions/>

      </FaqBox>




       
    </Container>
  )
}

export default SellersAccount
