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
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    companyName: "",
    sellerType: "",
    gstNumber: "",
    brand: [],
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBrandChange = (e) => {
    const { options } = e.target;
    const selectedBrands = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedBrands.push(options[i].value);
      }
    }
    setFormData({
      ...formData,
      brand: selectedBrands,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://renvisa.org/api/seller/register/",
        formData
      );
      setSnackbarMessage(
        "Registration successful. Check your email for verification."
      );
      setOpenSuccessSnackbar(true);
    } catch (error) {
      setSnackbarMessage("Error: Registration failed. Please try again.");
      setOpenErrorSnackbar(true);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccessSnackbar(false);
    setOpenErrorSnackbar(false);
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

  // const handleClickPost = async () => {
  //   try {
  //     const formData = {
  //       firstName: firstName, // Use your state variable for first name
  //       lastName: lastName, // Use your state variable for last name
  //       companyName: companyName, // Use your state variable for company name
  //       sellerType: age, // Use the selected seller type
  //       email: email, // Use your state variable for email
  //       // gstNumber: gstNumber, // Use your state variable for GST number
  //       mobileNumber: mobileNumber, // Use your state variable for mobile number
  //       brand: personName, // Use the selected brands
  //       password: password, // Use your state variable for password
  //     };

  //     // Make an Axios POST request with the form data
  //     await axios.post("https://renvisa.org/seller-registration", formData);

  //     setOpen(true); // Display the success Snackbar
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };

  if (data) {
    const uniqueBrands = [...new Set(data.map((item) => item.brand))];
    return (
      <div>
        <Disp>
          <Title>
            <Storefront sx={{ width: "4.5vh", height: "4.5vh" }} />
            <div>Seller Registration</div>
          </Title>
          <form onSubmit={handleSubmit}>
            <PassCont>
              <p>Please Enter Your Full Name</p>
            </PassCont>
            <div>
              <CustomTextFeild
                placeholder="Enter First Name"
                sx={{ width: "60%" }}
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
              <CustomTextFeild
                placeholder="Enter Last Name"
                sx={{ width: "38%", marginLeft: "2%" }}
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <PassCont>
              <p>Company Name</p>
            </PassCont>
            <CustomTextFeild
              placeholder="Please enter the company name here"
              value={formData.companyName}
              onChange={handleChange}
              fullWidth
            />
            <PassCont>
              <p>Seller Type</p>
            </PassCont>
            <Select
              value={formData.sellerType}
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
            <CustomTextFeild
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email ID"
              fullWidth
            />

            <PassCont>
              <p>GST Number</p>
            </PassCont>
            <CustomTextFeild
              placeholder="Please Enter Your GST Number"
              value={formData.gstNumber}
              onChange={handleChange}
              fullWidth
            />

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
              value={formData.brand}
              onChange={handleBrandChange}
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
          </form>
          <Butt type="submit">Submit</Butt>

          <Snackbar
            open={openSuccessSnackbar}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
          >
            <Alert onClose={handleSnackbarClose} severity="success">
              {snackbarMessage}
            </Alert>
          </Snackbar>

          {/* Error Snackbar */}
          <Snackbar
            open={openErrorSnackbar}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
          >
            <Alert onClose={handleSnackbarClose} severity="error">
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Disp>
      </div>
    );
  }
};

export default Sellers;
