import { useEffect } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
} from "@material-ui/core";
import { useForm, Form } from "../../components/useForm";
import { Controls } from "../../components/controls/Controls";

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
        </Grid>

        <Grid xs={6} item>
          <Controls.RadioGroup
            row
            label="Gender"
            name="gender"
            value={gender}
            items={genderItems}
            onChange={handleInputChange}
          ></Controls.RadioGroup>
        </Grid>

        <Grid item></Grid>
      </Grid>
    </Form>
  );
}
