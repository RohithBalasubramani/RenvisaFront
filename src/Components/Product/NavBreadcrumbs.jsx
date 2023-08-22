import { Breadcrumbs } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledLink from "../StyLink";

const Container = styled.div`
  display: flex;
`;

const Crumbs = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #4f4f4f;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:active {
    color: #292828;
    font-weight: 500;
  }
`;

const CrumbsTwo = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #303030;
`;

const NavBreadcrumbs = ({ item }) => {
  const breadcrumbs = [
    <Crumbs key="1" color="inherit">
      <StyledLink to={"/"}>Home</StyledLink>
    </Crumbs>,
    <Crumbs key="2" color="inherit" to="/">
      Solar
    </Crumbs>,
    <Crumbs key="3" color="text.primary">
      Solar Panel
    </Crumbs>,
    <CrumbsTwo key="3" color="text.primary">
      {item.name}
    </CrumbsTwo>,
  ];

  return (
    <>
      <Container>
        <Breadcrumbs aria-label="breadcrumb">{breadcrumbs}</Breadcrumbs>
      </Container>
    </>
  );
};

export default NavBreadcrumbs;
