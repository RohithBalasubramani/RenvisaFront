import React from 'react'
import styled from 'styled-components'
  
 
 
const Container = styled.div`

background: #FFF8EB;
display: flex;
width: 100%;
height: 75vh;

`

const InfoCont = styled.div`
background-color: inherit;
width: 50%;
display: block;
`

const ImgCont = styled.div`
background-color: red;
width: 50%;
`

const HeadComp = styled.div`

font-family: Lexend;
font-size: 64px;
font-weight: 300;
line-height: 80px;
letter-spacing: 0.004em;
text-align: left;
color: #00337C;
display: inline;

`

const HeadBold = styled.div`

font-weight: 500;

`

const ContPara = styled.div`
font-family: Lexend;
font-size: 16px;
font-weight: 300;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: #4F4F4F;
border-top: 1px solid #4F4F4F;
`

const ButtonDiv = styled.div`

height: 5vh;
width: 25vh;
background: #00337C;
border-radius: 8px;
color: #ffffff;
font-family: Lexend;
font-size: 20px;
font-weight: 500;
line-height: 32px;
letter-spacing: 1.25px;
text-align: center;
text-transform: capitalize;
vertical-align: middle;
padding-top: 1vh;

`

const SellerComp = () => {
  return (
    <>

    <Container>


        <InfoCont>
            <HeadComp>Are you Seller, Join&nbsp;<HeadBold>Renvisa</HeadBold></HeadComp>
            <ContPara>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Itaque quidem odit error ea debitis vel reiciendis molestiae recusandae numquam 
                 veniam laborum animi tempora quam temporibus labore culpa minus sit doloremque nihil,
                  ut vitae cupiditate. Expedita, architecto fugiat amet nemo tempora fuga vel? Voluptate,
                   odit. Et laborum magni enim iste magnam! Quo sequi necessitatibus expedita consectetur 
                   beatae iusto dolorum excepturi dignissimos.</ContPara>

            <ButtonDiv>Join Renvisa</ButtonDiv>

        </InfoCont>

        <ImgCont/>


    </Container>

    

      
    </>
  )
}

export default SellerComp
