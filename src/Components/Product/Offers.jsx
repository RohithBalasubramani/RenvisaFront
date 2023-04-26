import { LabelImportant } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
  
 
 
const OfferStart = styled.div`
font-weight: 600;
font-size: 12px;
line-height: 18px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.05em;

color: #000000;
`

const Offer = styled.div`
font-weight: 400;

`

const TnC = styled.div`
font-weight: 600;
font-size: 12px;
line-height: 18px;
/* identical to box height */

display: flex;
align-items: center;
letter-spacing: 0.05em;

color: #1C8EE1;
`


const ViewMoreOffers = styled.div`
font-style: italic;
font-weight: 600;
font-size: 12px;
line-height: 18px;
/* identical to box height */

display: flex;
align-items: center;
letter-spacing: 0.05em;
text-decoration-line: underline;
color: #1C8EE1;
`



const Offers = () => {
  return (
    <div>
                                 <OfferStart>
                          <LabelImportant sx={{color:"#12C12A"}}/> Bank Offer&nbsp; <Offer> 5% Cashback on AXIS BANK Credit cards&nbsp;&nbsp;&nbsp;&nbsp;</Offer>
                          <TnC>T&C</TnC>
                         </OfferStart>

                         <OfferStart>
                          <LabelImportant sx={{color:"#12C12A"}}/> Bank Offer&nbsp; <Offer> ₹1000 off on SBI Credit Card Transactions&nbsp;&nbsp;&nbsp;&nbsp;</Offer>
                          <TnC>T&C</TnC>
                         </OfferStart>

                         <OfferStart>
                          <LabelImportant sx={{color:"#12C12A"}}/> Special Price &nbsp; <Offer> Get extra ₹3000 off (price inclusive of cashback/coupon)&nbsp;&nbsp;&nbsp;&nbsp;</Offer>
                          <TnC>T&C</TnC>
                         </OfferStart>

                         <OfferStart>
                          <LabelImportant sx={{color:"#12C12A"}}/>Freebie&nbsp; <Offer>  25% Off on Discovery+ Subscription&nbsp;&nbsp;&nbsp;&nbsp;</Offer>
                          <TnC>T&C</TnC>
                         </OfferStart>

                         <ViewMoreOffers>
                         View more Offers
                         </ViewMoreOffers>
      
    </div>
  )
}

export default Offers
