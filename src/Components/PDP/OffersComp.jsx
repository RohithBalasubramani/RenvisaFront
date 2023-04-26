import React, { useState } from "react";
import styled from "styled-components";

const ClickableComponentWrapper = styled.div`

    font-family: Lexend;
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: justified;
    color: #4F4F4F;


  .other-component {
    font-family: Lexend;
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: justified;
    color: #4F4F4F;
    max-height: calc(27px * 3);
    overflow: hidden;
  }

  &.clicked {
    max-height: calc(27px * 25);

    .other-component {
        max-height: calc(27px * 25);
    }
  }
`;


const OfferTitle = styled.div`

font-family: Lexend;
font-size: 16px;
font-weight: 500;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
padding-bottom: 1vh;

`

const ViewMoreOffers = styled.div`

font-family: Lexend;
font-size: 14px;
font-weight: 500;
line-height: 28px;
letter-spacing: 0em;
text-align: left;


&:hover{
    
    cursor: pointer;
}
`

const OfferStart = styled.div`
color: #000000;
`

const Offer = styled.div`
font-family: Lexend;
font-size: 14px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
color: #4F4F4F;

`


function OffersComp() {
  const [isClicked, setIsClicked] = useState(false);
  const [seeMore, setSeeMore] = useState("See More");


  const handleClick = () => {
    setIsClicked(!isClicked);
    if(seeMore === "See More"){
        setSeeMore("View Less")
    }
    else{
        setSeeMore("See More")

    }
  };

  return (
    <ClickableComponentWrapper className={isClicked ? "clicked" : ""}>
      
      <div className="other-component">
   
                         <OfferTitle>
                         Available offers
                         </OfferTitle>

                         <OfferStart>
                          <Offer> 0% Installment payment for 6 or 10 months via Bank applied.  T&C&nbsp;&nbsp;&nbsp;&nbsp;</Offer>
                         </OfferStart>

                         <OfferStart>
                          <Offer>0% Installment payment for 6 or 10 months via Bank applied.  T&C&nbsp;&nbsp;&nbsp;&nbsp;</Offer>
                         </OfferStart>

                         <OfferStart>
                          <Offer> 0% Installment payment for 6 or 10 months via Bank applied.  T&C&nbsp;&nbsp;&nbsp;&nbsp;</Offer>
                         </OfferStart>

                         <OfferStart>
                          <Offer>0% Installment payment for 6 or 10 months via Bank applied.  T&C&nbsp;&nbsp;&nbsp;&nbsp;</Offer>
                         </OfferStart>

                         

      </div>
      <ViewMoreOffers onClick={handleClick}>{seeMore}</ViewMoreOffers>
    </ClickableComponentWrapper>
  );
}

export default OffersComp;
