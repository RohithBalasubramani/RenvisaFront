import React from 'react';

import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Button from '@mui/material/Button';



const DropdownMenu = ({ label, options }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    handleClose();
  };

  const renderMenuItems = (options) => {
    return options.map((option, index) => (
      <MenuItem key={option.label} onClick={(event) => handleMenuItemClick(event, index)}>{option.label}</MenuItem>
    ));
  }

  const renderSubMenu = (option) => {
    return (
      <MenuList
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {renderMenuItems(option.subMenu)}
      </MenuList>
    );
  }

  return (
    <div>
      <Button
        
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {options[selectedIndex].label}
      </Button>
      {options[selectedIndex].subMenu && renderSubMenu(options[selectedIndex])}
    </div>
  );
};

export default DropdownMenu;
