import { ArrowForwardIos } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import HeaderCart from '../../Header/HeaderCart'
import Slider from './Slider'


const Container = styled.div`
position: relative;
display: flex;
margin-bottom: 10vh;
`

const First = styled.div`
flex: 1;
background-color: #FFEFD6;
`
const Title = styled.p`
color: #3A8891;
font-size: 3vh;
padding: 0.5vh;
font-weight: 500;

`

const Mid = styled.div`
flex: 4;
position: relative;
  overflow: hidden;
`
const FirstCon = styled.div`


`
const Dropbtn =styled.div`

width: 97%;
color: #3A8891;
background-color:#FFEFD6;
border: #FFEFD6;
border-bottom: #0E5E6F solid 2px;
height:5.5vh;
text-align: left;
display: inline-flex;
font-size: 2.2vh;

&:hover{

  background-color: #0E5E6F;
  color: #FFEFD6;


}
  

`

const Dropdowncontent =styled.div`

display: none;
  position: absolute;
  left: 100%;
  top: -10vh;
  background-color: #f1f1f1;
  min-width: 65vh;
  min-height: 70vh;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 15;
  &:hover{
    background-color: #ddd;
  }
`

const Dropdown =styled.div`
  position: relative;
  display: inline-block;
  margin-left:0;
  direction: ltr;
  width:100%;
  &:hover ${Dropdowncontent} {
    display: block;
  }

`



const Dropdownontenta =styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  position: relative;
  display: block;
  &:hover{
    background-color: #ddd;
  }

`


const MoreCat = styled.button`
width: 97%;
color: #3A8891;
background-color:#FFEFD6;
border: #FFEFD6;
border-bottom: #0E5E6F solid 2px;
height:5.5vh;
text-align: left;
display: inline-flex;
font-size: 2.2vh;

&:hover{

  background-color: #0E5E6F;
  color: #FFEFD6;


}





`




const SliderWhole = () => {
  return (
    <Container>
        <First> <Title>Browse Major Categories</Title>
        <FirstCon>
          
        <Dropdown>
        <Dropbtn>
        Solar<ArrowForwardIos sx={{ display:"inline", marginRight:"0", marginLeft:"auto"}}/>

        </Dropbtn>
        <Dropdowncontent>
          <Dropdownontenta>

          
          </Dropdownontenta>
        </Dropdowncontent>


      </Dropdown>





        <MoreCat>Solar<ArrowForwardIos sx={{ display:"inline", marginRight:"0", marginLeft:"auto"}}/></MoreCat>
        <MoreCat>Wires<ArrowForwardIos sx={{ display:"inline", marginRight:"0", marginLeft:"auto"}}/></MoreCat>
        <MoreCat>Panels<ArrowForwardIos sx={{ display:"inline", marginRight:"0", marginLeft:"auto"}}/></MoreCat>
        <MoreCat>Category 4<ArrowForwardIos sx={{ display:"inline", marginRight:"0", marginLeft:"auto"}}/></MoreCat>
        <MoreCat>Category 5<ArrowForwardIos sx={{ display:"inline", marginRight:"0", marginLeft:"auto"}}/></MoreCat>
        <MoreCat>Category 6<ArrowForwardIos sx={{ display:"inline", marginRight:"0", marginLeft:"auto"}}/></MoreCat>
        <MoreCat>Category 7<ArrowForwardIos sx={{ display:"inline", marginRight:"0", marginLeft:"auto"}}/></MoreCat>
        <MoreCat>Category 8<ArrowForwardIos sx={{ display:"inline", marginRight:"0", marginLeft:"auto"}}/></MoreCat>
        <Dropdown>
        <Dropbtn>
        Solar<ArrowForwardIos sx={{ display:"inline", marginRight:"0", marginLeft:"auto"}}/>

        </Dropbtn>
        <Dropdowncontent>
          <Dropdownontenta>

          
          </Dropdownontenta>
        </Dropdowncontent>


      </Dropdown>

        </FirstCon>
        
        
        </First>
        <Mid><Slider/></Mid>

      
    </Container>
  )
}

export default SliderWhole
