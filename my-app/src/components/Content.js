import React, { useEffect }  from 'react'
import {Box, Button, Stack, Typography, IconButton, Divider, Chip, Switch, Container, Grid} from '@mui/material';
import './Content.css'
import trash from '../trash.jfif'
import logo from '../logo.svg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import useData from './useData';
import PostTable from './table';


const Content = () => {
    const { data, getData } = useData();
   useEffect(() => {
      async function onPageLoad () {
          await getData();
       }
     onPageLoad();
   }, []);
    return (
        <div className = "content-wrapper">
            {data && <PostTable data={data}/>}  
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


export default Content;