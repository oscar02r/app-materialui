import React from 'react';
import { TextField } from '@material-ui/core';

export  function Input(props) {

  const {name, label, value, error=null, onChange, ...other} = props;
  return (
    <TextField
    label={label}
    name={name}
    value={value}
    variant="outlined"
    onChange={onChange}
    {...other}
    {...(error && {error:true, helperText:error})}
  />
   
   
  );
}
