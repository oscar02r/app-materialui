import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
 import DateFnsUtils from '@date-io/date-fns'

 const convertToDefaultEvenParam = (name, value) =>({
  target:  {
       name,
       value
    }
  })

export default function DatePicker(props) {
  const { name, label, value, onChange } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
    <KeyboardDatePicker
        label={label}
        format="MMM/dd/yyyy"
        name={name}
        value={value}
        onChange={date => onChange(convertToDefaultEvenParam(name, date))}
    />
    </MuiPickersUtilsProvider>
  );
}
