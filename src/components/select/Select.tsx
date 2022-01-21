import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from '@mui/material/FormHelperText';
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SimpleSelect: React.FC<SelectProps> = ({
  label = 'Title',
  items = [{key: 'Key', value: 'Value'}],
  defaultValue = '',
  helperText = '',
  noneOption = false,
  noneText = 'None',
  disabled = false,
  error = false,
  required = false,
  width = 300,
  fullWidth = false,
  autoWidth = false,
  ...props
}: SelectProps) => {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ m: 1, minWidth: 120, width: width }}>
      <FormControl fullWidth={fullWidth} disabled={disabled} error={error} required={required} >
        {label && <InputLabel id={`${label}-select-label`} >{label}</InputLabel>}        
        <Select
          labelId={`${label}-select-label`}
          id={`${label}-simple-select-label`}
          value={value}
          label={label}
          onChange={handleChange}
          autoWidth={autoWidth}
        >
          {noneOption && <MenuItem value=''><em>{noneText}</em></MenuItem>}
          {items.map((item) => {
            return <MenuItem value={item.value}>{item.key}</MenuItem>;
          })}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
}

type SelectProps = {
  /**
   * Label
   */
  label?: string;
  /**
   * Itmes for Selection
   */
  items?: { key: any; value: any }[];
  /**
   * Default Value
   */
  defaultValue?: any;
  /**
   * Helper Text
   */
  helperText?: string;
  /**
   * None Option
   */
  noneOption?: boolean;
  /**
   * None Text
   */
  noneText?: string;
  /**
   * Option
   */
  disabled?: boolean;
  error?: boolean;
  rquired?: boolean;
  width?: number;
  fullWidth?: boolean;
  autoWidth?: boolean;

  name?: string;
  className?: string;
  required?: boolean;
  buttonClassName?: string;
  itemClassName?: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;
};

export type DropdownProps = {
  id?: string;
  name: string;
  className?: string;
  style?: any;
  dropDownClassName?: string;
  ariaLabel?: string;
  headerBefore?: { [key: string]: string };
  items: object;
  menuClassName?: string;
  itemClassName?: string;
  buttonClassName?: string;
  spacerBefore?: Set<string>;
  textFilter?: string;
  title?: React.ReactNode;
  titlePrefix?: React.ReactNode;
  defaultValue?: string;
  describedBy?: string;
  active?: boolean;
  required?: boolean;
  disabled?: boolean;
  methods?: any;
};

export default SimpleSelect;