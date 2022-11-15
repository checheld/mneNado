import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FormControlLabel, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

interface IProps {
	component:  { name: string, subcomp: string[] };
    compChecked: Boolean;
    allChecked: Boolean;
    allIndeterminate: Boolean;
    handleChangeComp: any; 
}

const CheckboxGroup: FC<IProps> = ({ component, compChecked, allChecked, allIndeterminate, handleChangeComp}) => {

    const [open, setOpen] = useState(false);
    const [indeterminate, setIndeterminate]  = useState(false);
    const [arrayChecked, setArrayChecked] = useState<Boolean[]>([]);
    let obj : Boolean[] = [];

    useEffect(() => {
        component.subcomp.map(() => (obj.push(true)))   
        setArrayChecked(obj)
    }, [component]);

    useEffect(() => {
        if (!allIndeterminate) {
            component.subcomp.map(() => (obj.push(allChecked)))   
            setArrayChecked(obj)
        }
    }, [allChecked, allIndeterminate]);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleChange = (key: number) =>(event: ChangeEvent<HTMLInputElement>) => {
        event.target.checked === false && setIndeterminate(true);
        event.target.checked === false && handleChangeComp(false);
        const editedArr = [...arrayChecked];
        editedArr[key as number] = event.target.checked;
        setArrayChecked(editedArr);
        !editedArr.includes(false) && setIndeterminate(false);
        !editedArr.includes(false) && handleChangeComp(true);
    };

    const handleChangeMain = (event: ChangeEvent<HTMLInputElement>) => {
        setIndeterminate(false);
        let items = [...arrayChecked];
        if (event.target.checked === false) {
            items.map((el, i) => items[i] = false);
            handleChangeComp(false)
            setArrayChecked(items);
        } else {
            items.map((el, i) => items[i] = true);
            handleChangeComp(true)
            setArrayChecked(items);
        }
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <ListItemButton onClick={handleClick} sx={{ maxWidth: '50px' }}>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <FormControlLabel
                    control={
                        <Checkbox name='isOnline'
                            checked={!!compChecked}
                            indeterminate={indeterminate}
                            onChange={handleChangeMain} />
                    }
                    label={
                        <Typography variant='body1' sx={{ mb: 0 }}>
                            {component.name}
                        </Typography>
                    }
                />
            </Box>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {component.subcomp.map((el, key) => (
                        <ListItemButton key={key} >
                            <Box sx={{ display: 'flex', flexDirection: 'column', ml: '50px' }}>
                                <FormControlLabel
                                    label={
                                        <Typography variant='body1' sx={{ mb: 0 }}>
                                            {el}
                                        </Typography>
                                    }
                                    control={
                                        <Checkbox name='isOnline' onChange={handleChange(key)} checked={!!arrayChecked[key]} />
                                    }
                                />
                            </Box>
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </>
    );
}

export default CheckboxGroup;