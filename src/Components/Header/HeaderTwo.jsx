import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import styled from "styled-components";
import {
  Backdrop,
  Badge,
  Checkbox,
  Divider,
  ListItemIcon,
  Paper,
  TextField,
} from "@mui/material";
import LoginHooks from "./Loginhooks";
import {
  Close,
  Favorite,
  LocalMall,
  Logout,
  PersonAdd,
  PlayArrow,
  Settings,
  ShoppingCart,
} from "@mui/icons-material";
import Login from "./Login";
import Signup from "./SIgnup";
import Logo from "./Logo";
import { styled as sty } from "@mui/material/styles";
import HeaderCart from "./HeaderCart";
import { Link } from "react-router-dom";
import SearchAppBar from "./SearchAppBar";
import { useEffect } from "react";
import MenuDiv from "../Toolbar/MenuExample/MenuDiv";
import { ReactComponent as RenLogo } from "../../Assets/RenLogo.svg";

const HeaderBar = styled.div`
  background: rgb(255, 255, 255, ${(props) => props.bg});
  position: fixed;
  /* border-bottom: ${(props) => props.bor} solid #4f4f4f; */
  width: 100vw;
  padding-right: 1.5vh;
  padding-top: 0.5;
  padding-bottom: 0.5vh;
  box-shadow: 0px 15px 10px -15px #111;

  font-family: "Lexend";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  /* text-transform: uppercase; */
  color: #ffffff;
`;

const MenuCont = styled.div`
  color: ${(props) => props.col};
  margin-left: 3vh;
`;

const SignCont = styled.div`
  margin-left: auto;
  margin-right: 0;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
`;

const Wrapper2 = styled.div`
  display: block;
  align-items: center;
  margin-right: 0%;
  margin-left: 96%;
`;
const StyledBadge = sty(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -1,

    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: "#00337C",
    color: "#ffffff",
  },
}));

const Dropbtn = styled.div`
  color: white;
  border: none;
`;

const Dropdowncontent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 65vh;
  max-height: 80vh;
  overflow-y: scroll;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  &:hover {
    background-color: #ddd;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 0;
  direction: rtl;
  width: auto;
  &:hover ${Dropdowncontent} {
    display: block;
  }
`;

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

const Dropdownontenta = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #ddd;
  }
`;

const Title = styled.div`
  padding-left: 1vh;
  display: block;
  text-align: left;
  color: ${(props) => props.col};
`;
const TitHead = styled.div`
  color: #000;
  font-family: Lexend;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.48px;
`;

const OrDisp = styled.div`
  margin-top: 1vh;
  font-weight: 300;
  display: flex;
  text-transform: capitalize;
`;
const OrHov = styled.div`
  margin-left: 1vh;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    color: #0088ff;
  }
`;

const PaperSty = {
  width: "35%",
  height: "90%",
  alignItems: "center",
  padding: "5vh",
  paddingTop: "2vh",
  textAlign: "center",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "0.5em",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#ff8e038d",
    outline: "1px solid slategrey",
  },
};

const settings = [
  { label: "Profile" },
  { label: "Account" },
  { label: "Dashboard" },
  { label: "Logout" },
];

