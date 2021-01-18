import React from "react";
import { PeopleOutlineOutlined } from "@material-ui/icons";
import { makeStyles, Paper } from "@material-ui/core";
import PageHeader from "../../components/PageHeader";
import EmployeesForm from "./EmployeesForm";

const useStyles = makeStyles( theme =>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3)
    }
}))
export default function Employess() {
  const classes = useStyles()
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form disign with validation"
        icon={<PeopleOutlineOutlined fontSize="large" />}
      />
      <Paper className={classes.pageContent} >
        <EmployeesForm />
      </Paper>
    </>
  );
}
