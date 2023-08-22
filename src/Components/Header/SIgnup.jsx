import React, { useState } from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
// import LoginHooks from './Loginhooks';
import { Checkbox, Divider, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { AddBusiness, HorizontalRule } from '@mui/icons-material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../Services/axiosins';

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
  font-family: Lexend;
  font-size: 20px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.02em;
  text-align: left;


`
const FirstName = styled.div`
  flex: 2;
  display: block;
  margin-right: 1vh;

`

const LastName = styled.div`
  flex: 3;
  display: block;
  margin-left: 1vh;

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
const Title = styled.div`
font-family: Lexend;
font-size: 32px;
font-weight: 500;
line-height: 43px;
letter-spacing: 0.02em;
text-align: left;

`

const TitleSpan = styled.div`


font-family: Lexend;
font-size: 20px;
font-weight: 400;
line-height: 27px;
letter-spacing: 0.02em;
text-align: left;
color: #828282;


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

  const navigate = useNavigate();
	
	const initialFormData = Object.freeze({
		email: '',
		password: '',
    first_name: '',
    last_name: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post(`users/register/`, {

        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				// navigate('/login');
				console.log(res);
				console.log(res.data);
			});
	};







  return (
    <Container>
         <Wrapper>
          {/* <Avatar sx={{marginBottom:"2vh",  height:"6rem", width:"6rem", display:"flex", marginLeft: "41%"}} /> */}
          <Title>Create an account</Title>
          {/* <OrDisp>(For Bulk Orders)</OrDisp>
          <Button component={Link} to="/businesslogin" sx={{color:"white",background:"#FF9471",marginBottom:"5vh",marginTop:"1vh","&:hover":{color:"white",background:"#f47f58"}}}><AddBusiness/> Create a Business Account</Button> */}
          <TitleSpan>Please enter details to sign up</TitleSpan>
          {/* <LoginHooks/> */}



{/* 
          <OrDisp>
          <Divider>or Signup with Email</Divider> 
          </OrDisp> */}

          </Wrapper>
          <PassCont>

            <FirstName>
            <p>First Name</p>
            <TextField fullWidth
                        id="first_name"
                        name="first_name"
                        onChange={handleChange}></TextField>
            </FirstName>

            <LastName>
            <p>Last Name</p>
            <TextField fullWidth
                      id="last_name"
                      name="last_name"
                      onChange={handleChange}></TextField>
            </LastName>      
          </PassCont>
          {/* <TextField fullWidth></TextField>          */}
          <PassCont>
          <p>Please Enter your Email</p>
          </PassCont>
          <TextField fullWidth
          						autoComplete="email"
                      id="email"
                      name="email"
                      onChange={handleChange}>/</TextField>

          <PassCont>
          <p>Password</p>
          </PassCont>
          <TextField fullWidth
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}></TextField>

          <PassCont>
          <p>Confirm Password</p>
          </PassCont>
          <TextField fullWidth
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"></TextField>
{/* 
          <PassCont>
            <Checkbox/><p>Remember me</p>
          </PassCont> */}
          {/* <Button onClick={handleClick({vertical: 'top', horizontal: 'right',})}
          sx={{color:"white",background:"#09193D",height:"8vh",fontSize:"3vh","&:hover":{color:"#white",background:"#11224a"}}} fullWidth>Sign Up</Button> */}

        <Button onClick={handleSubmit}
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
