import React from 'react'
import {Card, Box, Stack, Typography, IconButton, Divider, Chip, Switch, Container, Grid} from '@mui/material';
import './Content.css'
import trash from '../trash.jfif'

const Content = () => {
    return (
        <div className = "content-wrapper">
            <Job description={'cleanup on aisle 5'}/>
            <Job description={'trash'}/>
            <Job description={'no trash'}/>
        </div>
    )
}

const Job = ({description}) => {
    return (
        //<Container className="job" maxWidth="sm">
        <Box
  display="flex"
  justifyContent="center"
  alignItems="center"

>
            <Grid container spacing = {2} className= "post">
            <Grid item xs={5}>
            <img src={trash} alt="Italian Trulli" width='100%'></img>
            </Grid>
            
            <Grid container item xs={5}  direction="column" justifyContent="center" alignItems="center">
            <div id='describe'>{description}</div>
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