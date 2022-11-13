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
      window.location.reload(true);
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
         window.location.reload(true);
};
  
   
return (
<Table className="key">
   <TableHead className="table-head"> <TableRow> 
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
         return <TableRow key={el.fields.ID} className="key__row" height="250px">
          
          <TableCell width="30%" padding='10px' backgroundOrigin='content-box' style ={{backgroundImage: `url(${el.fields.photo.map(a => {return a.url;})})`,
                                                                                       backgroundSize: '85%', 
                                                                                       backgroundPosition: 'center center',
                                                                                       backgroundRepeat: 'no-repeat',
                                                                                       backgroundOrigin: 'content-box'
                                                                                         }}></TableCell>
         <TableCell className="key__cell"
                style={{fontWeight:'bold'}}>
            {el.fields.location}
         </TableCell>
        <TableCell className="key__cell">
             {el.fields.description}
        </TableCell>
        <TableCell className="key__cell colorKey__layers">
            ${el.fields.bounty}
          </TableCell>
          <TableCell className="key__cell"> <Box><Button style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        fontSize: "18px"
    }}
          variant="contained" onClick={contributed.bind(this, el.id, el.fields.bounty+1)}>
                            <Typography className='add' variant="subtitle1">Contribute $1</Typography>
                        </Button></Box></TableCell>

          <TableCell className="key__cell"> <Box margin='10px'>
                     <Button style={{
        borderRadius: 35,
        fontSize: "18px"
    }}variant="contained"
                        sx={{
                            color:'white'

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