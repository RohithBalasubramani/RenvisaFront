import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #c50000;
`;

const BulkContainer = styled.div`
  display: flex;
  background-color: #fafdff;
  padding: 7vh;
  vertical-align: middle;
  margin-top: 3vh;
`;

const BulkImg = styled.img`
  background-color: #ffffff;
  width: 10%;
  padding: 1vh;
  margin-right: 3vh;
`;

const BulkLineOne = styled.div`
  font-family: Lexend;
  font-size: 24px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
  display: block;
  color: #00337c;
  margin-top: auto;
  margin-bottom: auto;
`;

const BulkSecondLine = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #828282;
  margin-top: 1vh;
`;

const BulkButton = styled.button`
  border-radius: 8px;
  padding: 2vh;
  padding-left: 4vh;
  padding-right: 4vh;
  font-family: Lexend;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.25px;
  text-align: left;
  color: #ffffff;
  background: #00337c;
  margin-left: auto;
  margin-right: 2vh;
  height: min-content;
  margin-top: auto;
  margin-bottom: auto;
`;

const BulkComp = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleQuotationRequest = () => {
    const token = localStorage.getItem("access_token");

    const data = {
      product: product._id,
      user: 9,
    };

    const apiUrl = "https://renvisa.org/quotation-requests/";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post(apiUrl, data, config)
      .then((response) => {
        console.log("Success:", response.data);
        setResponseMessage(response.data);
        setSeverity("success");
        setOpen(true);
      })
      .catch((error) => {
        console.log("Error:", error.response.data);
        setResponseMessage(error.response.data);
        setSeverity("error");
        setOpen(true);

        // Handle error, e.g., show an error message to the user
      });
  };

  return (
    <>
      <BulkImg src={product.image}></BulkImg>
      <BulkLineOne>
        Looking to purchase in <b>Bulk?</b>
        <BulkSecondLine>
          Once you submit request, our agent will contact to you.
        </BulkSecondLine>
      </BulkLineOne>
      <BulkButton onClick={handleQuotationRequest}>Submit Request</BulkButton>

      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {responseMessage}
        </Alert>
      </Snackbar> */}
    </>
  );
};

export default BulkComp;
