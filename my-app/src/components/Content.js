import React from 'react'
import {Card, Box, Stack, Typography, IconButton, Divider, Chip, Switch, Container} from '@mui/material';
import './Content.css'

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
        <Container className="job">
            <Box sx={{ p: 2, display: 'flex' }} z-index={2}>
                <Stack spacing={0.5}>
                <Typography fontWeight={700}>{description}</Typography>
                <Typography variant="body2" color="text.secondary">
                </Typography>
                </Stack>
                <IconButton>
                    Claim
                </IconButton>
            </Box>
            <Divider />
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
            >
                <Chip>Active account</Chip>
                <Switch />
            </Stack>
        </Container>
    )
}

export default Content;