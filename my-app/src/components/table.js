import React from 'react';
import {Table,  TableHead, TableBody, TableRow, TableCell, Box, Typography, Button} from '@mui/material';


const PostTable = ({data}) => {
   const fields = data.map(el => {
      return el.fields;
   })
return (
<Table className="key">
   <TableHead> <TableRow> 
      <TableCell>Photo</TableCell>
      <TableCell>Location</TableCell>
      <TableCell>Description</TableCell>
      <TableCell>Bounty</TableCell>
      <TableCell>Contribute</TableCell>
      <TableCell>Claim</TableCell>
      </TableRow></TableHead>
<TableBody className="fullWidth">
    {fields.map(el => {
         return <TableRow key={el.ID} className="key__row" height="250px">
          
         <TableCell width="30%" padding='10px' backgroundOrigin='content-box' style ={{backgroundImage: `url(${el.photo.map(a => {return a.url;})})`,
                                                                                       backgroundSize: '85%', 
                                                                                       backgroundPosition: 'center center',
                                                                                       backgroundRepeat: 'no-repeat',
                                                                                       backgroundOrigin: 'content-box'
                                                                                         }}></TableCell>
         <TableCell className="key__cell"
                style={{fontWeight:'bold'}}>
            {el.location}
         </TableCell>
        <TableCell className="key__cell">
             {el.description}
        </TableCell>
        <TableCell className="key__cell colorKey__layers">
            <div>Bounty</div>
          </TableCell>
          <TableCell className="key__cell"> <Box><Button variant="outlined">
                            <Typography className='add'>Contribute</Typography>
                        </Button></Box></TableCell>

          <TableCell className="key__cell"> <Box margin='10px'><Button variant="outlined" 
                        sx={{
                            color:'green'

                        }}>
                            <Typography className='claim' weight={'1000px'}>Clean Up</Typography>
                        </Button></Box></TableCell>
    </TableRow>
   })}
</TableBody>
</Table>
);
}
export default PostTable;