import React from 'react';
import {Table,  TableHead, TableBody, TableRow, TableCell, Box, Typography, Button} from '@mui/material';

import claimed from './useData';
import axios from 'axios';


const PostTable = ({data}) => {
   const fields = data.map(el => {
      return el.fields;
   })

   const claimed = async (id) => {
      const data = {
             "fields": {
               "claimed": "yes"
             }
           
       }
      axios.patch('/' +id , data).then((resp) => {
              console.log("success!")
            })
            .catch(function (error) {
              console.log(error);
            });
  };

  const contributed = async (id, amount) => {
   const data = {
          "fields": {
            "bounty": amount
          }
        
    }
   axios.patch('/' +id , data).then((resp) => {
           console.log("success!")
         })
         .catch(function (error) {
           console.log(error);
         });
};
  
   
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
    {data.map(el => {
      if (el.fields.claimed === "no")
         return <TableRow key={el.fields.ID} className="key__row">
          
         <TableCell width="30%" style ={{backgroundImage: `url(${el.fields.photo.map(a => {return a.url;})})`}}></TableCell>
         <TableCell className="key__cell"
                style={{fontWeight:'bold'}}>
            {el.fields.location}
         </TableCell>
        <TableCell className="key__cell">
             {el.fields.description}
        </TableCell>
        <TableCell className="key__cell colorKey__layers">
            {el.fields.bounty}
          </TableCell>
          <TableCell className="key__cell"> <Box><Button variant="outlined" onClick={contributed.bind(this, el.id, el.fields.bounty+1)}>
                            <Typography className='add'>Contribute $1</Typography>
                        </Button></Box></TableCell>

          <TableCell className="key__cell"> <Box margin='10px'>
                     <Button id = "btn" variant="outlined" 
                        sx={{
                            color:'green'

                        }} onClick={claimed.bind(this, el.id)}>
                            <Typography className='claim' weight={'1000px'}>Claim</Typography>
                        </Button></Box></TableCell>
    </TableRow>
   })}
</TableBody>
</Table>
);
}
export default PostTable;