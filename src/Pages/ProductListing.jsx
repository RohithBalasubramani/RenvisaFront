import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import styled from "styled-components";
import ProductCard from "../Components/Homepage/ProductCard/ProductCard";
// import { Products5 } from "../data";
import {
  Box,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled as sty } from "@mui/material/styles";
import BreadcrumbsPlp from "../Components/PLP/BreadCrumbsPLP";
import { useLocation } from "react-router-dom";
import HeaderTwo from "../Components/Header/HeaderTwo";
import axios from "axios";
import ProdCardTwo from "../Components/Homepage/ProductCard/ProdCardTwo";
import ContentLoader from "react-content-loader";

const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: auto;
  color: #333333;
`;

const Containerwhole = styled.div`
  display: flex;
  height: 150vh;
  width: 100%;
  padding-top: 13vh;
`;

const FilterWrap = styled.div`
  flex: 1.2;
  width: auto;
  background: #ffffff;
  margin-left: 5vh;
  margin-right: 5vh;
  position: sticky;
  overflow: hidden;
`;

const HeadCon = styled.div`
  position: sticky;
  z-index: 100;
`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  background-color: #ffffff;
  grid-gap: 2.5vh;
  padding: 2vh;
  /* padding-right: 5vh; */
`;

const WrapperWhole = styled.div`
  background-color: #ffffff;
  display: block;
  border-left: 1px solid #e0e0e0;
  flex: 8;
  overflow-y: scroll;
`;

const WrapperHead = styled.div`
  background-color: #ffffff;
  width: 100%;
  padding-left: 2vh;
  border-bottom: 1px solid #e0e0e0;
`;

const FilterHead = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.045em;
  text-align: left;
  text-transform: uppercase;
  padding-top: 3vh;
  padding-bottom: 2vh;
  display: flex;
  gap: 2vh;

  margin-top: 2vh;
`;

const FilterBoxBrand = styled.div`
  overflow-y: hidden;
  margin-bottom: 2vh;
  max-height: 40vh;

  .other-component {
    font-family: Lexend;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #4f4f4f;
    max-height: calc(30px * 5);
    overflow: hidden;
  }

  &.clicked {
    max-height: calc(30px * 7);

    .other-component {
      max-height: calc(30px * 7);
    }
  }
`;

const FilterCont = styled.label`
  font-family: Lexend;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const WrapperTit = styled.div`
  font-family: Lexend;
  font-size: 48px;
  font-weight: 500;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: left;
`;

const WrapperNum = styled.div`
  font-family: Lexend;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0.02em;
  text-align: left;
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
const WrapperFlex = styled.div`
  width: 100%;
  display: flex;
  vertical-align: middle;
  padding-bottom: 1vh;
`;

const FilterPriceWrap = styled.div`
  font-family: Lexend;
  font-size: 6px;
  font-weight: 200;
`;

const ViewMoreOffers = styled.div`
  font-family: Lexend;
  font-size: 12px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: right;
  border-bottom: 1px solid #e0e0e0;
  margin-right: 0;
  margin-left: auto;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const IOSSlider = sty(Slider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#c60000" : "#D2D2D2",
  height: 2,
  width: "80%",
  margin: "15px",
  fontFamily: "Lexend",
  fontSize: "12px",
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    fontFamily: "Lexend",
    fontSize: 12,
    fontWeight: "200",
    height: 24,
    width: 24,
    backgroundColor: "#FFBF00",
    boxShadow: iOSBoxShadow,
    "&:focus, &:hover, &.Mui-active": {
      fontFamily: "Lexend",
      fontSize: 12,
      fontWeight: "200",
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  "& .MuiSlider-valueLabel": {
    fontFamily: "Lexend",
    fontSize: 12,
    fontWeight: "200",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&:before": {
      fontFamily: "Lexend",
      fontSize: "12px",
      fontWeight: "200",
      display: "none",
    },
    "& *": {
      fontFamily: "Lexend",
      fontSize: 12,
      fontWeight: "200",
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#000",
    },
  },
  "& .MuiSlider-track": {
    fontFamily: "Lexend",
    fontSize: 12,
    fontWeight: "200",
    border: "none",
  },
  "& .MuiSlider-rail": {
    fontFamily: "Lexend",
    fontSize: 12,
    fontWeight: "200",
    opacity: 0.5,
    backgroundColor: "#1e00ff",
  },
  "& .MuiSlider-mark": {
    fontFamily: "Lexend",
    fontSize: "12px",
    fontWeight: "800",
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    "&.MuiSlider-markActive": {
      fontFamily: "Lexend",
      fontSize: "12px",
      fontWeight: "200",
      opacity: 1,
      backgroundColor: "currentColor",
    },
  },
}));

