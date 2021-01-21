import React, { useState } from "react";
import { PeopleOutlineOutlined } from "@material-ui/icons";
import { makeStyles, Paper, TableBody, TableRow, TableCell } from "@material-ui/core";
import PageHeader from "../../components/PageHeader";
import EmployeesForm from "./EmployeesForm";
import useTable from '../../components/useTable'
import * as EmployeesServices from '../../services/employessService'
const useStyles = makeStyles( theme =>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3)
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

  const {TbContainer, TbHead, TbPagination, recorsAfterPagingAndSorting} =useTable(records, headCells)
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form disign with validation"
        icon={<PeopleOutlineOutlined fontSize="large" />}
      />
      <Paper className={classes.pageContent} >
         {/* <EmployeesForm />  */}
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
