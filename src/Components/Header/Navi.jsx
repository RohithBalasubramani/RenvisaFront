import { Divider, Paper } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import { MiscellaneousServices, RoomServiceRounded, Store, Storefront } from '@mui/icons-material';
import {styled as muistyled} from '@mui/material/styles';


const CustomBottomNavAction = styled(BottomNavigationAction)(({  }) => ({
  '&.Mui-selected, &.Mui-selected:hover, &.Mui-selected:active': {
    color: 'white',
    backgroundColor: 'inherit',
  },
}));


const Container = styled.div`
background-color: inherit;
border-radius:20px;


`

const Navcon = styled.div`
  background-color: inherit;
`

const Navi = () => {

  const [value, setValue] = React.useState(0);
  console.log(value)




  return (
    <Container>
        
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ background: "#09193D", borderRadius:"20px", color:"#b2b2b2", "& .Mui-selected, .Mui-selected > svg": {
          color: "#ffffff"}  }} 
        
      >
        
        <BottomNavigationAction   label="Shop Now" component={Link} to="/"
        icon={<Storefront />}  sx={{color:"#b2b2b28e",borderTopLeftRadius:"20px", borderBottomLeftRadius:"20px",textAlign:"center",
                        }} />
        <Divider orientation="vertical" />
        
        
        <BottomNavigationAction label="Solutions"   component={Link}   to="/solutions"
        icon={<MiscellaneousServices />}  sx={{color:"#b2b2b28e",borderTopRightRadius:"20px", borderBottomRightRadius:"20px"}} />
        
      </BottomNavigation>
        
      
    </Container>
  )
}

export default Navi
