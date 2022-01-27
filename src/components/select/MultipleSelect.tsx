import * as React from "react";
import { Theme, useTheme } from '@mui/material/styles';
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from '@mui/material/FormHelperText';
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(key: string, values: any[], theme: Theme) {
  return {
    fontWeight:
      values.indexOf(key) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function chipType(selected: any) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
      {selected.map((value: any) => (
        <Chip key={value} label={value} />
      ))}
    </Box>
  )
}
function commaType(selected: any) {
  return (
    selected.join(', ')
  )
}
function renderType(type: any) {
  switch (type) {
    case 'chip':
      return chipType;      
    default:
      return commaType;      
  }  
}


export const MultipleSelect: React.FC<SelectProps> = ({
  label = 'Title',
  items = [{key: 'Key', value: 'Value'}],
  defaultValue = '',
  defaultValues = [],
  helperText = '',
  noneOption = false,
  noneText = 'None',
  disabled = false,
  error = false,
  required = false,
  width = 300,
  fullWidth = false,
  autoWidth = false,
  chip = false,
  ...props
}: SelectProps) => {
  const theme = useTheme();
  const [values, setValues] = React.useState<any[]>(defaultValues);

  const handleChange = (event: SelectChangeEvent<typeof values>) => {
    const {
      target: { value },
    } = event;
    setValues(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Box sx={{ m: 1, minWidth: 120, width: width }}>
      <FormControl fullWidth={fullWidth} disabled={disabled} error={error} required={required} >
        {label && <InputLabel id={`${label}-multiple-select-label`} >{label}</InputLabel>}        
        <Select
          labelId={`${label}-multiple-select-label`}
          id={`${label}-multiple-select-label`}
          multiple
          value={values}
          label={label}
          onChange={handleChange}
          autoWidth={autoWidth}
          MenuProps={MenuProps}
          renderValue={renderType(chip ? 'chip' : '')}
        >
          {noneOption && <MenuItem value=''><em>{noneText}</em></MenuItem>}
          {items.map((item) => {
            return <MenuItem key={item.key} value={item.value} style={getStyles(item.key, values, theme)}>{item.key}</MenuItem>;
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
  defaultValues?: any[];
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
  chip?: boolean;

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