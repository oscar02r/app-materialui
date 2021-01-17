import React from "react";
import { Paper, Card, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme =>({
   root:{
      backgroundColor:"#fdfdff"
   },
   pageHeader:{
      padding:theme.spacing(4),
      display:"flex",
      marginBottom:theme.spacing(2)
   },
   pageIcon:{
      display:'inline-block',
      padding:theme.spacing(2)
   }
}))

export default function PageHeader(props) {
  const classes = useStyle()

  const { title, subtitle, icon } = props;

  return (
    <Paper elevation={0} square className={classes.root}>
      <div>
        <Card> {icon}</Card>
        <div>
          <Typography variant="h1" component="div">
            {subtitle}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subtitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
