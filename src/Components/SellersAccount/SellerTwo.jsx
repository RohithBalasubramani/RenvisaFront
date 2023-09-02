import {
  Alert,
  Avatar,
  Button,
  Checkbox,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { styled as muistyled } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import { Storefront } from "@mui/icons-material";
import axios from "axios";

const Container = styled.div``;
// font-family: 'Poppins';
// font-style: italic;
// font-weight: 500;
// font-size: 14px;

const Disp = styled.div`
  flex: 1;
  border-radius: 8px;
  background: #ffffff;
  /* identical to box height, or 36px */
  letter-spacing: 0.05em;
  text-transform: capitalize;
  padding: 6vh;
  display: flex;
  flex-direction: column;
  gap: 1.5vh;

  color: #09193d;
`;

const Butt = styled.button`
  background: #ffffff;
  width: 100%;
  padding: 2vh;
  border-radius: 8px;
  background: #f5a91d;
  color: #000;
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 200% */
  margin-top: 2vh;
`;

const CustomTextFeild = muistyled(TextField)(({}) => ({
  color: "var(--Gray-3, #828282)",
  fontFamily: "Lexend",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",

  backgroundColor: "white",
  borderRadius: "5px",
  borderColor: "white",
  // marginBottom: "2vh",

  "&.Mui-selected, &.Mui-selected:hover, &.Mui-selected:active": {
    backgroundColor: "white",
  },

  input: {
    "&::placeholder": {
      color: "rgba(31, 31, 31, 0.51)",
      fontStyle: "italic",
      fontWeight: "500",
    },
  },
}));

const Wrapper = styled.div`
  display: block;
  align-items: center;
`;

const PassCont = styled.div`
  color: var(--Gray-1, #333);
  font-family: Lexend;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 134%; /* 26.8px */
  letter-spacing: 0.4px;
  margin-top: 1.5vh;
`;

const Title = styled.div`
  color: #00337c;
  font-family: Urbanist;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  gap: 1.5vh;
  /* margin: auto;
    padding: auto; */
`;
const TitleSpan = styled.div`
  color: #3a8891;
  font-size: 3vh;
  padding: 0vh;
  font-weight: 400;
  margin: 1vh;
`;
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
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const Sellers = () => {
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [personName, setPersonName] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://renvisa.org/product/");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeBrand = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (data) {
    const uniqueBrands = [...new Set(data.map((item) => item.brand))];
    return (
      <div>
        <Disp>
          <Title>
            <Storefront sx={{ width: "4.5vh", height: "4.5vh" }} />
            <div>Seller Registration</div>
          </Title>
          <PassCont>
            <p>Please Enter Your Full Name</p>
          </PassCont>
          <div>
            <CustomTextFeild
              placeholder="Enter First Name"
              sx={{ width: "60%" }}
            />
            <CustomTextFeild
              placeholder="Enter Last Name"
              sx={{ width: "38%" }}
            />
          </div>
          <PassCont>
            <p>Company Name</p>
          </PassCont>
          <CustomTextFeild
            placeholder="Please enter the company name here"
            fullWidth
          />
          <PassCont>
            <p>Seller Type</p>
          </PassCont>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            fullWidth
          >
            <MenuItem
              value=""
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",

                "		.MuiSelect-nativeInput": {
                  color: "rgba(31, 31, 31, 0.51)",
                  fontStyle: "italic",
                  fontWeight: "500",
                  fonrSize: "10px",
                },
              }}
            >
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
          <CustomTextFeild placeholder="Enter your Email ID" fullWidth />
          <PassCont>
            <p>Mobile Number</p>
          </PassCont>
          <CustomTextFeild placeholder="Enter your Mobile Number" fullWidth />
          <PassCont>
            <p>Brand</p>
          </PassCont>
          <Select
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
            multiple
            displayEmpty
            value={personName}
            onChange={handleChangeBrand}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Choose Brand</em>;
              }
              return selected.join(", ");
            }}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
            fullWidth
          >
            {uniqueBrands.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
          <Butt onClick={handleClick}>Submit</Butt>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Sent Request
            </Alert>
          </Snackbar>
        </Disp>
      </div>
    );
  }
};

export default Sellers;
