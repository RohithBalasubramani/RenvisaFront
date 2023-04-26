import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react'

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


export default StyledLink




