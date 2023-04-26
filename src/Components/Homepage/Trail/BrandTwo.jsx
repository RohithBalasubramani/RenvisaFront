import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Products5 } from '../../../data'
import Product from '../../../Pages/ProductDescription'
  
 
const ContainerWhole = styled.div`
overflow-x: hidden;
background-color: #FFF8EB;
padding-right: 100vh;
padding-bottom: 8vh;


`

const BrandHead = styled.div`
font-family: Lexend;
font-size: 64px;
font-weight: 500;
line-height: 80px;
letter-spacing: 0em;
text-align: center;
color: #00337C;
width: 80vh;
margin-left: 70vh;

`



const Container = styled.div`
background-color: #FFF8EB;
height: 40vh;
width: 400vh;
display: block;

transform: translateX(${(props) => props.pos % window.innerWidth}px);
margin-right: 100vh;
`



const Wrapper = styled.div`
height: 10vh;
width: 20vh;
background-color: black;
margin-left: 10vh;

`

const WrapperContainer = styled.div`

display: flex;
margin-top: 10vh;

`
const WrapperContainerTwo = styled.div`
padding-left: 15vh;
display: flex;
margin-top: 10vh;

`



const BrandTwo = () => {

  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((position) => position + 1);
    }, 10);

    return () => clearInterval(interval);
  }, []);



  return (
    <ContainerWhole>
    <Container pos={position}>
      <WrapperContainer>
      {Products5.map(product => (
            <Wrapper/>
        ))}

      </WrapperContainer>

    
    <WrapperContainerTwo>
      
      {Products5.map(product => (
              <Wrapper/>
          ))}

    </WrapperContainerTwo>
    

      
    </Container>
    <BrandHead>Choose from 10+ Brands</BrandHead>

    </ContainerWhole>
  )
}

export default BrandTwo
