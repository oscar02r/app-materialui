import {FormControl, FormControlLabel, Checkbox as MuiCheckbox} from '@material-ui/core'

export default function Checkbox(props) {
  const { name, label, value, onChange} = props
  const convertToDefaultEvenParam = (name, value) =>({
            target:  {
                 name,
                 value
              }
  })

  return (
    <FormControl>
      <FormControlLabel
        control={<MuiCheckbox
              name={name}
              color="primary"
              checked={value}
              onChange={ e => onChange(convertToDefaultEvenParam(name, e.target.checked))}
        />}
        label={label}
      />
    </FormControl>
  );
}
