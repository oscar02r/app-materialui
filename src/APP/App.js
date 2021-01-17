import React from "react";
import {makeStyles, CssBaseline, createMuiTheme, ThemeProvider} from '@material-ui/core'
import { PeopleOutlineOutlined } from '@material-ui/icons'
import SiteMenu from "../components/SiteMenu";
import Header from "../components/Header";
import "./App.css";
import PageHeader from "../components/PageHeader";

const theme = createMuiTheme({
    palette:{
      primary:{
        main:"#333996",
        light:"#3c44b126"

      },
      secondary:{
        main:"#f83245",
        light:"#f8324526"
      },
      background:{
        default:"#f4f5fd"
      }
    }
})

const useStyle = makeStyles({
      appMain:{
        paddingLeft:'320px',
        width:'100%'
      }
})

function App() {
  const classes = useStyle();
  return (
    
    <ThemeProvider theme={theme}>
      <SiteMenu />
      <div className={classes.appMain}>
      <Header
        tilte="Page haeder"
        subtitle="Page description"
        icon={<PeopleOutlineOutlined/>}
      />
       <PageHeader/>
      </div>
      <CssBaseline/>
    </ ThemeProvider>
  );
}

export default App;
