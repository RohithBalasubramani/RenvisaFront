import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Products5 } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/actions/action";
import axios from "axios";

const Cont = styled("div")`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.col};
  font-family: Lexend;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  margin-left: 1vh;
  border-color: ${(props) => props.bor};
`;

const Wrapper = styled("div")`
  background-color: ${(props) => props.bg};
  border-radius: 8px;

  max-height: 50vh;
  width: 39%;
  padding: 2vh;
  position: absolute;
  top: 9vh;
  overflow: hidden;
`;

const List = styled("div")`
  color: #333;
  font-family: Lexend;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 266.667% */
  letter-spacing: 0.4px;
  text-align: left;
  border-bottom: 1px solid #e5e5e5;
  text-overflow: ellipsis; /* enables ellipsis */
  white-space: nowrap; /* keeps the text in a single line */
  overflow: hidden;
  margin-bottom: 0.2%;
  &:hover {
    cursor: pointer;
    background-color: #ececec;
  }
`;

const StyLink = styled("a")`
  color: #000000;
  text-decoration: none;
`;

// const Search = styled("div")(({ theme }) => ({
//   fonrFamily: "Lexend",
//   display: "flex",
//   fontStyle: "normal",
//   fontWeight: "400",
//   fontSize: "12px",
//   lineHeight: "32px",
//   /* identical to box height, or 267% */
//   borderRadius: "8px",
//   letterSpacing: "0.4px",

//   position: "relative",
//   color: "inherit",
//   // height:"5vh",
//   border: "0px",
//   backgroundColor: "inherit",
//   fontWeight: "400",
//   "&:hover": {
//     fontWeight: "600",
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#000000",
  fontFamily: "Lexend",
  fontSize: "12px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: "1vw",
    transition: theme.transitions.create("width"),
    width: "33vw",

    [theme.breakpoints.up("sm")]: {
      "&:focus": {
        backgroundColor: "#ffffff19",
        borderRadius: "20px",
      },
    },
  },
}));

export default function SearchAppBar({ SearchBgCol, SearchCol, SearchBorCol }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSubMenuOpen1, setIsSubMenuOpen1] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://renvisa.org/product/");
        console.log(response.data);
        setData(response.data);
        console.log("datatest", data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleSearchButtonClick = () => {
    navigate(`/product?search=${searchQuery}`);
    setIsSubMenuOpen1(false);
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery != "") {
      setIsSubMenuOpen1(true);
    } else {
      setIsSubMenuOpen1(false);
    }
  }, [searchQuery]);

  if (loading) {
    return (
      <div>
        <Cont bg={SearchBgCol} bor={SearchBorCol} col={SearchCol}>
          <div>
            <StyledInputBase
              placeholder="Search Products, Brands, ..."
              inputProps={{ "aria-label": "search" }}
            />

            <IconButton sx={{ color: { SearchCol } }}>
              <SearchIcon />
            </IconButton>
          </div>
        </Cont>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (data) {
    const filteredProducts = data.filter(
      (product) =>
        product.name &&
        searchQuery &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
      <>
        <Cont bg={SearchBgCol} bor={SearchBorCol} col={SearchCol}>
          <div>
            <StyledInputBase
              placeholder="Search Products, Brands, ..."
              inputProps={{ "aria-label": "search" }}
              onChange={handleSearchInputChange}
              value={searchQuery}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  handleSearchButtonClick();
                }
              }}
            />

            <IconButton
              onClick={handleSearchButtonClick}
              sx={{ color: { SearchCol } }}
            >
              <SearchIcon />
            </IconButton>
          </div>
          {isSubMenuOpen1 && (
            <Wrapper bg={SearchBgCol}>
              {filteredProducts.map((product) => (
                <div>
                  <StyledLink to={`/products/${product._id}`}>
                    <List key={product._id}>{product.name}</List>
                  </StyledLink>
                </div>
              ))}
            </Wrapper>
          )}
        </Cont>
      </>
    );
  }
}
