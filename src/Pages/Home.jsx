import React from 'react'
import Review from '../Components/Homepage/ReviewCard/Review'

import TrendingCard from '../Components/Homepage/TrendingCard'
import WhyUs from '../Components/Homepage/WhyUs'
import styled from 'styled-components'
import Slider from '../Components/Homepage/Slider/Slider'
import Header from '../Components/Header/Header'
import { sliderItems } from '../data'
import ScrollButton from '../Components/Homepage/ScrollButton'
import SliderBack from "../Assets/Slider/Slider.png"
import SellerTwo from '../Components/Homepage/Solu/SellerComp2'
import Solu from '../Components/Homepage/Solu/Solu'
import MovingDiv from '../Components/Homepage/Trail/BrandTwo'
import { Products4 } from '../data'
import ProdCardTwo from '../Components/Homepage/ProductCard/ProdCardTwo'
import { ChevronRight } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
 
const Container = styled.div`
  padding: 2vh;
  background: #ffffff;

` 

const Head = styled.div`
  
  font-family: Lexend;
  font-size: 34px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0.15000000596046448px;
  text-align: left;
  color: #00337C;
  display: flex;


`


const HeadTwo = styled.div`
  
  font-family: Lexend;
  font-size: 48px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: left;
  color: #00337C;
  margin-top: 5vh;
  margin-left: 35%;




`


const HeadSpan = styled.div`

  font-family: Lexend;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.15000000596046448px;
  text-align: left;
  margin-right: 0%;
  margin-left: auto;
  padding-right:3vh;
  display: inline-flex;
  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }


    `

const Slide = styled.div`

    
    background-image: url(${SliderBack});
    background-size: contain;
    background-size:100vw 100vh;
    


`;

const HeadCon = styled.div`
background-color: inherit;
position: fixed;
width: 100%;
z-index: 100;
`

const ProdWrapper = styled.div`
  display: flex;
  gap: 3vh;
  padding: 4vh;
  

`

const BrandCont = styled.div`
overflow-x: hidden;
`





const Home = () => {

  const navigate = useNavigate();

  const handleViewProd = () => {
    navigate(`/product?search=`);
  }

  





  return (
    <>
    
    <HeadCon>
      <Header/>
    </HeadCon>
    
    <Slide>
    
    <Slider Items = {sliderItems}/>
    </Slide>
    <ScrollButton/>
            


    <Container>

    

    
    

    {/* <Trail/> */}
    
    <Head>
     Categories    <HeadSpan><div>See more</div> <ChevronRight sx={{marginTop:"5px"}}/></HeadSpan>

    </Head>
    <TrendingCard/>

    <Solu Items = {sliderItems} />

    <WhyUs/>

    <Head>
     Best Seller    <HeadSpan onClick={handleViewProd}><div>See more</div> <ChevronRight sx={{marginTop:"5px"}}/></HeadSpan>

    </Head>

    <ProdWrapper>
      
    {Products4.map((items) => (
        <ProdCardTwo item={items}/>
    ))}

    </ProdWrapper>


    {/* <InfiniteMove/> */}
    <BrandCont>
      <MovingDiv/>
    </BrandCont>


    <HeadTwo>
    Customer Testimonials

    </HeadTwo>
    <Review/>
    
    <SellerTwo Items = {sliderItems} />
    {/* <HalfWidthCarousel items={sliderItems} /> */}
    
    
    
    



    
      
    </Container>
    </>
  )
}

export default Home
