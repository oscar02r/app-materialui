import React from 'react';
import { Button, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme =>({
            root:{
                 minWidth:0,
                 margin:theme.spacing(0)
            },
            secondary:{
                backgroundColor:theme.palette.secondary.light
            },
            primary:{
                backgroundColor: theme.palette.primary.light,
                '& MuiButton-label':{
                    color:theme.palette.primary.main
                }
            }
}))

export default function ActionButton(props) {
  const classes = useStyles()
  const { color, children,  onClick} = props
  return (
    <Button
     className={`${classes.root} ${classses[color]}`}
      onClick={onclick}
    >
     {children}
    </Button>
  );
}
