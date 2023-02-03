import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Ab from './Ab';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
export default function SimpleAccordion(props) {
  
  return (
    <div className='item'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          
         
          
          <Grid container spacing={3}>
  <Grid item xs="auto" >
    <div className='name'>{props.data.name}</div>
 
  
  </Grid>
  <Grid item xs={9}>
  <table className='tab'>
  <tr>
    <th>Name</th>
    <th>Website</th>
    <th>Phone</th>
  </tr>
  <tr>
    <td>{props.data.name}</td>
    <td>{props.data.website}</td>
    <td>{props.data.phone}</td>
  </tr>
  
</table>
  </Grid>
  {/* <Grid item xs>
  <Typography> {props.data.website}</Typography>
  </Grid> */}
</Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container spacing={3}>
  <Grid item xs="6">
  <Card><h3>company</h3>
    <p>{props.data.company.name}
  </p>
  <p>{props.data.company.catchPhrase}</p>
  
  <p>{props.data.company.bs}
  </p>
</Card>
  </Grid>
  <Grid item xs={6}>
  <Card><h3>Address</h3>
    <p>{props.data.address.street}
  {props.data.address.suite}</p>
  {props.data.address.city}
  <p>{props.data.address.zipcode}
  </p>
</Card>
  </Grid>
  
</Grid>
<Grid item xs>
  <Card style={{width:'100%'}}><h5>Details</h5>
  <table className='tab1'>
  <tr>
  <th>ID</th>
    <th>Name</th>
    <th>Website</th>
    <th>Username</th>
    <th>Phone</th>
    <th>Email</th>

  </tr>
  <tr>
  <td>{props.data.id}</td>
    <td>{props.data.name}</td>
    <td>{props.data.website}</td>
    <td>{props.data.username}</td>
    <td>{props.data.phone}</td>
    <td>{props.data.email}</td>
   
  </tr>
  
</table>
</Card>
  </Grid>

          </Typography>
        </AccordionDetails>
      </Accordion>
     
     
    </div>
  );
}