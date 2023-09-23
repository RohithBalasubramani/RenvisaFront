import { Phone, Room } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import styled from "styled-components";
import Logo from "./Header/Logo";
import StyledLink from "./StyLink";
import { useState } from "react";
import axios from "axios";
import { Alert, Snackbar } from "@mui/material";

const Container = styled.div`
  display: block;
  background: #00337c;
  color: #ffffff;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;

  padding: 4vh;
`;

const Wrapper = styled.div`
  display: flex;
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;
  /* or 20px */
  letter-spacing: 0.05em;

  color: #ffffff;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 5px;
`;

const LogoDiv = styled.div`
  display: flex;
`;

const Desc = styled.p`
  color: #fff;
  font-family: Lexend;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22.5px; /* 160.714% */
`;

const SocialContainer = styled.div`
  display: flex;
`;

const NewsletterContainer = styled.div`
  display: block;
  margin-top: 5vh;
  color: #fff;
  font-family: Lexend;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 175% */
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 0.45;
  padding: 20px;
  padding-top: 5px;
`;

const Title = styled.div`
  color: #fff;
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  margin-bottom: 3vh;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: block;
  padding-left: 0.5vh;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  color: #fff;
  font-family: Lexend;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  padding-top: 5px;
`;

const RightTwo = styled.div`
  flex: 0.7;
  padding: 20px;
  padding-top: 5px;
`;

const ContactItem = styled.div`
  margin-bottom: 1vh;
  display: flex;
  align-items: center;
  color: #fff;
  font-family: Lexend;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Payment = styled.img`
  width: 50%;
`;

const Button = styled.button`
  color: #333;
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 8px;
  background: #ffaf19;
  padding: 1vh;
`;

const InputCon = styled.div`
  display: Flex;
`;

const TitleSty = styled.div`
  color: #fff;
  font-family: Urbanist;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.48px;
`;

const InputDiv = styled.input`
  border: 2px solid white;
  width: 74%;
  margin-right: 5%;
  border-radius: 8px;
  background: #fff;
  padding: 1vh;
  color: #4f4f4f;
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &.Mui-selected,
  &.Mui-selected:hover,
  &.Mui-selected:active {
    color: white;
  }

  input {
    &::placeholder {
      color: #4f4f4f;
      font-family: Lexend;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

const Footer = () => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://renvisa.org/api/subscribe/", {
        email,
      });

      if (response.status === 201) {
        setMessage("Subscription successful");
        setSeverity("success");
        setEmail(""); // Clear the email input after successful subscription
      } else {
        setMessage("Subscription failed");
        setSeverity("error");
      }

      setOpen(true);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong");
      setSeverity("error");
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Container>
      <LogoDiv>
        <Logo />
        &nbsp;
        <TitleSty>Renvisa</TitleSty>
      </LogoDiv>

      <Wrapper>
        <Left>
          <Desc>
            Transforming B2B trade by empowering businesses to seamlessly
            connect, transact, and prosper.
          </Desc>

          <NewsletterContainer>
            <Title>Newsletter</Title>
            <InputCon>
              <InputDiv
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Please Enter your Email"
              />
              <Button type="submit" onClick={handleSubscribe}>
                Subscribe
              </Button>
            </InputCon>
            <br />
            Subscribe to the Renvisa newsletter to receive exclusive content,
            offers and discounts!
          </NewsletterContainer>
        </Left>

        <Center>
          <Title>Shop With us</Title>
          <List>
            <ListItem>Categories</ListItem>
            <ListItem>Brands</ListItem>
            <ListItem>Sectors</ListItem>
            <ListItem>Application</ListItem>
          </List>
        </Center>

        <RightTwo>
          <Title>We Provide Solutions</Title>
          <List>
            <ListItem>About Us</ListItem>
            {/* <ListItem>Contact Us</ListItem> */}
            <StyledLink to="/orders">
              <ListItem>Track Order</ListItem>
            </StyledLink>
            <StyledLink to="/cookiepolicy">
              <ListItem>Cookie Policy</ListItem>
            </StyledLink>
            <StyledLink to="/termsofservice">
              <ListItem>Terms of Service</ListItem>
            </StyledLink>
            <StyledLink to="/disclaimer">
              <ListItem>Disclaimer</ListItem>
            </StyledLink>
            <StyledLink to="/privacypolicy">
              <ListItem>Privacy Policy</ListItem>
            </StyledLink>
          </List>
        </RightTwo>

        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} /> Renvisa, Hyderabad,
            Telangana, 500060
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +91 9762723690
          </ContactItem>
          <ContactItem>
            <MailIcon style={{ marginRight: "10px" }} /> admin@renvisa.org
          </ContactItem>
          <br></br>
          <Title>Secure Payment Gateways</Title>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Wrapper>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Footer;
