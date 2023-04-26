
import { SendRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-content: flex-start;
  flex-direction: column;

`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  display: flex;
  left: 0px;
  padding-left: 4vh;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
  display: flex;
  left: 0px;
  padding-left: 4vh;

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
  
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`

  border: none;
  background-color: teal;
  color: white;
  width: 24vh;
  height: 8vh;
  margin-left:4vh;
  font-size: 3vh;
  cursor: pointer;
  &:hover {
    outline-width: 2px;
    outline: blue;
    background-color: #f38933;
    color: white;
  }
  
`;

const Signintocont = () => {
  return (
    <Container>
      <Title>Signup to Continue</Title>
      <Desc>Inorder to request for bulk order RFQs please register/log into your Buisness Account.</Desc>

      
        <Button>
        <Link to="/signupbtob" > 
          Login/Signup
          </Link >
        </Button>
        
        
    </Container>
  );
};

export default Signintocont;