import React, { useState } from 'react'
// import "./menusty.css"

import styled from 'styled-components'
  
 
 
const Container = styled.li`
background-color: #c50000;
display: flex;
cursor: pointer;
`

const Names = styled.a`
`

const Wrapper = styled.div`
position: absolute;
top: 2.5vh;
left: 10vh;
background-color: #00e92b;

`

function MenuItem({ menuItem }) {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  
    const toggleSubMenu = () => {
      setIsSubMenuOpen(!isSubMenuOpen);
    };
  
    return (
      <Container>
        <Names href={menuItem.url} onClick={menuItem.submenu && toggleSubMenu}>
          {menuItem.name}
        </Names>
        {menuItem.submenu && isSubMenuOpen && (
          <Wrapper>
            {menuItem.submenu.map((subMenuItem) => (
              <MenuItem key={subMenuItem.name} menuItem={subMenuItem} />
            ))}
          </Wrapper>
        )}
      </Container>
    );
  }
  
  
  

export default MenuItem

