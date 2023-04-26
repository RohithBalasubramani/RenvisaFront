import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
// import LoginHooks from './Loginhooks';
import { Checkbox, Divider, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Logo from './Logo';

 
const Container = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
text-transform: none;

`

const Wrapper = styled.div`
  display: block;
  align-items: center;

`

const PassCont = styled.div`
font-family: Lexend;
font-size: 20px;
font-weight: 400;
line-height: 27px;
letter-spacing: 0.02em;
text-align: left;


`
const PassContfor = styled.div`
    font-family: Lexend;
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: left;

    cursor: pointer;
    &:hover{
      font-weight: 500;
      text-decoration: underline;
      /* text-decoration: underline; */
    }

`
const OrDisp = styled.div`


font-family: Lexend;
font-size: 20px;
font-weight: 400;
line-height: 27px;
letter-spacing: 0.02em;
text-align: left;
color: #828282;

`
const Title = styled.div`
font-family: Lexend;
font-size: 24px;
font-weight: 600;
line-height: 29px;
letter-spacing: 0.02em;
color: #000000;
display: inline-flex;


`
const TitleSpan = styled.div`
font-family: Lexend;
font-size: 32px;
font-weight: 500;
line-height: 43px;
letter-spacing: 0.02em;
text-align: left;





`



const Login = () => {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };



  return (
    <>
    <Container>
         <Wrapper>
          <Title><Logo/> RENVISA</Title>
          <TitleSpan>Login</TitleSpan>
          {/* <LoginHooks/> */}

          <OrDisp>
          Welcome back, please Login to continue
          </OrDisp>

          </Wrapper>
          <PassCont>
          Username
          </PassCont>
          <TextField fullWidth></TextField>
          <PassCont>
          Password
          <PassContfor>
          <p>Forgot Password?</p>
          </PassContfor>
          </PassCont>
          <TextField fullWidth></TextField>
          <PassCont>
          <Checkbox/><p>Remember me</p>
          </PassCont>
          <Button sx={{color:"#F2DEBA", background:"#09193D", height:"7vh", fontSize:"3.5vh", fontWeight:"300", 
           "&:hover": { background: "#11234d",
  },}} fullWidth>Login</Button>


          </Container>

          





          

      
    </>
  )
}

export default Login
