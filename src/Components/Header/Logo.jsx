import React from 'react'
import {ReactComponent as LogoIcon} from './RenvisaSVG.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {ReactComponent as RenLogo} from "../../Assets/RenLogo.svg"

 
 
const Container = styled(RenLogo)`
opacity: 1;
/* background-image: linear-gradient(#ff6200, #00d9ffdb); */
/* stroke: black;

stroke-width: 4px; */
fill: white;
height: 70px;
width: 70px;
font-weight: 100;

height: 45.3076286315918px;
width: 51px;

border-radius: 0px;



&:hover{
    fill: #FF9471;
;
}


`

const Logo = () => {
  return (
    <>
    <Link to='/'>
        <Container/>
        </Link>

        

       

        
        
       
        
      
    </>
  )
}

export default Logo

