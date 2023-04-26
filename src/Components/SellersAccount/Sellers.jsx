import { Avatar, Button, Checkbox, ListItemText, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import {styled as muistyled} from '@mui/material/styles';
  
 
 
const Container = styled.div`

`
// font-family: 'Poppins';
// font-style: italic;
// font-weight: 500;
// font-size: 14px;

const CustomTextFeild = muistyled(TextField)(({  }) => ({
  backgroundColor: 'white',
  borderRadius: "5px",
  borderColor:"white",

  '&.Mui-selected, &.Mui-selected:hover, &.Mui-selected:active': {
    backgroundColor: 'white',
  },

  'input': {
    '&::placeholder': {
      
      color: 'rgba(31, 31, 31, 0.51)',
      fontStyle:"italic",
      fontWeight:"500",
    }
  }



}));

const Disp = styled.div`
flex: 1;
padding: 5vh;
margin: 5vh;
background: #FF9471;
border-radius: 10px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
/* identical to box height, or 36px */
letter-spacing: 0.05em;
text-transform: capitalize;

color: #09193D;



`

const Butt = styled.button`
background: #FFFFFF;
width: 30%;
height: 6vh;
border-radius: 88px;
font-weight: 600;
font-size: 18px;
line-height: 180.5%;
/* identical to box height, or 32px */
border: 0px;
margin: 3vh;
margin-left: 30%;
text-align: center;
align-items: center;
vertical-align: middle;
letter-spacing: 0.05em;
text-transform: uppercase;

color: #1F1F1F;
`


const Wrapper = styled.div`
  display: block;
  align-items: center;

`

const PassCont = styled.div`
  display: flex;
  text-align: left;
  gap:10%;

`

const Title = styled.p`
color: #3A8891;
font-size: 3.5vh;
padding: 0vh;
font-weight: 500;
margin: 0.4vh;

`
const TitleSpan = styled.p`
color: #3A8891;
font-size: 3vh;
padding: 0vh;
font-weight: 400;
margin: 1vh;

`
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      
    },
  },
};


const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];



const Sellers = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [personName, setPersonName] = React.useState([]);

  const handleChangeBrand = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };






  return (
    <div>
      
       <Disp>

                <PassCont>
                <p>Please Your Full Name</p>
                </PassCont>
                <CustomTextFeild placeholder='Enter First Name' sx={{width:"60%"}}></CustomTextFeild> <CustomTextFeild placeholder='Enter Last Name' sx={{width:"38%"}}></CustomTextFeild>

                <PassCont>
                <p>Company Name</p>
                </PassCont>
                <CustomTextFeild placeholder='Please enter the company name here' fullWidth></CustomTextFeild>

                <PassCont>
                <p>Seller Type</p>
                </PassCont>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  fullWidth
                  sx={{ backgroundColor: 'white', borderRadius: "5px",

                  '		.MuiSelect-nativeInput': {
      
                    color: 'rgba(31, 31, 31, 0.51)',
                    fontStyle:"italic",
                    fontWeight:"500",
                    fonrSize:"10px"
                  }


                }}
                  
                
                
                >
                  <MenuItem value="" sx={{   'input': {
                      '&::placeholder': {
                        
                        color: 'rgba(115, 115, 115, 0.141)',
                        fontStyle:"italic",
                        fontWeight:"400",
                      }
                    }}}>




                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Distributors</MenuItem>
                  <MenuItem value={20}>Sellers</MenuItem>
                  <MenuItem value={30}>Dealers</MenuItem>
                  <MenuItem value={40}>Manufactures</MenuItem>

                </Select>

                
                <PassCont>
                <p>Email</p>
                </PassCont>
                <CustomTextFeild placeholder='Enter your Email ID' fullWidth></CustomTextFeild>

                
                <PassCont>
                <p>Mobile Number</p>
                </PassCont>
                <CustomTextFeild placeholder='Enter your Mobile Number' fullWidth></CustomTextFeild>

                <PassCont>
                <p>Brand</p>
                </PassCont>
                <Select sx={{ backgroundColor: 'white', borderRadius: "5px",}}

                  multiple
                  displayEmpty
                  value={personName}
                  onChange={handleChangeBrand}
                  input={<OutlinedInput />}

                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Choose Brand</em>;
                    }
        
                    return selected.join(', ');
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ 'aria-label': 'Without label' }}
                  fullWidth
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>


                <Butt>Submit</Butt>



        </Disp>
    </div>
  )
}

export default Sellers
