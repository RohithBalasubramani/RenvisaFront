import React from 'react'
import styled from 'styled-components'
import { ReactComponent as DamageIcon} from "../../Assets/PDP/DamagedProdIcon.svg"
import { ReactComponent as DefIcon} from  "../../Assets/PDP/DefectiveProdIcon.svg"
import { ReactComponent as ThirtyIcon} from "../../Assets/PDP/ThirtyDayReturnIcon.svg"
import { ReactComponent as WrongProd} from "../../Assets/PDP/WrongProdIcon.svg" 
 


const Container = styled.div`
display:flex ;
padding-top: 3vh;
padding-bottom: 3vh;
background: #ffffff;



`

const CardInfo = styled.div`

margin-left: auto;
margin-right: 0%;
z-index: 3;
opacity: 0;
flex: 0;
overflow: hidden;
border-left: 4px;
border-left-color: grey;
border-left-style: dashed;
padding: 1vh;

`


const Card = styled.div`

color: #4F4F4F;
transition: 0.5s;
display: block;
text-align: center;
align-content: center;
font-size: 3.5vh;
font-weight: 700;
opacity: 1;
padding-left:2vh;
padding-right:2vh;
flex: 1;
padding-bottom: 1vh;


`
const CardCont = styled.div`


background-color: #FAFDFF;
display: flex;
width: 22%;
height: 30vh;
margin: 2vh;
margin-bottom: 3vh;
transition: 0.5s;
overflow: hidden;
padding-bottom: 2vh;
padding-top: 2vh;
color: #4F4F4F;

border-radius: 8px;
padding: 32px 16px 32px 16px;


&:hover{ 
    background-color: #FFF8EB;
    cursor: pointer;


}


`


const ReturnPolicy = () => {
  return (
    <>
    <Container>
            <CardCont>
        <Card>
            <DamageIcon/><br/>Easy<br/>Replacement </Card>
                 </CardCont>
        
        <CardCont>
        <Card> 
            <DefIcon/><br/>Shipping</Card>
                 </CardCont>

        <CardCont>
        <Card>
            <ThirtyIcon/><br/>Support</Card>
             </CardCont>

        <CardCont>
        <Card>
            <WrongProd/><br/>Quality</Card>
                  </CardCont>


      
    </Container>
      
    </>
  )
}

export default ReturnPolicy
