import {
  Facebook,
  FacebookOutlined,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Search,
  Twitter,
} from "@mui/icons-material";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button, IconButton, Input, InputBase, Paper, TextField } from "@mui/material";
import styled from "styled-components";
import Logo from "./Header/Logo";


const Container = styled.div`
  display: block;
  background: #011F46;

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

  color: #FFFFFF;

 
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top:5px;
`;

const LogoDiv = styled.div`
font-weight: 700;
font-size: 28px;
line-height: 106.9%;
/* identical to box height, or 30px */
letter-spacing: 0.1em;
text-transform: uppercase;
display: flex;

`;

const Span = styled.div`
font-style: italic;
font-weight: 300;
font-size: 15px;
line-height: 140%;
text-transform: none;
margin-top: 0vh;
margin-bottom: 3vh;


`

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const NewsletterContainer = styled.div`
  display: block;
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
  flex: 1;
  padding: 20px;
  padding-top:5px;
  
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  margin-bottom:4vh ;
  text-transform: uppercase;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  padding-top:5px;

`;

const ContactItem = styled.div`
  margin-bottom: 1vh;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: flex-end;
`;

const TitBlock = styled.div`
display: block;
`


const Footer = () => {
  return (
    <Container>
      <LogoDiv><Logo/>&nbsp;
      
      <TitBlock>
      RENVISA TECH
      <Span>Green Energy built to perfection </Span>
      </TitBlock>


      </LogoDiv>
      
      <Wrapper>
      <Left>
        
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>

        <NewsletterContainer>
        <Title>Newsletter</Title>
        Subscribe to the Renvisa newsletter to receive exclusive content, offers and discounts!
        <br/>
        <br/>

        <Input placeholder="Enter Email Id" sx={{border:"2px solid white", width:"74%", marginRight:"5%", borderRadius:"10px", '&.Mui-selected, &.Mui-selected:hover, &.Mui-selected:active': {
    color: 'white',
  } 
        ,'input': {
    '&::placeholder': {
      
      color: 'rgba(255, 255, 255, 0.5)',
      fontStyle:"italic",
      fontWeight:"500",
      fontSize:"14px"
    }
  }}} />
        <Button sx={{background:"white", color:"#09193D", width:"20%","&:hover":{background:"white", color:"#09193D"},}} >SUBSCRIBE</Button>



        {/* <Paper
          component="form"
          sx={{ display: 'flex', alignItems: 'center', width: "95%" , marginTop:"1vh", marginBottom:"1vh"}}
        >

          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter your Email Address"
            inputProps={{ 'aria-label': 'search google maps' }}
          /> */}

{/* 
          <Button type="button" sx={{ p: '10px',
                 bgcolor: '#3A8891',
                color:"#FFEFD6",
                '&:hover': {
                  bgcolor: '#0E5E6F',
                }}} aria-label="search">
            Signme Up
          </Button>

        </Paper> */}



        <SocialContainer>

        

          <SocialIcon color="000000">
            <FacebookOutlined/>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
        </NewsletterContainer>
      </Left>
      <Center>
        <Title>Shop With us</Title>
        <List>
           <ListItem>Categories</ListItem>
          <ListItem>Brands</ListItem>
          <ListItem>Sectors</ListItem>

        </List>
        <br></br>
        <Title>We Provide Solutions</Title>
        <List>
          <ListItem>About Us</ListItem>
          <ListItem>Contact Us</ListItem>
          <ListItem>Track Order</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> RENVisa, Hyderabad, Telangana, 500060
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +91 9848XXXXXX
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@rnsa.dev
        </ContactItem>
        <br></br>
        <Title>Secure Payment Gateways</Title>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
