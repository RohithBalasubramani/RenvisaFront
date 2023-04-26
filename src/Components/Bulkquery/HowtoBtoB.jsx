import { CachedTwoTone, LocalShipping, SupportAgent } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
  
 
 
const Container = styled.div`
display:flex ;

`

const Title = styled.h2`
text-align: center;
display: flex;
width: 45%;


`

const Card = styled.div`
width: 15%;
height: 20vh;
border: 3px solid;
border-color: #626262;
border-radius: 20px;
margin: 2vh;
margin-bottom: 3vh;
color: #ff0000;
transition: width 0.5s;
display: block;


&:hover{
    
    width: 20%;
}
`




const HowtoBtoB = () => {
  return (
    <Container>

        <Card>
            <CachedTwoTone/><br/>Easy Replacement 
        </Card>

        <Card> 
            <LocalShipping/><br/>Shipping
        </Card>

        <Card>
            <SupportAgent/><br/>Support
        </Card>

        <Card>
            <SupportAgent/><br/>Support
        </Card>
        <Title>Why Choose us?</Title>


      
    </Container>
  )
}

export default HowtoBtoB
