import { ExpandMore, KeyboardArrowRight } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
// import "./menusty.css"

import styled from "styled-components";
import StyledLink from "../../StyLink";
import { ReactComponent as DDT } from "../../../Assets/Header/DDArc.svg";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  /* display: flex; */
  cursor: pointer;
`;

const Names = styled.a`
  text-decoration: none;
  font-family: Lexend;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.15000000596046448px;
  padding-left: 4vh;
  align-items: center;
  display: flex;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 9vh;
  width: 80vh;
  height: 45vh;
  margin-left: -15%;
`;
const WrapperCont = styled.div`
  display: flex;
  height: 100%;
`;
const WrapperOne = styled.div`
  background: #f0f0f0;
  height: 100%;
  display: block;
  flex: 1;
`;

const WrapperHead = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  padding: 0.5vh;
  padding-left: 2vh;
  padding-right: 2vh;
`;

const NamesTwo = styled.div`
  text-decoration: none;
  font-family: Lexend;
  width: 40vh;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  color: #4f4f4f;
  padding: 0.5vh;
  padding-left: 2vh;
  padding-right: 2vh;
  text-overflow: ellipsis; /* enables ellipsis */
  white-space: nowrap; /* keeps the text in a single line */
  overflow: hidden;
`;

const Ellis = styled.div`
  text-overflow: ellipsis; /* enables ellipsis */
  white-space: nowrap; /* keeps the text in a single line */
  overflow: hidden;
  width: 35vh;
`;

const WrapperTwo = styled.div`
  display: block;
  flex: 1;
  background-color: #ffffff;
  height: 100%;
  padding-top: 5vh;
  overflow-y: hidden;
`;

const WrapperTwoItems = styled.div`
  font-family: Lexend;
  width: 40vh;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #4f4f4f;
  padding: 0.5vh;
  padding-left: 2vh;
  padding-right: 2vh;
  text-overflow: ellipsis;
  white-space: nowrap; /* keeps the text in a single line */
  overflow: hidden;
  &:hover {
    text-decoration: underline;
  }
`;

const CardArc = styled.svg`
  position: absolute;
  bottom: 100%;
  right: 50%;
  z-index: 1;
`;

const IconColor = styled.div`
  color: ${(props) => props.color};
  align-items: center;
  margin-top: 10px;
  margin-bottom: 0%;
`;

function MenuItemTwo({
  cat,
  sub,
  head,
  col,
  arccol,
  isSubMenuOpen,
  toggleSubMenu,
  field,
}) {
  const [selectedCat, setSelectedCat] = useState(null);
  const [filteredSub, setfilteredSub] = useState(null);

  function handleCatClick(menuitem) {
    setSelectedCat(menuitem.name);
  }

  useEffect(() => {
    if (field === "brand") {
      const temp = sub.filter((product) => product.brand === selectedCat);
      const uniqueSubCategories = new Set();
      const uniqueTemp = temp.filter((product) => {
        if (!uniqueSubCategories.has(product.sub_category)) {
          uniqueSubCategories.add(product.sub_category);
          return true;
        }
        return false;
      });
      setfilteredSub(uniqueTemp);
    } else if (field === "industry") {
      const temp = sub.filter((product) => product.industry === selectedCat);
      const uniqueSubCategories = new Set();
      const uniqueTemp = temp.filter((product) => {
        if (!uniqueSubCategories.has(product.sub_category)) {
          uniqueSubCategories.add(product.sub_category);
          return true;
        }
        return false;
      });
      setfilteredSub(uniqueTemp);
    } else if (field === "application") {
      const temp = sub.filter((product) => product.application === selectedCat);
      const uniqueSubCategories = new Set();
      const uniqueTemp = temp.filter((product) => {
        if (!uniqueSubCategories.has(product.sub_category)) {
          uniqueSubCategories.add(product.sub_category);
          return true;
        }
        return false;
      });
      setfilteredSub(uniqueTemp);
    } else if (field === "category") {
      const temp = sub.filter((product) => product.category === selectedCat);
      const uniqueSubCategories = new Set();
      const uniqueTemp = temp.filter((product) => {
        if (!uniqueSubCategories.has(product.sub_category)) {
          uniqueSubCategories.add(product.sub_category);
          return true;
        }
        return false;
      });
      setfilteredSub(uniqueTemp);
    }
  }, [field, selectedCat, sub]);

  // const filteredSub = sub.filter((product) => product.brand === selectedCat);

  // if (field == "brand") {
  //   const filteredSub = sub.filter((product) => product.brand === selectedCat);
  //   // setfilteredSub(temp);
  // } else if (field == "industry") {
  //   const filteredSub = sub.filter(
  //     (product) => product.industry === selectedCat
  //   );
  //   // setfilteredSub(temp);
  // }
  // else if (condition3) {
  //   const temp = sub.filter((product) => product.brand === selectedCat);
  //   setfilteredSub(temp);
  // } else if (condition4) {
  //   const temp = sub.filter((product) => product.brand === selectedCat);
  //   setfilteredSub(temp);
  // } else {
  //   // Code to execute if none of the conditions are true
  // }

  const [isSubMenuTwoOpen, setIsSubMenuTwoOpen] = useState(false);
  const [search, setsearch] = useState("");

  const toggleSubMenuTwo = () => {
    setIsSubMenuTwoOpen(!isSubMenuTwoOpen);
  };

  const navigate = useNavigate();

  const handleSearchButtonClick = (searchQuery) => {
    // navigate(`/product?search=${searchQuery}`);
  };

  return (
    <Container>
      <Names onClick={toggleSubMenu}>
        <div>{head}</div>{" "}
        <IconColor color={col}>
          {" "}
          <ExpandMore />
        </IconColor>
      </Names>
      {isSubMenuOpen && (
        <Wrapper>
          <CardArc
            width="10"
            height="13"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 0L9.33013 10.6776H0.669873L5 0Z" fill={arccol} />
          </CardArc>
          {/* // <MenuItem key={subMenuItem.name} menuItem={subMenuItem} /> */}

          <WrapperCont>
            <WrapperOne>
              <WrapperHead>{head}</WrapperHead>

              {cat.map((menuItem) => (
                <NamesTwo
                  key={menuItem._id}
                  onClick={() => handleCatClick(menuItem)}
                >
                  <Ellis>{menuItem.name}</Ellis>
                  <KeyboardArrowRight
                    sx={{ marginRight: "2px", marginLeft: "auto" }}
                  />
                </NamesTwo>
              ))}
            </WrapperOne>

            <WrapperTwo>
              {filteredSub.map((subMenuItem) => (
                <StyledLink to={`/product?search=${subMenuItem.sub_category}`}>
                  <WrapperTwoItems key={subMenuItem._id}>
                    {subMenuItem.sub_category}
                  </WrapperTwoItems>
                </StyledLink>
              ))}
            </WrapperTwo>
          </WrapperCont>
        </Wrapper>
      )}
    </Container>
  );
}

export default MenuItemTwo;
