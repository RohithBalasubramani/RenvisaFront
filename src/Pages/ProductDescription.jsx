import React, { useState } from "react";
import styled from "styled-components";
import Gallery from "../Components/Product/Gallery";
import NavBreadcrumbs from "../Components/Product/NavBreadcrumbs";
import "../Components/Product/Prodess.css";
import {
  Add,
  History,
  Inventory2,
  LabelImportant,
  Remove,
  SystemSecurityUpdateWarning,
  ThumbDown,
  ZoomIn,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../Redux/actions/action";
import RatingComponent from "../Components/PDP/RatingComponent";
import { useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import { reviewdatatrail } from "../Components/Homepage/Trail/traildata";
import ReturnPolicy from "../Components/PDP/ReturnPolicy";
import ProdInfo from "../Components/PDP/ProdInfo";
import OffersComp from "../Components/PDP/OffersComp";
import { ReactComponent as ShareIcon } from "../Assets/PDP/Share.svg";
import StyRating from "../Components/PDP/StyRating";
import ProductCard from "../Components/Homepage/ProductCard/ProductCard";
import { Products4 } from "../data";
import HeaderTwo from "../Components/Header/HeaderTwo";
import SimilarProd from "../Components/PDP/SimilarProd";
import axios from "axios";
import { useEffect } from "react";
import { Alert, Snackbar } from "@mui/material";

const ContainerWhole = styled.div`
  width: 100%;
`;

const Container = styled.div`
  font-family: "Poppins";
  font-style: normal;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 10vh;
  padding-bottom: 30vh;

  background-color: #ffffff;
`;

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 80%;
  /* margin-top: 5%; */
  margin-bottom: auto;
  margin-left: 10%;
  margin-right: auto;
  position: reative;
  padding-top: 1vh;
`;

const HeadCon = styled.div`
  position: sticky;
  width: 100vw;
  z-index: 100;
`;

const TopLayer = styled.div`
  display: flex;
  padding-left: 1vh;
  padding-right: 15vh;
  padding-top: 1vh;
  padding-bottom: 3vh;
`;

const ShareBox = styled.div`
  margin-right: 0%;
  margin-left: auto;

  &:hover {
    font-weight: 600;
    color: #b4b4b4;
  }
`;

const Section = styled.div`
  background-color: #fffbf3;
  display: block;
  padding: 5vh;
  gap: 20px;
`;

const SecIns = styled.div`
  display: flex;
`;

const SecLeft = styled.div`
  flex: 1;
  display: block;
  padding-right: 3vh;
`;

const SecRight = styled.div`
  flex: 1;
  padding-right: 15vh;
`;
const GalleryItems = styled.div`
  width: 50%;
  padding-left: 10vh;
  margin-right: 2vh;

  /* transform: rotate(90deg); */
`;

const Title = styled.div`
  font-family: Lexend;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;

  text-transform: capitalize;
  color: #000000;
`;
const Refnum = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #828282;
`;

const Brand = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #828282;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ReviewDiv = styled.div`
  display: inline-flex;
  padding-top: 1vh;
  padding-bottom: 1vh;
`;

const StarDiv = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: justify;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: #f5d538;
  padding-right: 1vh;
  border-right: 1px solid black;
`;
const RatingDiv = styled.div`
  font-family: Lexend;
  font-size: 12px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  border-left: 1px solid #bdbdbd;
  padding-left: 10px;
`;

const StockBox = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #12c12a;
  margin-bottom: 6vh;
`;

const CheckDel = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: justify;
  letter-spacing: 0.05em;
  color: #1c8ee1;
  margin-left: 12vh;
  &:hover {
    color: #1278c1;
    font-weight: 500;

    cursor: pointer;
  }
`;

const PriceStrike = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #828282;
`;

const ActualPrice = styled.div`
  font-family: Lexend;
  font-size: 32px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #00337c;
  display: flex;
`;

const ActualPriceSmall = styled.div`
  font-family: Lexend;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #828282;
  padding-top: 1vh;
`;

const OfferTitle = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

const OfferStart = styled.div`
  color: #000000;
`;

const Offer = styled.div`
  font-family: Lexend;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #4f4f4f;
`;

const TnC = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.05em;

  color: #1c8ee1;

  &:hover {
    text-decoration-line: underline;
    cursor: pointer;
  }
`;

const OffersDiv = styled.div`
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  margin-top: 5vh;
  margin-bottom: 4vh;
`;

const GalleryBox = styled.div`
  margin-top: 1vh;
`;

const BuyNow = styled.button`
  background-color: #f5a91d;
  border-radius: 8px;
  height: 60px;
  width: 100%;
  border-color: #f5a91d;
  font-weight: 700;
  font-size: 20px;
  color: #00337c;
  flex: 1;
  text-transform: uppercase;
  transition: 0.3s;
  &:hover {
    background-color: #1f1f1f;
    color: #f5a91d;
    border-color: #1f1f1f;
  }
`;

const CartLine = styled.div`
  display: flex;
  gap: 10px;
`;

const CartlineButton = styled.button`
  border-radius: 8px;
  background-color: inherit;
  height: 60px;
  flex: 1;
  color: #003171;
  border: 1px solid #003171;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  align-items: center;
  text-align: center;
  padding: 1vh;
  transition: 0.3s;
  /* transition-timing-function: ease;  */
  &:hover {
    background-color: #1f1f1f;
    color: #f5d538;
    border-color: #1f1f1f;
  }
`;

const CartlineQuant = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  margin-bottom: 4vh;
  color: #4f4f4f;
  gap: 2vh;
`;

const BulkContainer = styled.div`
  display: flex;
  background-color: #fafdff;
  padding: 7vh;
  vertical-align: middle;
  margin-top: 3vh;
`;

const BulkLineOne = styled.div`
  font-family: Lexend;
  font-size: 24px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
  display: block;
  color: #00337c;
  margin-top: auto;
  margin-bottom: auto;
`;

const BulkSecondLine = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #828282;
  margin-top: 1vh;
`;

const BulkImg = styled.img`
  background-color: #ffffff;
  width: 10%;
  padding: 1vh;
  margin-right: 3vh;
`;

const BulkButton = styled.button`
  border-radius: 8px;
  padding: 2vh;
  padding-left: 4vh;
  padding-right: 4vh;
  font-family: Lexend;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.25px;
  text-align: left;
  color: #ffffff;
  background: #00337c;
  margin-left: auto;
  margin-right: 2vh;
  height: min-content;
  margin-top: auto;
  margin-bottom: auto;
`;

const SectionTwo = styled.div`
  display: block;
  padding: 5vh;
`;
const ProdSpecsTit = styled.div`
  font-family: Lexend;
  font-size: 24px;
  font-weight: 500;
  line-height: 39px;
  letter-spacing: 0.02em;
  text-align: justified;
  color: #00337c;
`;
const SpecCon = styled.div`
  height: 2vh;
  display: flex;
`;
const DivTable = styled.div`
  column-count: 2;
  column-gap: 45vh;
  margin-left: 4vh;
  margin-bottom: 4vh;
`;

const SpecTable = styled.table`
  background-color: inherit;
`;
const TDone = styled.td`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0em;
  margin-right: 2vh;
  width: 20vw;

  color: #000000;
`;

const TDtwo = styled.td`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: justified;
  width: 20vw;

  color: #4f4f4f;
`;

const QuantBox = styled.div`
  background: white;
  border-radius: 3px;
  border: 1px solid #4f4f4f;
  width: 25px;
  text-align: center;
`;

const DiscImg = styled.div`
  z-index: 5;
  position: absolute;
  transform: rotate(-90deg);

  top: 63%;
  left: -3%;
`;
const DiscPercentage = styled.div`
  position: absolute;
  left: 10px;
  top: 25px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: #fff9eb;
  z-index: 6;
`;

const HoverToZoom = styled.div`
  position: absolute;
  left: 40%;
  top: 25px;
  display: flex;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.05em;

  color: #d9d9d9;
`;

const SimilarProdDiv = styled.div`
  background-color: #fdfdfd;
  border-top: 1px solid #e0e0e0;
  display: flex;
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

const ProdWrapper = styled.div`
  display: flex;
  gap: 3vh;

  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const ProductDescription = ({ products }) => {
  const [quantity, setQuantity] = useState(1);
  // const [limitedData, setLimitedData] = useState(data.slice(0, 3));
  const [open, setOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const getdata = useSelector((state) => state.cartreducer.carts);

  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    console.log(getdata[0]);

    dispatch(ADD({ ...e, qnty: quantity }));
  };

  const rmv = (_id) => {
    if (quantity > 1) {
      // dispatch(REMOVE(_id))
      setQuantity(quantity - 1);
    }
    // else{
    //     dispatch(REMOVE(_id))
    //     setQuantity(quantity-1)
    // }
  };

  const { _id } = useParams();
  const product = products.find((product) => product._id === parseInt(_id));
  const referenceProductSubcategory = product.sub_category;
  //   console.log(product);
  const productsWithSameSubcategory = products.filter((product) => {
    return product.sub_category === referenceProductSubcategory;
  });

  const add = (prod) => {
    setQuantity(quantity + 1);

    // dispatch(ADD(prod));
  };

  function formatIndianNumber(number) {
    return number.toLocaleString("en-IN");
  }

  const handleQuotationRequest = () => {
    const token = localStorage.getItem("access_token");

    const data = {
      product: product._id,
      user: 9,
    };

    const apiUrl = "https://renvisa.org/quotation-requests/";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post(apiUrl, data, config)
      .then((response) => {
        console.log("Success:", response.data);
        setResponseMessage(response.data);
        setSeverity("success");
        setOpen(true);
      })
      .catch((error) => {
        console.log("Error:", error.response.data);
        setResponseMessage(error.response.data);
        setSeverity("error");
        setOpen(true);

        // Handle error, e.g., show an error message to the user
      });
  };

  useEffect(() => {
    product.qnty = quantity;
  }, [quantity]);

  console.log(product);

  return (
    <ContainerWhole>
      <HeadCon>
        <HeaderTwo />
      </HeadCon>

      <Container>
        <Section>
          <TopLayer>
            <NavBreadcrumbs item={product} />
            <ShareBox>
              <ShareIcon />{" "}
            </ShareBox>
          </TopLayer>

          <SecIns>
            <SecLeft>
              <GalleryBox>
                <Gallery items={product} />
              </GalleryBox>
            </SecLeft>

            <SecRight>
              <Refnum>Ref no: {product.HSN_code}</Refnum>
              <Title>{product.name}</Title>
              <Brand>{product.brand}</Brand>
              <ReviewDiv>
                <StarDiv>
                  {/* <Rating name="half-rating" defaultValue={product.rating} precision={0.5} readOnly/> */}
                  <StyRating value={product.rating} />
                </StarDiv>
                <RatingDiv>{product.numReviews} Reviews</RatingDiv>
              </ReviewDiv>

              <ActualPrice>
                Rs.&nbsp;{formatIndianNumber(product.discounted_price)}&nbsp;
                <PriceStrike>
                  <s>Rs.{formatIndianNumber(product.price)}</s>
                </PriceStrike>
              </ActualPrice>

              <ActualPriceSmall>
                + {product.discounted_price * 0.18} (
                {Math.round(
                  ((product.price - product.discounted_price) * 100) /
                    product.price
                )}
                % GST)
              </ActualPriceSmall>

              <OffersDiv>
                <OffersComp />
              </OffersDiv>

              <CartlineQuant>
                Quantity
                <Remove onClick={() => rmv(product)} />{" "}
                <QuantBox>{quantity}</QuantBox>{" "}
                <Add onClick={() => add(product)} />
              </CartlineQuant>

              <StockBox>In Stock.</StockBox>

              <CartLine>
                <BuyNow>Buy Now </BuyNow>
                <CartlineButton onClick={() => send(product)}>
                  Add to cart
                </CartlineButton>
              </CartLine>
            </SecRight>
          </SecIns>
        </Section>

        <Wrapper>
          <BulkContainer>
            <BulkImg src={product.image}></BulkImg>
            <BulkLineOne>
              Looking to purchase in <b>Bulk?</b>
              <BulkSecondLine>
                Once you submit request, our agent will contact to you.
              </BulkSecondLine>
            </BulkLineOne>
            <BulkButton onClick={handleQuotationRequest}>
              Submit Request
            </BulkButton>
          </BulkContainer>

          <SectionTwo>
            <ProdSpecsTit>Product Specification</ProdSpecsTit>

            <DivTable>
              <SpecTable>
                {product.prospecs.map((items) => (
                  <div>
                    <TDone>{items.label}</TDone>
                    <TDtwo>{items.value}</TDtwo>{" "}
                  </div>
                ))}

                {/* <tr>
                  <TDone>Current at Max Power (Imp)&nbsp;&nbsp;</TDone>
                  <TDtwo>8.79 Amp</TDtwo>{" "}
                </tr>

                <tr>
                  <TDone>Short Circuit Current (Isc)</TDone>
                  <TDtwo>9.34 Amp</TDtwo>{" "}
                </tr> */}
              </SpecTable>
            </DivTable>

            <ProdSpecsTit>Product Information</ProdSpecsTit>
            <ProdInfo item={product} />

            <ProdSpecsTit>Return Policy</ProdSpecsTit>

            <ReturnPolicy />
          </SectionTwo>

          <RatingComponent reviews={reviewdatatrail} product={product} />
        </Wrapper>
      </Container>
      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {responseMessage}
        </Alert>
      </Snackbar> */}
      <SimilarProd data={productsWithSameSubcategory} />
    </ContainerWhole>
  );
};

export default ProductDescription;
