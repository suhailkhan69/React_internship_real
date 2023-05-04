import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form'
import axios from 'axios';

const AddEmp = () => {
  const {register,handleSubmit}= useForm();
   const getVal = (val)=>{
       alert('submitted')
       axios.post('https://reqres.in/api/asers',val).then((response)=>{
        alert(`The data is posted with id ${response.data.id}`)
       })
  }
  return (
    <div>
      <Stack
      component="form"
      sx={{
        width: '25ch',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:'200px'
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
       name='empname'
       {...register('empname')}
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder='Employee Name'
        variant="filled"
        size='small'
      />
      <TextField
        name='emploc'
        {...register('emploc')}
        hiddenLabel
        id="filled-hidden-label-normal"
        placeholder='Employee Location'
        variant="filled"
        size='small'
      />
      <TextField
       name='empdes'
       {...register('empdes')}
        hiddenLabel
        id="filled-hidden-label-normal"
        placeholder='Employee Designation'
        variant="filled"
        size='small'
      />
      <Button onClick={handleSubmit(getVal)} variant='contained' color='success' >Submit</Button>
    </Stack>
    </div>
  )
}

export default AddEmp
