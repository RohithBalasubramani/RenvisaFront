import { ExpandMore, KeyboardArrowRight } from "@mui/icons-material";
import React, { useState } from "react";
// import "./menusty.css"

import styled from "styled-components";
import StyledLink from "../../StyLink";
import { ReactComponent as DDT } from "../../../Assets/Header/DDArc.svg";

const Container = styled.div`
  /* display: flex; */
  cursor: pointer;
`;

const Names = styled.a`
  text-decoration: none;
  font-family: Lexend;
  font-size: 16px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0.15000000596046448px;
  padding-left: 4vh;
  align-items: center;
  display: flex;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 9vh;
  width: 40vh;
  height: 45vh;
  margin-left: -4%;
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
  width: 20vh;
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

const WrapperTwo = styled.div`
  display: block;
  flex: 1;
  background-color: #ffffff;
  height: 100%;
  padding-top: 5vh;
`;

const WrapperTwoItems = styled.div`
  font-family: Lexend;
  width: 20vh;
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
}) {
  const [selectedCat, setSelectedCat] = useState(null);

  function handleCatClick(menuitem) {
    setSelectedCat(menuitem.name);
  }

  const filteredSub = sub.filter((product) => product.brand === selectedCat);

  const [isSubMenuTwoOpen, setIsSubMenuTwoOpen] = useState(false);

  const toggleSubMenuTwo = () => {
    setIsSubMenuTwoOpen(!isSubMenuTwoOpen);
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
                  key={menuItem.id}
                  onClick={() => handleCatClick(menuItem)}
                >
                  <div>{menuItem.name}</div>
                  <KeyboardArrowRight
                    sx={{ marginRight: "2px", marginLeft: "auto" }}
                  />
                </NamesTwo>
              ))}
            </WrapperOne>

            <WrapperTwo>
              {filteredSub.map((subMenuItem) => (
                <WrapperTwoItems key={subMenuItem.id}>
                  {subMenuItem.name}
                </WrapperTwoItems>
              ))}
            </WrapperTwo>
          </WrapperCont>
        </Wrapper>
      )}
    </Container>
  );
}

export default MenuItemTwo;
