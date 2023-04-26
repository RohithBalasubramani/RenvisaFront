import { CachedTwoTone, LocalShipping, Margin, SupportAgent, WorkspacePremium } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as QualIcon } from "../../Assets/Home/WhyUs/Quality.svg"  
import { ReactComponent as ReplaceIcon } from "../../Assets/Home/WhyUs/Replacement.svg"  
import { ReactComponent as ShippingIcon } from "../../Assets/Home/WhyUs/Shipping.svg"  
import { ReactComponent as SupportIcon } from "../../Assets/Home/WhyUs/Support.svg"  

 
const Container = styled.div`
display:flex ;
padding-top: 3vh;
padding-bottom: 3vh;
background: #ffffff;
width: 95%;
margin: 2%;



`
const TitCon = styled.div`
width: 35%;
`

const Title = styled.div`
font-family: Lexend;
font-size: 64px;
font-weight: 500;
line-height: 80px;
letter-spacing: 0em;
text-align: left;
color: #00337C;
padding: 5vh;



`
const TitleSpan = styled.span`
text-align: Left;

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

const IconCon = styled.div`
height:55%;
width: auto;
`

const CardTit = styled.div`
font-family: Lexend;
font-size: 18px;
font-weight: 600;
line-height: 32px;
letter-spacing: 0px;
text-align: center;
margin-bottom: 1vh;
margin-top: auto;
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

/* &:hover{ 
    width: 20%;
    align-content:left;
    text-align: left;
    font-size: 1.5vh;
    font-weight: 500;


    
}

&:hover ${CardInfo}{
    opacity: 1;
} */
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
    width: 25%;
    background-color: #FFF8EB;
    color: #4F4F4F;

}

&:hover ${CardInfo}{
    opacity: 1;
    flex: 3;
    color: #4F4F4F;


} 

&:hover ${Card}{

    flex: 1;
    font-size: 2.5vh;
    font-weight: 500;
    color: #4F4F4F;
} 
`




const WhyUs = () => {
  return (
    <Container>

        <TitCon>
        <Title>Renvisa Offers</Title>

        </TitCon>

        <CardCont>
        <Card>
            <ReplaceIcon/><CardTit>Easy<br/>Replacement  </CardTit></Card>
            <CardInfo>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Cumque soluta iusto autem impedit mollitia quasi, sunt dolorem fuga laborum nostrum, 
                 accusamus incidunt odio ea architecto ullam unde illo exercitationem suscipit?</CardInfo>
                 </CardCont>
        
        <CardCont>
        <Card> 
            <ShippingIcon/><CardTit>Shipping</CardTit></Card>
            <CardInfo>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Cumque soluta iusto autem impedit mollitia quasi, sunt dolorem fuga laborum nostrum, 
                 accusamus incidunt odio ea architecto ullam unde illo exercitationem suscipit?</CardInfo>
        </CardCont>

        <CardCont>
        <Card>
            <SupportIcon/><CardTit>Support<br/></CardTit></Card>
            <CardInfo>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Cumque soluta iusto autem impedit mollitia quasi, sunt dolorem fuga laborum nostrum, 
                 accusamus incidunt odio ea architecto ullam unde illo exercitationem suscipit?</CardInfo>
        </CardCont>

        <CardCont>
        <Card>
            <QualIcon/><CardTit>Quality<br/></CardTit></Card>
            <CardInfo>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Cumque soluta iusto autem impedit mollitia quasi, sunt dolorem fuga laborum nostrum, 
                 accusamus incidunt odio ea architecto ullam unde illo exercitationem suscipit?</CardInfo>
        </CardCont>




      
    </Container>
  )
}

export default WhyUs
