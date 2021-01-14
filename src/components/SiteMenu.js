import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core'
const useStyles = makeStyles( {
      siteMenu:{
          display:'flex',
          flexDirection: 'column',
          position: 'absolute',
          left:'0px',
          width:'320px',
          height:'100%',
          backgroundColor:'#253053'
      }
})

export default function  () {
   const classes = useStyles()
  return (
    <div className={classes.siteMenu}>
      
    </div>
  );
}
