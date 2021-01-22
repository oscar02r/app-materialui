import React, { useState } from "react";
import { PeopleOutlineOutlined, Search } from "@material-ui/icons";
import { makeStyles, Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from "@material-ui/core";
import PageHeader from "../../components/PageHeader";
import EmployeesForm from "./EmployeesForm";
import useTable from '../../components/useTable'
import * as EmployeesServices from '../../services/employessService'
import { Controls } from "../../components/controls/Controls";
const useStyles = makeStyles( theme =>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3)
    },
    inputSearch:{
      width:"75%"
    }
}))

const headCells =[
  {id:'fullName', label:'Employee Name'},
  {id:'email', label:'Email Address (personal)' },
  {id:'mobile', label:'Movile Number'},
  {id:'department', label:'Department',disableSorting:true},
]

export default function Employess() {
  const classes = useStyles()
  const [records, setRecords] = useState(EmployeesServices.getAllEmployess())
  const [filterFn, setFilterFn] = useState({fn: items =>{ return items}})
  const {TbContainer, TbHead, TbPagination, recorsAfterPagingAndSorting} =useTable(records, headCells, filterFn)

  const handleSearch = e =>{
        let target = e.target;
        setFilterFn({
             fn: items =>{
               if (target.value == "")  
                   return items
                else 
                return items.filter(x => x.fullName.toLowerCase().includes(target.value))   
             }
        })
  }      
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form disign with validation"
        icon={<PeopleOutlineOutlined fontSize="large" />}
      />
      <Paper className={classes.pageContent} >
         {/* <EmployeesForm />  */}
         <Toolbar>
           <Controls.Input
                className={classes.inputSearch}
                label="Search Employees"

                InputProps={{ startAdornment:( <InputAdornment position="start">
                  <Search/>
                </InputAdornment>)}}
                onChange={handleSearch}
           />
         </Toolbar>
         <TbContainer>
          <TbHead/>
           <TableBody>
             {
               recorsAfterPagingAndSorting().map(item =>(
                 <TableRow key={item.id}>
                   <TableCell>{item.fullName}</TableCell>
                   <TableCell>{item.email}</TableCell>
                   <TableCell>{item.mobile}</TableCell>
                   <TableCell>{item.department}</TableCell>
                 </TableRow>
               ))
             }
           </TableBody>
         </TbContainer>
         <TbPagination/>
      </Paper>
    </>
  );
}
