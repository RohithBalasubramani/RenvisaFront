import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { borderRight } from '@mui/system';

const Line = styled('div')({
  
  
  borderColor:"orange",
  borderWidth:"0px",
  borderBottom:"5px solid orange",
  width:"10vh",
  marginLeft:"3.5vh",
  paddingLeft:"10vh"
});


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  
  fontWeight:"400", fontSize:"14px",  color:"#000000", lineHeight:"180.5%", textTransform:"none", width:"90%",
  border: `0px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  Leftmargin: "10vh",
  '&:before': {
    display: 'none',
  },
}));


// font-family: 'Poppins';
// font-style: normal;
// font-weight: 600;
// font-size: 32px;
// line-height: 180.5%;
// /* identical to box height, or 58px */

// display: flex;
// align-items: center;
// letter-spacing: 0.05em;

// color: #000000;
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary 
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '32px' , color:"#000000", fontWeight:"600"}} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:"inherit"
    ,
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{fontWeight:"600", fontSize:"32px",  color:"#000000", lineHeight:"180.5%", textTransform:"Capitalize"}} >Question #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Line/>
      



      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{fontWeight:"600", fontSize:"32px",  color:"#000000", lineHeight:"180.5%", textTransform:"Capitalize"}}>Question #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Line/>



      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{fontWeight:"600", fontSize:"32px",  color:"#000000", lineHeight:"180.5%", textTransform:"Capitalize"}}>Question #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Line/>
    </div>
  );
}
