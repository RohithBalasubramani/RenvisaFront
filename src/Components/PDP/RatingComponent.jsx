import {
  MenuItem,
  Rating,
  Select,
  FormControl,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import CustomizedRating from "./RateProduct";
import StyRating from "./StyRating";
import { Remove } from "@mui/icons-material";

const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
  display: block;
`;

const Wrapper = styled.div`
  background-color: #ffffff;
  display: inline-flex;
  width: 100%;
`;

const RatingText = styled.div`
  font-family: Lexend;
  font-size: 64px;
  font-weight: 500;
  line-height: 104px;
  letter-spacing: 0.02em;
  text-align: justified;
`;

const RatingDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  height: 100%;
  margin-right: auto;
  margin-left: 5px;
  margin-bottom: auto;
  margin-top: auto;
`;
const ReviewNumbers = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

const WrapperTwo = styled.div`
  background-color: #ffffff;
  display: flex;
`;

const WrapperLeft = styled.div`
  flex: 3;
  height: 100vh;
  background-color: #ffffff;
`;
const WrapperRight = styled.div`
  flex: 7;
  height: 100vh;
  background-color: #ffffff;
  overflow-y: scroll;
`;

const WLFirst = styled.div`
  font-family: Lexend;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  display: flex;
`;

const WLFTwo = styled.div`
  display: flex;
  font-family: Lexend;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: right;
  cursor: pointer;
  gap: 3vh;
  padding-bottom: 0.75vh;
  padding-top: 0.75vh;
  padding: 1vh;
  width: 100%;

  &:focus {
    background: #f2f2f2;
  }
`;

const WLFTwoPercentage = styled.div`
  background-color: white;
  border-radius: 9.5px;
  border: 2px solid grey;
  width: 50%;
`;
const Percentage = styled.div`
  background-color: #ffbf00;
  border-radius: 9.5px;
  border: 3px solid #ffbf00;
  width: 70%;
  height: 100%;
`;

const ReviewHeading = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #3e3e3e;
  margin-bottom: 2vh;
`;

const WROne = styled.div`
  border-top: 2px solid #d8d9da;
  width: 90%;
  height: 30vh;
  margin-top: 2vh;
  padding-top: 3vh;
`;

const Tit = styled.div`
  font-family: Lexend;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
`;

const PostName = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

const Days = styled.div`
  font-family: Lexend;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #6f6f6f;
`;

const Review = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: #323232;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;
const Sort = styled.div`
  margin-left: auto;
  margin-right: 0%;
  display: flex;
  margin-top: auto;
  margin-bottom: 0;
`;

const SortText = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  margin-top: auto;
  margin-bottom: auto;
`;

const AddingReview = styled.input`
  font-family: Lexend;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  padding: 1vh;
  margin-top: 2vh;
  width: 78%;
  border-radius: 8px;
  height: 15vh;
  border: 2px dashed #6f6f6f;
`;

const RatingComponent = ({ reviews, product }) => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredReviews = selectedRating
    ? reviews.filter((review) => review.rating === selectedRating)
    : reviews;

  const sortedProducts = filteredReviews.slice().sort((a, b) => {
    if (sortOrder === "asc") {
      return a.rating - b.rating;
    } else {
      return b.rating - a.rating;
    }
  });

  return (
    <Container>
      <Wrapper>
        <RatingText>4.0</RatingText>

        <RatingDiv>
          <StyRating value={4} />

          <ReviewNumbers>12 Reviews</ReviewNumbers>
        </RatingDiv>

        <Sort>
          <SortText>Sort by:</SortText>

          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select id="demo-simple-select" value={sortOrder} displayEmpty>
              <MenuItem onClick={() => setSortOrder("desc")} value={"desc"}>
                High to Low
              </MenuItem>
              <MenuItem onClick={() => setSortOrder("asc")} value={"asc"}>
                Low to High
              </MenuItem>
            </Select>
          </FormControl>
        </Sort>
      </Wrapper>
      <WrapperTwo>
        <WrapperLeft>
          <WLFirst>
            Select a row below to filter reviews.{" "}
            <Remove
              sx={{
                marginRight: "18%",
                marginLeft: "auto",
                "&:focus, &:hover, &.Mui-active": {
                  background: "#efefef",
                  borderRadius: "100%",
                },
              }}
              onClick={() => setSelectedRating(null)}
            />
          </WLFirst>

          {[1, 2, 3, 4, 5].map((rating) => (
            <WLFTwo tabIndex={rating} onClick={() => setSelectedRating(rating)}>
              {rating} Star{" "}
              <WLFTwoPercentage>
                <Percentage />
              </WLFTwoPercentage>{" "}
              1,525
            </WLFTwo>
          ))}

          {/* <button onClick={() => setSelectedRating(null)}>Clear filter</button> */}

          <ReviewHeading>Review this Product</ReviewHeading>
          <CustomizedRating />
          <AddingReview
            disabled
            placeholder="Adding a review will require a valid email for verification."
          >
            {/* Adding a review will require a valid email for verification. */}
          </AddingReview>
        </WrapperLeft>
        <WrapperRight>
          {sortedProducts.length > 0 ? (
            sortedProducts.map((review) => (
              <WROne key={review.id}>
                <Rating
                  name="half-rating-read"
                  defaultValue={review.rating}
                  precision={0.5}
                  readOnly
                />
                <Tit>Post Title Here</Tit>
                <PostName>PosterName</PostName>
                <Days>3 days ago</Days>
                <Review>{review.comment}</Review>

                <Review>Helpful?</Review>
              </WROne>
            ))
          ) : (
            <p>No reviews found.</p>
          )}
        </WrapperRight>
      </WrapperTwo>
    </Container>
  );
};

export default RatingComponent;
