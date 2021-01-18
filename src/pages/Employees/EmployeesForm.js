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
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is requied.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+../.test(fieldValues.email) ? "" : "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers  required.";
    if ("departmentId" in fieldValues)
      temp.departmentId =
      fieldValues.departmentId.length != 0 ? "" : "This field is requied.";
    setErrors({ ...temp });
    if (fieldValues == values) return Object.values(temp).every((x) => 
  x == "");
  };
  const {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  } = useForm(initialFValues, true, validate);
  
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      window.alert("Hello word");
    }
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Full Name"
            value={fullName}
            onChange={handleInputChange}
            name="fullName"
            error={errors.fullName}
          />
          <Controls.Input
            label="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            label="Mobile"
            name="mobile"
            value={mobile}
            onChange={handleInputChange}
            error={errors.mobile}
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
            error={errors.departmentId}
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
            value={isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button text="Submit" type="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
