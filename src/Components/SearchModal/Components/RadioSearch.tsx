import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Сортировать по:</FormLabel>
      <RadioGroup defaultValue="female" sx={{display: 'block'}}>
        <FormControlLabel value="female" control={<Radio />} label="Дате публикации" />
        <FormControlLabel value="male" control={<Radio />} label="Срочности" />
        <FormControlLabel value="other" control={<Radio />} label="Удаленности" />
      </RadioGroup>
    </FormControl>
  );
}