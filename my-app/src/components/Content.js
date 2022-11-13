import React from 'react'
import {Card, Box, Stack, Typography, IconButton, Divider, Chip, Switch, Container} from '@mui/material';
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
        <Container className="job" maxWidth="sm">
            <Stack direction="row">
            <img src={trash} alt="Italian Trulli" width='300px'></img>
            <div id='describe'>{description}</div>

            <IconButton className='claim'>
                Claim
            </IconButton>
            </Stack>


            
            <Stack>
            <IconButton className='claim'>
                Contribute
            </IconButton>
            </Stack>
        </Container>
    )
}

export default Content;