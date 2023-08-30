import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Products5 } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/actions/action";

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

  height: 50vh;
  width: 40%;
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

  // const dispatch = useDispatch();
  // const { loading, data, error } = useSelector((state) => state.data);
  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

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

  const filteredProducts = Products5.filter((product) =>
    product.rname.toLowerCase().includes(searchQuery.toLowerCase())
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
                <StyLink href={`/products/${product.id}`}>
                  <List key={product.id}>{product.rname}</List>
                </StyLink>
              </div>
            ))}
          </Wrapper>
        )}
      </Cont>
    </>
  );
}
