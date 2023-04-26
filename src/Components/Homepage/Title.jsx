import React from 'react'
import styled from 'styled-components'
  
 
 
const Container = styled.div`
align-items: center;
text-align: center;
`
const HeadingOne = styled.h1`
  text-align: center;
  color:#222; font-size:30px; font-weight:400;
  text-transform: uppercase;
  word-spacing: 1px; letter-spacing:2px; color:#c50000;
`
const HeadOneSpan = styled.span`
  line-height:2em; padding-bottom:15px;
  text-transform: none;
  font-size:.7em;
  font-weight: normal;
  font-style: italic; font-family: "Playfair Display","Bookman",serif;
  color:#999; letter-spacing:-0.005em; word-spacing:1px;
  letter-spacing:none;
  &:after {

    position: absolute;
  left: 0;
  bottom: 0;
  width: 45px;
  height: 4px;
  content: "";
  right: 45px; 
  margin:auto;
  background-color: #ccc;

    }
    &:before {
        position: absolute;

  bottom: 0;

  height: 4px;
  content: "";
  right: 45px; 
  margin:auto;

  background-color:#d78b8b;
  left:45px; 
  width:90px;
      
    }
`

const Title = () => {
  return (
    <Container>
      
    </Container>
  )
}

export default Title
