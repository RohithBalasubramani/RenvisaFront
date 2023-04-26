import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { HelpCenter, ManageAccounts, RequestQuote, SupportAgent, TrackChanges } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const actions = [
  { icon: <TrackChanges />, name: 'Track Order' },
  { icon: <SupportAgent />, name: 'Customer Care' },
  { icon: <RequestQuote />, name: 'Bulk Quotation', path:"/businesslogin" },

];

export default function BasicSpeedDial() {
  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<ManageAccounts  />}
        FabProps={{
          sx: {
            bgcolor: '#FF9471',
            color:"#09193D",
            '&:hover': {
              bgcolor: '#e47d5b',
              color:"#09193D",
            }
          }
        }}
      >
        {actions.map((action) => (
          
          <SpeedDialAction
          component={Link} 
          to={action.path}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}

            FabProps={{
              sx: {
                bgcolor: '#FF9471',
                color:"#09193D",
                '&:hover': {
                  bgcolor: '#FF9471',
                  color:"#ffffff",
                }
              }
            }}


          />
        ))}
      </SpeedDial>
    </>
  );
}
