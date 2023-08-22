import React, { useState } from "react";
import styled from "styled-components";

const ClickableComponentWrapper = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: justified;
  color: #4f4f4f;

  .other-component {
    font-family: Lexend;
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: justified;
    color: #4f4f4f;
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
`;

function ProdInfo({ item }) {
  const [isClicked, setIsClicked] = useState(false);
  const [seeMore, setSeeMore] = useState("See More");

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (seeMore === "See More") {
      setSeeMore("View Less");
    } else {
      setSeeMore("See More");
    }
  };

  return (
    <ClickableComponentWrapper className={isClicked ? "clicked" : ""}>
      <div className="other-component">{item.description}</div>
      <SeeMore onClick={handleClick}>{seeMore}</SeeMore>
    </ClickableComponentWrapper>
  );
}

export default ProdInfo;
