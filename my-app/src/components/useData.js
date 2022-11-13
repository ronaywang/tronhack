import { useState } from 'react';
import axios from 'axios';



export default function useData() {
    const [data, setData] = useState(null);
    const getData = async () => {
        return axios.get('/').then(res => 
            setData(res.data.records)
      )};
   
return {
   getData,
   data
  }
};

export function claimed() {
    axios.post('/', {
            "fields": {
             "claim": "yes"
         }
         }).then((resp) => {
            console.log("success!")
          })
          .catch(function (error) {
            console.log(error);
          });
};
