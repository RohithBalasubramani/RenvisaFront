import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as RenLogo } from "../../Assets/RenvisaLogoWhiteYellow.svg";

const Container = styled(RenLogo)`
  opacity: 1;
  fill: white;
  font-weight: 100;
  height: 45px;
  width: 45px;
  border-radius: 0px;

  &:hover {
    fill: #ff9471;
  }
`;

const LogoWhite = () => {
  return (
    <>
      <Link to="/">
        <Container />
      </Link>
    </>
  );
};

export default LogoWhite;
