import React, { useEffect, useState } from 'react';
import { Box, FormControlLabel, Modal, SelectChangeEvent, Typography } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import './styles.css';
import InputCustomized from '../InputCustomized';
import CustomSelect from '../CustomSelect';
import CustomCheckbox from '../CustomCheckbox';
import RadioSearch from './Components/RadioSearch';
import CustomButton from '../CustomButton/Index';

interface ISearchModal {
    open: boolean,
    handleClose: () => void
}

interface IErrorsData {
	task_name: string;
}

const initialErrors: IErrorsData = {
	task_name: '',
};

const SearchModal: React.FC<ISearchModal> = ({ open, handleClose }) => {

    const distance = [
        { id: 1, dist: 'без ограничений'},
        { id: 2, dist:  '1,5 км'},
        { id: 3, dist: '3 км'},
        { id: 4, dist:  '5 км'},
        { id: 5, dist:  '10 км'},
        { id: 6, dist:  '15 км'},
        { id: 7, dist:  '20 км'},
        { id: 8, dist:  '30 км'},
        { id: 9, dist:  '40 км'},
        { id: 10, dist:  '50 км'}
    ]
    const distanceKeys = Object.keys(distance[0]);
	const [distanceItem, setCategory] = useState('');
	const [errors, setErrors] = useState<IErrorsData>(initialErrors);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		// onChange(e.target.name, e.target.value);
		setErrors({ ...errors, [e.target.name]: '' });
	};

	const handleCategorySelect = (event: SelectChangeEvent<string | unknown>) => {
		setCategory(event.target.value as string);
	};

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box className='modal'>
                <Box className='modalTitleContainer'>
                    <Typography className='modalTitle'>
                        Дополнительные настройки поиска
                    </Typography>
                </Box>
                <InputCustomized
                    name='adress'
                    value={''}
                    onChange={handleInputChange}
                    placeholder='Введите адрес'
                    label='Адрес'
                    className='adressInput'
			    />
                <Box className='inputsContainer'>
                    <Box>
                        <CustomSelect
                            label='Радиус поиска'
                            value={distanceItem}
                            values={distance}
                            valueKey={distanceKeys[0]}
                            textKey={distanceKeys[1]}
                            onChange={handleCategorySelect}
                            className='adressSelect'
                            formControlClass='select-wrap'
                        />
                        <InputCustomized
                            name='price'
                            value={''}
                            onChange={handleInputChange}
                            placeholder='₽'
                            label='Цена от'
                            className='priceInput'
                        />
                    </Box>
                    <Box className='checkboxContainer'>
                        <FormControlLabel
                            control={
                                <CustomCheckbox name='isOnline' onChange={() => true} />
                            }
                            label={
                                <Typography variant='body1' sx={{ mb: 0 }}>
                                    Удаленная работа
                                </Typography>
                            }
                        />
                          <FormControlLabel
                            control={
                                <CustomCheckbox name='isOnline' onChange={() => true} />
                            }
                            label={
                                <Typography variant='body1' sx={{ mb: 0 }}>
                                    Задания без откликов
                                </Typography>
                            }
                        />
                          <FormControlLabel
                            control={
                                <CustomCheckbox name='isOnline' onChange={() => true} />
                            }
                            label={
                                <Typography variant='body1' sx={{ mb: 0 }}>
                                    Для самозанятых и юрлиц
                                </Typography>
                            }
                        />
                    </Box>
                </Box>
                <RadioSearch />
                <Box className='modalButtonsContainer'>
                    <CustomButton
                            text='Сбросить'
                            onClick={() => console.log(1)}
                            variant='outlined'
                            sx={{ color: '#4795CF', borderColor: '#4795CF' }}
                        />
                    <CustomButton
						text='Применить'
						onClick={() => console.log(1)}
					/>
                </Box>
            </Box>
        </Modal>
    )
}
export default SearchModal