import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
  makeStyles
} from "@material-ui/core";
import { NotificationsNone, ChatOutlined, PowerSettingsNew,   Search as SearchIcon } from "@material-ui/icons";

const useStyle = makeStyles (theme => ( {
  root:{
    backgroundColor:'#fff',
    // transform:'translateZ(0)'
  },
  searchInput:{
    opacity:'0.6',
    padding:`0px ${theme.spacing(1)}px`,
    fontSize:'0.8rem',
    '&:hover':{
      backgroundColor:'#f2f2f2'
    },
    '& .MuiSvgIcon-root':{
         marginRight: theme.spacing(1)
    }
  },
}));

export default function Header() {
  const classes= useStyle()
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item style={{ border: " 1px solid #fff" }}>
            <InputBase className={classes.searchInput}
              placeholder="Search topic"
              startAdornment={<SearchIcon fontSize="small" />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item style={{ border: " 1px solid #fff" }}>
            <IconButton >
              <Badge badgeContent={4} color="secondary">
                <NotificationsNone fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatOutlined fontSize="small"/>
              </Badge>
            </IconButton>
            <IconButton >
              <PowerSettingsNew fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
