import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Cover from '../Assets/btobwall.jpg'
import Signintocont from '../Components/Bulkquery/Signintocont'
import Custes from '../Components/Bulkquery/Custes'
import HowtoBtoB from '../Components/Bulkquery/HowtoBtoB'
import CustomizedAccordions from '../Components/Bulkquery/Accordion'
  
 
 
const Container = styled.div`
width: 100%;
background-image: url(${Cover}) ;
background-size: contain;
height: 45vh;
`
const Wrapper = styled.div`
width: 100%;
background-color: aqua;
height: 45vh;
`

const Bulkquote = () => {
  return (
    <div>
      <Container/>
      <Signintocont/>
      <HowtoBtoB/>
      <Custes/>
      <CustomizedAccordions/>


      
    </div>
  )
}

export default Bulkquote
