import * as React from "react";
import { styled as sty } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { ReactComponent as StarReview } from "../../../Assets/PDP/VectorStarEmp.svg";
import { ReactComponent as FilledReview } from "../../../Assets/PDP/VectorStarFill.svg";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 0.5vh;
  margin-bottom: 0.5vh;
`;

const StyledRating = sty(Rating)({
  "& .MuiRating-icon": {
    width: "1rem",
    height: "1rem",
    marginRight: "2px",
  },
});

export default function StyRating({ value }) {
  return (
    <>
      <Container>
        <StyledRating
          precision={1}
          icon={<FilledReview fontSize="inherit" sx={{ marginRight: "5px" }} />}
          emptyIcon={
            <StarReview fontSize="inherit" sx={{ marginRight: "5px" }} />
          }
          value={value}
          readOnly
        />
      </Container>
    </>
  );
}
