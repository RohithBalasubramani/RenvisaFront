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
    max-height: calc(27px * 5);
    overflow: hidden;
  }

  &.clicked {
    max-height: calc(27px * 25);

    .other-component {
        max-height: calc(27px * 25);
    }
  }
`;



const SeeMore = styled.div`
font-family: Lexend;
font-size: 16px;
font-weight: 600;
line-height: 26px;
letter-spacing: 0em;
text-align: justified;
cursor: pointer;

`


function ProdInfo() {
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
      Browse through the extensive list of Solar Panels at Moglix.
                 Shop online for other ZunSolar Solar Panels available at Moglix in the lowest price range. 
                 The Carat 24 ZR 165W Polycrystalline Solar PV Module Panel is a top of the line solar panel
                  that is perfect for those who are looking to go green and save money on their energy bill.
                   This panel is made with 156.75x156.75mm solar cells that are encased in a silver anodized aluminum frame. 
                   The polycrystalline material ensures that this panel will be durable and long lasting,
                    while still being able to produce a large amount of energy. 
                    The ZunSolar Carat 24 ZR 165W Polycrystalline Solar PV Module Panel is a high-quality 
                    and durable solar panel that is ideal for a variety of applications. 
                    It features a power output of 165 watts and a 25-year performance warranty, 
                    making it a great choice for those who want to invest in a long-term solar solution. 
                    Additionally, the short circuit current (isc) of 9.34 amps and voltage at max power (vmp) 
                    of 18.20 volts make this solar panel a great option for those who want to maximize their solar output.
                     Finally, the fuse rating of 15 amps makes this panel a safe and reliable option for a variety of applications.
                      The ZunSolar Carat 24 ZR 165W Polycrystalline Solar PV Module Panel is a top-of-the-line product that offers 
                      a number of features that are sure to appeal to anyone in the market for a solar panel.
                       With a maximum system voltage of 1000 V DC, an open circuit voltage of 22.2 V,
                        and a high transmission low iron tempered glass, this solar panel is sure 
                        to provide plenty of power for your needs. Additionally, the ZunSolar Carat 24 ZR 165W 
                        Polycrystalline Solar PV Module Panel comes with a 25-year warranty, so you can be confident in its quality and durability.
      </div>
      <SeeMore onClick={handleClick}>{seeMore}</SeeMore>
    </ClickableComponentWrapper>
  );
}

export default ProdInfo;
