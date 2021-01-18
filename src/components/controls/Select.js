import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  FormHelperText
} from "@material-ui/core";

export default function Select(props) {
  const { name, label, value, error = null, onChange, options } = props;
  return (
    <FormControl variant="outlined"
     {...(error && {error:true})}
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="0"> None </MenuItem>
        {
          
            options.map((option)=>(
                <MenuItem key={option.title} value={option.id}> {option.title} </MenuItem>)) 
         
        }
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
