import React from 'react'
import {Card, Box, Stack, Typography, IconButton, Divider, Chip, Switch, Container, Grid} from '@mui/material';
import './Content.css'
import trash from '../trash.jfif'

const Content = () => {
    return (
        <div className = "content-wrapper">
            <Job description={'cleanup on aisle 5'} location={'Mass Ave'}/>
            <Job description={'trash'} location={'Your Moms house'}/>
            <Job description={'no trash'} location={'River'}/>
        </div>
    )
}

const poststyle = {
    maxWidth: '50%',
    "&:hover": {
      boxShadow: 20,
      maxWidth: '60%',
      borderRadius:'0px'
    },
  };

const Job = ({description,location}) => {
    return (
        //<Container className="job" maxWidth="sm">
        <Box
  display="flex"
  justifyContent="center"
  alignItems="center"

>
            <Grid container spacing = {2} className= "post" sx={poststyle}>
                <Grid item xs={5}>
                <img src={trash} alt="Italian Trulli" width='100%'></img>
                </Grid>
            
                <Grid container item xs={5}  direction="column" justifyContent="left" alignItems="left">
                    <div id='describe'>{description}
                        <div id='location'>Location: {location}</div>
                    </div>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <IconButton className='claim'>
                            Claim
                        </IconButton>
                        <IconButton className='claim'>
                            Contribute
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
       // </Container>
    )
}

export default Content;