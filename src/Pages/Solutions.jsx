import React from 'react'
import styled from 'styled-components'
  
 
 
const Container = styled.div`
background-color: #FFF9EB;
height: 120vh;
width: 100%;
align-items: center;
text-align: center;
display: flex;

`

const Wrapper = styled.div`

height: 50%;
width: 50%;
background-color: #ffffff;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
align-items: center;
text-align: center;
margin-left: 25%;


`

const WrapperText = styled.div`
font-family: 'Poppins';
font-style: normal;
font-size: 5vh;
font-weight: 700;
text-transform: uppercase;
align-items: center;
text-align: center;
margin-top: 22.5%;

`


const Solutions = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperText>
          Solutions Page 
        </WrapperText>
      </Wrapper>
      
    </Container>
  )
}

export default Solutions
