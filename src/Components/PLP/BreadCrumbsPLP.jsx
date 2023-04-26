import { Home, NavigateNext } from '@mui/icons-material';
import { Breadcrumbs, Chip, emphasize, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import StyledLink from '../StyLink';
  
 
 
const Container = styled.div`
display: flex;
`


// const StyledBreadcrumb = styled()(({  }) => {

//     return {

//         color: "rgba(31, 31, 31, 0.75)",
//       fontWeight: "400",
//       '&:hover': {
//         TextDecoder:"underline",
//         color: "rgba(31, 31, 31, 1)",
//       },
//       '&:active': {
//         color: "rgba(31, 31, 31, 1)",
//         fontWeight: "500",
//       },
//     };
//   });

const Crumbs = styled.div`


    font-family: Lexend;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #4F4F4F;

    &:hover{

        
        text-decoration: underline;
    }
    &:active{
        color: #292828;
        font-weight:500;
        
    }

`

const CrumbsTwo = styled.div`


    font-family: Lexend;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #000000;
    cursor: pointer;


`
const BreadcrumbsPlp = ({PLPText}) => {


    const breadcrumbs = [
        <Crumbs key="1"
        color="inherit">
          <StyledLink to ={'/'}>
          Home
          </StyledLink>
        </Crumbs>,

        <CrumbsTwo key="3" color="text.primary">
            {PLPText}
        </CrumbsTwo>
      ];

  return (
    <>
          {/* <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Home"
          icon={<Home fontSize="small" />}
        />
        <StyledBreadcrumb component="a" href="#" label="Catalog" />
        <StyledBreadcrumb
          label="Accessories"
          
        />
      </Breadcrumbs> */}
    {/* <Breadcrumbs>
          <StyledBreadcrumb
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"

      >
        {breadcrumbs}
      </StyledBreadcrumb>
      </Breadcrumbs> */}

        <Container>
      <Breadcrumbs
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      </Container>
      

    </>
  )
}

export default BreadcrumbsPlp
