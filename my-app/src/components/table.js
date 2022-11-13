import React from 'react';
import {Table,  TableHead, TableBody, TableRow, TableCell} from '@mui/material';

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
         return <TableRow key={el.ID} className="key__row">
          
         <TableCell width="30%" style ={{backgroundImage: `url(${el.photo.map(a => {return a.url;})})`}}></TableCell>
         <TableCell className="key__cell"
                style={{fontWeight:'bold'}}>
            {el.location}
         </TableCell>
        <TableCell className="key__cell">
             {el.description}
        </TableCell>
        <TableCell className="key__cell colorKey__layers">
            
          </TableCell>
    </TableRow>
   })}
</TableBody>
</Table>
);
}
export default PostTable;