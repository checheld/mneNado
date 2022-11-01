import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormHelperText, styled } from '@mui/material';


const CustomSelect: React.FC = () => {

    const elements = [
        'без ограничений',
        '1,5 км',
        '3 км',
        '5 км',
        '10 км',
        '15 км',
        '20 км',
        '30 км',
        '50 км'
    ]

    return (
        <FormControl sx={{ mr: '20px' }}>
            <Select
                className='select'
                displayEmpty
                value=''
            >
                <MenuItem value="">
                    <span style={{ color: `#a7aaac`, fontSize: `14px` }}>
                        Радиус поиска
                    </span>
                </MenuItem>
                {
                    elements.map((el: any, key: number) => <MenuItem value={el} key={key}>{el}</MenuItem>)
                }
            </Select>
        </FormControl>
    );
}
export default CustomSelect