import React from 'react'
import styled from 'styled-components'
  
 
 
const Container = styled.div`
background-color: #c50000;
width: 100%;
align-content: center;

`

const Button = styled.button`
background-color: #00ff26;
height: 3vh;
align-items: center;
text-align:center;
vertical-align: middle;
padding: 2vh;
padding-bottom:5vh;
`


const TestMenu = () => {
  return (
    <Container>
        <Button>
            Rohith

        </Button>
    
      
    </Container>
  )
}

export default TestMenu
