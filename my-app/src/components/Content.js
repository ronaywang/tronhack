import React from 'react'
import {Card, Box, Button, Stack, Typography, IconButton, Divider, Chip, Switch, Container, Grid} from '@mui/material';
import './Content.css'
import trash from '../trash.jfif'
import logo from '../logo.svg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const Content = () => {
    return (
        <div className = "content-wrapper">
            <Job description={'cleanup on aisle 5'} location={'Intersection of mass ave and beacon st'} cleanImg={trash} bounty={'100'}/>
            <Job description={'trash'} location={'Your Moms house'} cleanImg={logo} bounty={'100'}/>
            <Job description={'no trash'} location={'River'} cleanImg={trash} bounty={'100'}/>
        </div>
    )
}

const poststyle = {
    maxWidth: '50%',
    borderRadius: '15px',
    boxShadow:4,
    "&:hover": {
      boxShadow: 20,
      maxWidth: '60%',
      borderRadius:'45px'
    },
  };

  const buttons = {
    width: '400px',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 0
  };

  const clickbutton = {
    borderRadius:'100px'
  };

  const imgContainer = {
    p:2
  };

const Job = ({description,location,cleanImg,bounty}) => {
    return (
        //<Container className="job" maxWidth="sm">
        <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
>
            <Grid container spacing = {2} className= "post" sx={poststyle}>
                <Grid item xs={5} sx={imgContainer}>
                    <img src={cleanImg} alt="Italian Trulli" width='100%' borderradius='15px'></img>
                </Grid>
            
                <Grid container item xs={7}  direction="column" justifyContent="left" alignItems="left">
                    <div className='location'><LocationOnIcon fontSize='10px'/> {location}</div>
                    <div className='describe'> <PriorityHighIcon/>{description}</div>
                    <Stack sx={{buttons}}>
                    <Grid item container direction="column" className='bounty'>Current bounty: {bounty}</Grid>
                    <Grid item container direction="row" justifyContent="center" alignItems="center" sx={{buttons}}>
                        
                        <Box margin='10px'><Button variant="outlined" 
                        sx={{
                            color:'green'

                        }}>
                            <Typography className='claim' weight={'1000px'}>Clean Up</Typography>
                        </Button></Box>
                        <Box><Button variant="outlined" sx={{clickbutton}}>
                            <Typography className='add'>Contribute</Typography>
                        </Button></Box>
                    </Grid>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
       // </Container>
    )
}

export default Content;