const marks = [
  {
    value: 10000,
    label: "10k",
  },
  {
    value: 20000,
    label: "20k",
  },
  {
    value: 30000,
    label: "30k",
  },
  {
    value: 40000,
    label: "40k",
  },
  {
    value: 50000,
    label: "50k",
  },
];

const ProductListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [filteredProductsOne, setFilteredProductsOne] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [seeMore, setSeeMore] = useState("View Less");
  const [isClicked2, setIsClicked2] = useState(false);
  const [seeMore2, setSeeMore2] = useState("View Less");

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (seeMore === "See More") {
      setSeeMore("View Less");
    } else {
      setSeeMore("See More");
    }
  };

  const handleClick2 = () => {
    setIsClicked2(!isClicked2);
    if (seeMore2 === "See More") {
      setSeeMore2("View Less");
    } else {
      setSeeMore2("See More");
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://renvisa.org/product/");
        setData(response.data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const location = useLocation();

  const Products5 = data;

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get("search") || "";
    setSearchQuery(search);
    // filterProducts(search);
  }, [location.search]);

  const searchKeywords = searchQuery.toLowerCase().split(" ");
  const filteredProductsOne = Products5.filter((product) => {
    const subcategories = [
      product.name,
      product.category,
      product.brand,
      product.industry,
      product.application,
      product.sub_category,
      // product.SubCategory4,
      // product.SubCategory5,
      // product.SubCategory6,
    ];

    return searchKeywords.every((keyword) =>
      subcategories.some((subcategory) =>
        subcategory.toLowerCase().includes(keyword)
      )
    );
  });

  const [selectedCategory, setSelectedCategory] = useState([]);

  function handleCategoryCheckboxChange(event) {
    const category = event.target.value;
    if (event.target.checked) {
      setSelectedCategory([...selectedCategory, category]);
    } else {
      setSelectedCategory(
        selectedCategory.filter(
          (selectedCategory) => selectedCategory !== category
        )
      );
    }
  }

  // const filterProducts = (searchQuery) => {
  //   const filtered = Products5.filter(
  //     (product) =>
  //       product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setFilteredProductsOne(filtered);
  // };

  //Brand Filtering//

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceFilter, setPriceFilter] = useState([0, 600000]);
  const [sortOrder, setSortOrder] = useState("asc");

  function handleBrandCheckboxChange(event) {
    const brand = event.target.value;
    if (event.target.checked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(
        selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      );
    }
  }

  const handlePriceChange = (event, newValue) => {
    setPriceFilter(newValue);
  };

  const allBrands = Array.from(
    new Set(filteredProductsOne.map((product) => product.brand))
  );

  const allcat = Array.from(
    new Set(filteredProductsOne.map((product) => product.category))
  );

  console.log(allcat);

  const filteredProducts = filteredProductsOne.filter((product) => {
    if (
      (selectedBrands.length === 0 || selectedCategory.length === 0) &&
      product.discounted_price >= priceFilter[0] &&
      product.discounted_price <= priceFilter[1]
    ) {
      return true;
    } else {
      return (
        (selectedBrands.includes(product.brand) ||
          selectedBrands.includes(product.category)) &&
        product.discounted_price >= priceFilter[0] &&
        product.discounted_price <= priceFilter[1]
      );
    }
  });

  const count = filteredProducts.length;

  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  function valuetext(value) {
    return `₹${value}`;
  }

  if (loading) {
    return (
      <ContentLoader viewBox="0 0 1360 900" height={900} width={1360}>
        <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
        <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
        <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
        <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
        <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
        <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
        <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
        <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
        <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
        <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
        <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
        <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />
        <rect x="910" y="20" rx="8" ry="8" width="200" height="200" />
        <rect x="910" y="250" rx="0" ry="0" width="200" height="18" />
        <rect x="910" y="275" rx="0" ry="0" width="120" height="20" />
        <rect x="1130" y="20" rx="8" ry="8" width="200" height="200" />
        <rect x="1130" y="250" rx="0" ry="0" width="200" height="18" />
        <rect x="1130" y="275" rx="0" ry="0" width="120" height="20" />
        <rect x="30" y="340" rx="8" ry="8" width="200" height="200" />
        <rect x="30" y="570" rx="0" ry="0" width="200" height="18" />
        <rect x="30" y="595" rx="0" ry="0" width="120" height="20" />
        <rect x="250" y="340" rx="8" ry="8" width="200" height="200" />
        <rect x="250" y="570" rx="0" ry="0" width="200" height="18" />
        <rect x="250" y="595" rx="0" ry="0" width="120" height="20" />
        <rect x="470" y="340" rx="8" ry="8" width="200" height="200" />
        <rect x="470" y="570" rx="0" ry="0" width="200" height="18" />
        <rect x="470" y="595" rx="0" ry="0" width="120" height="20" />
        <rect x="690" y="340" rx="8" ry="8" width="200" height="200" />
        <rect x="690" y="570" rx="0" ry="0" width="200" height="18" />
        <rect x="690" y="595" rx="0" ry="0" width="120" height="20" />
        <rect x="910" y="340" rx="8" ry="8" width="200" height="200" />
        <rect x="910" y="570" rx="0" ry="0" width="200" height="18" />
        <rect x="910" y="595" rx="0" ry="0" width="120" height="20" />
        <rect x="1130" y="340" rx="8" ry="8" width="200" height="200" />
        <rect x="1130" y="570" rx="0" ry="0" width="200" height="18" />
        <rect x="1130" y="595" rx="0" ry="0" width="120" height="20" />
      </ContentLoader>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Container>
      <HeadCon>
        <HeaderTwo />
      </HeadCon>

      <Containerwhole>
        <FilterWrap>
          <FilterHead> Category </FilterHead>

          <FilterBoxBrand className={isClicked2 ? "clicked" : ""}>
            {allcat.map((category) => (
              <div className="other-component" key={category}>
                <Checkbox
                  type="checkbox"
                  value={category}
                  checked={selectedCategory.includes(category)}
                  onChange={(event) => handleCategoryCheckboxChange(event)}
                  sx={{
                    color: "#E0E0E0",
                    "&.Mui-checked": {
                      color: "#F5A91D",
                    },
                  }}
                />
                {category}
              </div>
            ))}
          </FilterBoxBrand>
          <ViewMoreOffers onClick={handleClick2}>{seeMore2}</ViewMoreOffers>

          <FilterHead> Brand </FilterHead>

          <FilterBoxBrand className={isClicked ? "clicked" : ""}>
            {allBrands.map((brand) => (
              <div className="other-component" key={brand}>
                <Checkbox
                  type="checkbox"
                  value={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={(event) => handleBrandCheckboxChange(event)}
                  sx={{
                    color: "#E0E0E0",
                    "&.Mui-checked": {
                      color: "#F5A91D",
                    },
                  }}
                />
                {brand}
              </div>
            ))}
          </FilterBoxBrand>
          <ViewMoreOffers onClick={handleClick}>{seeMore}</ViewMoreOffers>

          <FilterPriceWrap>
            <FilterHead>
              {" "}
              Price{" "}
              <h6>
                (Rs.{priceFilter[0]} - Rs.{priceFilter[1]})
              </h6>
            </FilterHead>
            <IOSSlider
              id="price-filter"
              value={priceFilter}
              getAriaValueText={valuetext}
              onChange={handlePriceChange}
              min={0}
              valueLabelDisplay="auto"
              max={60000}
              step={5000}
            />
          </FilterPriceWrap>

          {/* <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
          Sort by Price ({sortOrder === 'asc' ? 'Low to High' : 'High to Low'})
      </button> */}
        </FilterWrap>

        <WrapperWhole>
          <WrapperHead>
            <WrapperFlex>
              <div>
                <BreadcrumbsPlp PLPText={searchQuery} />
                <WrapperTit>{searchQuery}</WrapperTit>
                <WrapperNum>‘{count}’ Results</WrapperNum>
              </div>

              <Sort>
                <SortText>Sort by:</SortText>

                <FormControl
                  sx={{ m: 1, minWidth: 120, fontFamily: "Lexend" }}
                  size="small"
                >
                  <Select
                    id="demo-simple-select"
                    value={sortOrder}
                    displayEmpty
                    sx={{ fontFamily: "Lexend", fontSize: "14px" }}
                  >
                    <MenuItem
                      onClick={() => setSortOrder("desc")}
                      value={"desc"}
                      sx={{ fontFamily: "Lexend", fontSize: "14px" }}
                    >
                      High to Low
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: "Lexend", fontSize: "14px" }}
                      onClick={() => setSortOrder("asc")}
                      value={"asc"}
                    >
                      Low to High
                    </MenuItem>
                  </Select>
                </FormControl>
              </Sort>
            </WrapperFlex>
          </WrapperHead>
          <Wrapper>
            {sortedProducts.map((product) => (
              <Link
                style={{ textDecoration: "none" }}
                key={product._id}
                to={`/products/${product._id}`}
              >
                <ProdCardTwo item={product} />
              </Link>
            ))}
          </Wrapper>
        </WrapperWhole>
      </Containerwhole>
    </Container>
  );
};

export default ProductListing;