function HeaderTwo() {
  //Background colour

  const cart = useSelector((state) => state.cartreducer.carts);
  let cartlen = cart.length;

  const [anchorEl, setAnchorEl] = useState(null);
  const opencart = Boolean(anchorEl);
  const handleClickcart = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosecart = () => {
    setAnchorEl(null);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const [openSignup, setOpenSignup] = React.useState(false);
  const handleCloseSignup = () => {
    setOpenSignup(false);
    setOpen(false);
  };
  const handleCloseOnlySignup = () => {
    setOpenSignup(false);
  };
  const handleToggleSignup = () => {
    setOpenSignup(!openSignup);
  };

  const [value, setValue] = React.useState(0);
  console.log(value);

  return (
    <HeaderBar bg={1} bor={"2px"}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />

          <StyledLink to="/">
            <Title col={"#333333"}>
              <TitHead>Renvisa </TitHead>
            </Title>
          </StyledLink>

          {/* Signin Container */}
          <SignCont>
            <SearchAppBar
              SearchBgCol={"#F2F2F2"}
              SearchBorCol={"#E0E0E0"}
              SearchCol={"#4F4F4F"}
            />

            <MenuCont col={"#333333"}>
              <MenuDiv colo={"#E0E0E0"} arccol={"#F0F0F0"} />
            </MenuCont>

            {/* DropDown */}

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, paddingLeft: "2vh", paddingRight: "2vh" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_647_6135)">
                      <path
                        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                        stroke={"#333333"}
                        stroke-width="2.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
                        stroke={"#333333"}
                        stroke-width="2.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_647_6135">
                        <rect width="24" height="24" fill={"#333333"} />
                      </clipPath>
                    </defs>
                  </svg>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px", width: "500vh" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                onClick={handleCloseUserMenu}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 30,
                      height: 30,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
              >
                <MenuItem onClick={handleToggle}>
                  <Avatar /> Login
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <LocalMall />
                  </ListItemIcon>{" "}
                  Orders
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Favorite />
                  </ListItemIcon>
                  Settings
                </MenuItem>

                <Divider />

                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Box>

            {/* CartDiv */}
            <Dropdown>
              <Dropbtn>
                <Link to="/cart">
                  <IconButton aria-label={100} sx={{ color: "black" }}>
                    <StyledBadge
                      badgeContent={cartlen}
                      id="basic-button"
                      aria-controls={opencart ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={opencart ? "true" : undefined}
                      onClick={HeaderCart}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 21C7.10457 21 8 20.1046 8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21Z"
                          stroke={"#333333"}
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21Z"
                          stroke={"#333333"}
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 17H6V3H4"
                          stroke={"#333333"}
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6 5L20 6L19 13H6"
                          stroke={"#333333"}
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </StyledBadge>
                  </IconButton>
                </Link>
              </Dropbtn>
              <Dropdowncontent>
                <Dropdownontenta>
                  <HeaderCart />
                </Dropdownontenta>
              </Dropdowncontent>
            </Dropdown>
          </SignCont>

          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <Paper
              sx={{
                width: "35%",
                height: "90%",
                alignItems: "center",
                padding: "5vh",
                paddingTop: "2vh",
                textAlign: "center",
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  width: "0.5em",
                },
                "&::-webkit-scrollbar-track": {
                  boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                  webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#ff8e038d",
                  outline: "1px solid slategrey",
                },
              }}
            >
              <Wrapper2>
                <IconButton
                  onClick={handleClose}
                  sx={{
                    marginRight: "0",
                    marginLeft: "auto",
                    transition: "transform 0.5s",
                    "&:hover": {
                      transform: "rotate(90deg)",
                      transition: "0.5s",
                    },
                  }}
                >
                  <Close />
                </IconButton>
              </Wrapper2>

              <Login />

              <Divider onClick={handleToggleSignup}>
                <OrDisp>
                  or <OrHov> Signup</OrHov>
                </OrDisp>
              </Divider>

              <Backdrop
                sx={{
                  color: "#ffffff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={openSignup}
                invisible={true}
              >
                <Paper style={PaperSty}>
                  <Wrapper2>
                    <IconButton
                      onClick={handleCloseSignup}
                      sx={{
                        marginRight: "0",
                        marginLeft: "auto",
                        transition: "transform 0.5s",
                        "&:hover": {
                          transform: "rotate(90deg)",
                          transition: "0.5s",
                        },
                      }}
                    >
                      <Close />
                    </IconButton>
                  </Wrapper2>
                  <Signup />

                  <Divider onClick={handleCloseOnlySignup}>
                    <OrDisp>
                      Already have an account?<OrHov> Login</OrHov>{" "}
                    </OrDisp>
                  </Divider>
                </Paper>
              </Backdrop>
            </Paper>
          </Backdrop>
        </Toolbar>
      </Container>
    </HeaderBar>
  );
}
export default HeaderTwo;
