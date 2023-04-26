import React, { useState } from 'react'
import ProductCard from '../Homepage/ProductCard/ProductCard'
import { Products4 } from '../../data';
import styled from 'styled-components'
import { ChevronRight } from '@mui/icons-material';

const Container = styled.div`
background-color: #FDFDFD;
width: 100%;
border-top: 1px solid #E0E0E0;
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
const Head = styled.div`
  
font-family: Lexend;
font-size: 34px;
font-weight: 600;
line-height: 32px;
letter-spacing: 0.15000000596046448px;
text-align: left;
color: #00337C;
display: flex;

padding-bottom: 5vh;

`

const SimilarProdDiv = styled.div`


padding-top: 10vh;
padding-bottom: 10vh;
width  : 80%;
    margin-left: auto;
    margin-right: auto;
`

const ProdWrapper = styled.div`
  display: flex;
  gap: 3vh;



`

const SimilarProd = () => {

    const data = Products4;
    const [limitedData, setLimitedData] = useState(data.slice(0, 3));

  return (
    <Container>
        <SimilarProdDiv>
        <Head>
     Similar Products    <HeadSpan><div>See more</div> <ChevronRight sx={{marginTop:"5px"}}/></HeadSpan>


    </Head>
        <ProdWrapper>
        {limitedData.map((items) => (
            <ProductCard item={items}/>
            ))}
            </ProdWrapper>
     </SimilarProdDiv>
      
    </Container>
  )
}

export default SimilarProd
