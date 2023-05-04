import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Style.css';
import axios from 'axios';

const ViewEmp = () => {
   var [value,setValue]=useState([])
   useEffect(()=>{
    axios.get('https://dummyjson.com/users').then((response)=>{ 
      console.log(response.data.users)
       setValue(value=response.data.users);
      })
   },[])
  return (
    <div className='div'>
      <Table className='Tabal'>
        <TableHead>
          <TableRow className='row1'>
            <TableCell className='cell1'>FirstName</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {value.map((data,ind)=>{
            return(  
            <TableRow>
              <TableCell>{data.firstName}</TableCell>
              <TableCell>{data.lastName}</TableCell>
              <TableCell>{data.age}</TableCell>
            </TableRow>
            )
          })}
        </TableBody>
      </Table>
      
    </div>
  )
}

export default ViewEmp
