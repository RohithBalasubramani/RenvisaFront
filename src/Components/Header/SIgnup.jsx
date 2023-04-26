import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
// import LoginHooks from './Loginhooks';
import { Checkbox, Divider, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { AddBusiness, HorizontalRule } from '@mui/icons-material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Link } from 'react-router-dom';

const Container = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
text-transform: none;
`

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
 

const Wrapper = styled.div`
  display: block;
  align-items: center;

`

const PassCont = styled.div`
  display: flex;
  text-align: left;

`
const PassContfor = styled.div`
    margin-right: 4%;
    margin-left: auto;
    font-weight: 300;

`
const OrDisp = styled.div`

margin-top: 1vh;
font-weight: 300;
`
const Title = styled.p`
color: #09193D;
font-size: 3.5vh;
padding: 0vh;
font-weight: 600;
margin: 0.4vh;
text-transform: capitalize;
margin-bottom:2vh;

`
const TitleSpan = styled.p`
color: #3A8891;
font-size: 3vh;
padding: 0vh;
font-weight: 400;
margin: 1vh;


`

const Signup = () => {

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };






  return (
    <Container>
         <Wrapper>
          <Avatar sx={{marginBottom:"2vh",  height:"6rem", width:"6rem", display:"flex", marginLeft: "41%"}} />
          <Title>Create an account</Title>
          <OrDisp>(For Bulk Orders)</OrDisp>
          <Button component={Link} to="/businesslogin" sx={{color:"white",background:"#FF9471",marginBottom:"5vh",marginTop:"1vh","&:hover":{color:"white",background:"#f47f58"}}}><AddBusiness/> Create a Business Account</Button>
          <TitleSpan></TitleSpan>
          {/* <LoginHooks/> */}




          <OrDisp>
          <Divider>or Signup with Email</Divider> 
          </OrDisp>

          </Wrapper>
          <PassCont>
          <p>Please Enter your Email</p>
          </PassCont>
          <TextField fullWidth></TextField>

          <PassCont>
          <Checkbox/><p>Remember me</p>
          </PassCont>
          <Button onClick={handleClick({vertical: 'top', horizontal: 'right',})}
          sx={{color:"white",background:"#09193D",height:"8vh",fontSize:"3vh","&:hover":{color:"#white",background:"#11224a"}}} fullWidth>Sign Up</Button>


      <Snackbar autoHideDuration={6000}
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              onClose={handleClose}
              key={vertical + horizontal}   
      >

        <Alert onClose={handleClose} sx={{ width: '100%', background:"green" }}>
          Verification Mail has been sent to this Account
        </Alert>
      </Snackbar>




          

      
    </Container>
  )
}

export default Signup
