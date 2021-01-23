import React, { useState } from "react";
import { Add, Close, PeopleOutlineOutlined, Search } from "@material-ui/icons";
import {
  makeStyles,
  Paper,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";
import PageHeader from "../../components/PageHeader";
import EmployeesForm from "./EmployeesForm";
import useTable from "../../components/useTable";
import * as EmployeesServices from "../../services/employessService";
import { Controls } from "../../components/controls/Controls";
import Popup from "../../components/Popup";
import Notification from '../../components/Notification'

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  inputSearch: {
    width: "75%",
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
}));

const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Email Address (personal)" },
  { id: "mobile", label: "Movile Number" },
  { id: "department", label: "Department" },
  { id: "actions", label: "Actions", disableSorting: true },
];

export default function Employess() {
  const classes = useStyles();
  const [records, setRecords] = useState(EmployeesServices.getAllEmployess());
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({ isOpen:false, message:'', type:''})

  const {
    TbContainer,
    TbHead,
    TbPagination,
    recorsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const addOrEdit = (employee, resetForm) => {
    if (employee.id === 0) EmployeesServices.insertEmployee(employee);
    else
     EmployeesServices.updateEmployee(employee)
     setRecordForEdit(null)
     resetForm();
     setOpenPopup(false);
     setRecords(EmployeesServices.getAllEmployess());
    setNotify({
       isOpen:true,
        message:'Submitted Successfully.',
        type:'success'
     })
  };
  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form disign with validation"
        icon={<PeopleOutlineOutlined fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            className={classes.inputSearch}
            label="Search Employees"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
          <Controls.Button
            text="Add New"
            variant="outlined"
            startIcon={<Add />}
            className={classes.newButton}
            onClick={() => {
              setOpenPopup(true);
            }}
          />
        </Toolbar>
        <TbContainer>
          <TbHead />
          <TableBody>
            {recorsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>
                  <Controls.ActionButton
                    color="primary"
                    onClick={() => {
                      openInPopup(item);
                    }}
                  >
                    <EditOutlined fontSize="small" />
                  </Controls.ActionButton>
                  <Controls.ActionButton color="secondary">
                    <Close fontSize="small" />
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TbContainer>
        <TbPagination />
      </Paper>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Employee Form"
      >
        <EmployeesForm addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
      </Popup>
      <Notification
        notify={notify}
        setNotify={setNotify}
      />
    </>
  );
}
