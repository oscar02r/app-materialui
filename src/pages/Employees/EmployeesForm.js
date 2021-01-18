import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useForm, Form } from "../../components/useForm";
import { Controls } from "../../components/controls/Controls";
import * as employeeServices from "../../services/employessService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployeesForm() {
  const { values, handleInputChange } = useForm(initialFValues);

  const {
    id,
    fullName,
    email,
    mobile,
    city,
    gender,
    departmentId,
    hireDate,
    isPermanent,
  } = values;

  useEffect(() => {}, []);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Full Name"
            value={fullName}
            onChange={handleInputChange}
            name="fullName"
          />
          <Controls.Input
            label="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Mobile"
            name="mobile"
            value={mobile}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="City"
            name="city"
            value={city}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid xs={6} item>
          <Controls.RadioGroup
            row
            label="Gender"
            name="gender"
            value={gender}
            items={genderItems}
            onChange={handleInputChange}
          />
          <Controls.Select
            name="departmentId"
            label="Department"
            onChange={handleInputChange}
            options={employeeServices.getDepartmentCollection()}
          />
          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={hireDate}
            onChange={handleInputChange}
          />
          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={hireDate}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Form>
  );
}
