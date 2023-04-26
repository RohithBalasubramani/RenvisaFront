import * as React from 'react';
import { styled as sty} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { ReactComponent as StarReview } from "../../Assets/StarReview.svg";
import { ReactComponent as FilledReview } from "../../Assets/FilledReview.svg";
import styled from 'styled-components'
  
 
 
const Container = styled.div`
display:flex;
gap: 5px;
`

const StyledRating = sty(Rating)({
  "& .MuiRating-icon": {
    width: '3.6rem'
},

  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function CustomizedRating() {
  return (
    <>
    <Container>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={1}
        icon={<FilledReview fontSize="inherit" sx={{marginRight:"5px"}} />}
        emptyIcon={<StarReview fontSize="inherit" sx={{marginRight:"5px"}}/>}
        
      />
      </Container>
    </>
  );
}
