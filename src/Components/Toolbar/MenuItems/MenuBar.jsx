import React from 'react'
import styled from 'styled-components'
import { menuItems } from '../../../data'
  
 
 


const Nav = styled.a`

    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;


`

const Wrapper = styled.div`
    
    background-color: #00ff04;
    width: 10vh;
    height: 20vh;
    position: absolute;
    opacity: 0;
    top: 2px;

`

const Button = styled.button`
  
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;


`

const Navbar = styled.div`
background-color: #c50000;
`

const SubnavCont = styled.div`
  display: none;
  position: absolute;
  left: 0;
  background-color: red;
  width: 100%;
  z-index: 1;

`


// const Container = styled.div`
// background-color: #c50000;
// `


const SubNavLinks = styled.a`
  float: left;
  color: white;
  text-decoration: none;
  &:hover ${SubnavCont} {
    float: left;
    color: white;
    text-decoration: none;
  }
`

const SubNav = styled.div`
  float: left;
  overflow: hidden;
  &:hover ${SubnavCont} {
    background-color: red;
  }
  
`

const NavBar = styled.div`
  overflow: hidden;
  background-color: #333;
  &:hover ${Nav} {
    background-color: red;
  }
  &:hover ${SubNav} {
    background-color: red;
  }
  &:hover ${Button} {
    background-color: red;
  }
`





const MenuBar = () => {
  return (
    <NavBar>     
        <Nav>
            <SubNav>
                <Button>
                    About
                </Button>
                <SubnavCont>
                    <SubNavLinks>Company</SubNavLinks>
                    <SubNavLinks>Teams</SubNavLinks>
                    <SubNavLinks>Careers</SubNavLinks>

                </SubnavCont>
            </SubNav>
        </Nav>      
    </NavBar>
  )
}

export default MenuBar


{/* <div class="navbar">
  <a href="#home">Home</a>
  <div class="subnav">
    <button class="subnavbtn">About <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#company">Company</a>
      <a href="#team">Team</a>
      <a href="#careers">Careers</a>
    </div>
  </div>
  <div class="subnav">
    <button class="subnavbtn">Services <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#bring">Bring</a>
      <a href="#deliver">Deliver</a>
      <a href="#package">Package</a>
      <a href="#express">Express</a>
    </div>
  </div>
  <div class="subnav">
    <button class="subnavbtn">Partners <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#link1">Link 1</a>
      <a href="#link2">Link 2</a>
      <a href="#link3">Link 3</a>
      <a href="#link4">Link 4</a>
    </div>
  </div>
  <a href="#contact">Contact</a>
</div> */}