import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import CustomButton from '../../Components/CustomButton/Index';
import CustomInput from '../../Components/CustomInput';
import CustomTextarea from '../../Components/CustomTextarea';

const ProfilePage: React.FC = () => {
	return (
		<Box sx={{ mt: '100px' }}>
			<p>Profile</p>
			<Stack direction='column' spacing='32px' className='forms-container'>
				<Box className='form' id='personal'>
					<CustomInput
						name='first_name'
						label='Имя'
						onChange={() => {}}
						value={''}
						className='step__input'
						error={''}
					/>
					<CustomInput
						name='last_name'
						label='Фамилия'
						onChange={() => {}}
						value={''}
						className='step__input'
						error={''}
					/>
          <CustomTextarea id='description' name='description' value={''} label='Расскажите о себе' placeholder='Навыки, подробное описание услуг' onChange={() => {}} />
					<CustomButton
						id='personal'
						children='Save changes'
						onClick={() => {}}
						variant='contained'
						className='step__btn'
						text='Сохранить'
					/>
				</Box>
			</Stack>
		</Box>
	);
};

export default ProfilePage;
