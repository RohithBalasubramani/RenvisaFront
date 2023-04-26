import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const DropdownButton = styled.button`
  background-color: #4CAF50;

  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const SubmenuWrapper = styled.div`
  padding: 10px;
  position: relative;
`;

const Submenu = ({ submenu }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => setShowSubmenu(!showSubmenu);

  return (
    <SubmenuWrapper>
      <div onClick={toggleSubmenu}>{submenu.label}</div>
      {showSubmenu && <Dropdown submenus={submenu.submenus} />}
    </SubmenuWrapper>
  );
};

const Dropdown = ({ submenus }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleMenu}>Dropdown Menu</DropdownButton>
      {showMenu && (
        <DropdownMenu>
          {submenus.map(submenu => (
            <Submenu key={submenu.value} submenu={submenu} />
          ))}
        </DropdownMenu>
      )}

      
    </DropdownContainer>
  );
};

export default Dropdown;
