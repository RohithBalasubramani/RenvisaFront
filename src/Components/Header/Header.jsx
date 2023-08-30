import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { logout } from "../../Redux/actions/action";

const HeaderBar = styled.div`
  background: rgb(255, 255, 255, ${(props) => props.bg});
  position: static;
  /* border-bottom: ${(props) => props.bor} solid #4f4f4f; */
  box-shadow: rgba(0, 0, 0, ${(props) => props.bor}) 0px 1px 4px;
  width: 100vw;
  padding-right: 1.5vh;
  padding-left: 1.5vh;
  padding-top: 1vh;
  padding-bottom: 1vh;

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
  padding-right: 3vh;
`;

const SignCont = styled.div`
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
  background-color: #ffffff;
  min-width: 65vh;
  max-height: 80vh;
  overflow-y: scroll;
  border-radius: 8px;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  &:hover {
    /* background-color: #ddd; */
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
  display: flex;
  vertical-align: middle;
  padding-right: 3vh;
  text-align: left;
  color: ${(props) => props.col};
`;
const TitHead = styled.div`
  color: inherit;
  font-family: Urbanist;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.48px;
  margin-top: 5px;
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

function Header() {
  //Background colour
  const [backgroundColor, setBackgroundColor] = useState(0);
  const [MenuColor, setMenuColor] = useState("#ffffff");
  const [SearchColor, setSearchColor] = useState("#000000");
  const [SearchBgColor, setSearchBgColor] = useState("#ffffff");
  const [SearchBorColor, setSearchBorColor] = useState("#ffffff");
  const [BorderBottom, setBorderBottom] = useState(0);
  const [ArcCol, setArcCol] = useState("#ffffff");
  // const [authStatus, setAuthStatus] = useState(false);

  const [Blue, setBlue] = useState("#ffffff");
  const [Yellow, setYellow] = useState("#ffffff");

  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const backgroundColorValue = Math.min(scrollPosition / 100, 1); // divide by 100 to adjust the speed of the color change
    setBackgroundColor(backgroundColorValue); // set the background color using rgba to set the alpha channel to the value of backgroundColorValue
    console.log(backgroundColorValue);
    if (backgroundColorValue > 0.75) {
      setMenuColor("#333333");
      setSearchBgColor("#F2F2F2");
      setSearchBorColor("#E0E0E0");
      setSearchColor("#4F4F4F");
      setBorderBottom(0.24);
      setBlue("#00337C");
      setYellow("#FFAF19");
      setArcCol("#828282");
    } else {
      setMenuColor("#ffffff");
      setSearchBgColor("#ffffff");
      setSearchBorColor("#ffffff");
      setSearchColor("#000000");
      setBorderBottom("0px");
      setBlue("#ffffff");
      setYellow("#ffffff");
      setArcCol("#ffffff");
    }
  };

  //Background Colour

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

  const handleLogout = () => {
    dispatch(logout());
  };

  const [value, setValue] = React.useState(0);
  console.log(value);

  const authStatus = useSelector((state) => state.authreducer.isAuthenticated);

  console.log(authStatus);

  return (
    <HeaderBar bg={backgroundColor} bor={BorderBottom}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StyledLink to="/">
            <Title col={MenuColor}>
              <Logo />
              <TitHead>Renvisa</TitHead>
            </Title>
          </StyledLink>

          {/* Signin Container */}
          <SignCont>
            <SearchAppBar
              SearchBgCol={SearchBgColor}
              SearchBorCol={SearchBorColor}
              SearchCol={SearchColor}
            />

            <MenuCont col={MenuColor}>
              <MenuDiv colo={SearchBorColor} arccol={ArcCol} />
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
                        stroke={MenuColor}
                        stroke-width="2.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
                        stroke={MenuColor}
                        stroke-width="2.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_647_6135">
                        <rect width="24" height="24" fill={MenuColor} />
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
                {authStatus ? (
                  <>
                    <MenuItem component={Link} to="/orders">
                      <ListItemIcon>
                        <LocalMall />
                      </ListItemIcon>{" "}
                      Orders
                    </MenuItem>

                    <Divider />

                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem onClick={handleToggle}>
                    <Avatar /> Login
                  </MenuItem>
                )}
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
                          stroke={MenuColor}
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21Z"
                          stroke={MenuColor}
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 17H6V3H4"
                          stroke={MenuColor}
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6 5L20 6L19 13H6"
                          stroke={MenuColor}
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

              <Login handleClose={handleClose} />

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
export default Header;
