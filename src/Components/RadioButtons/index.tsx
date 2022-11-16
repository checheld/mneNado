import React from 'react';
import {
	FormControl,
	FormControlLabel,
	FormHelperText,
	FormLabel,
	Radio,
	RadioGroup,
	RadioProps,
	styled,
} from '@mui/material';

interface IProps {
	id?: string;
	name: string;
	values: { key: string | number; value: string }[];
	value: string | number;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className: string;
	ariaLabel?: string;
	error?: string;
}

const BpIcon = styled('span')(() => ({
	borderRadius: '50%',
	width: 16,
	height: 16,
	boxShadow: '0 0 0 1px rgba(35,103,148,0.6)',
	backgroundColor: '#fff',
	backgroundImage:
		'linear-gradient(180deg,rgba(255, 255, 255, 0.05),rgba(255, 255, 255, 0))',
	'.Mui-focusVisible &': {
		outline: '2px auto rgba(19,124,189,.6)',
		outlineOffset: 2,
	},
	'input:hover ~ &': {
		backgroundColor: 'rgba(46,154,211,17%)',
	},
	'input:disabled ~ &': {
		boxShadow: 'none',
		background: 'rgba(57,75,89,.5)',
	},
}));

const BpCheckedIcon = styled(BpIcon)({
	backgroundColor: '#137cbd',
	backgroundImage:
		'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
	'&:before': {
		display: 'block',
		width: 16,
		height: 16,
		backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
		content: '""',
	},
	'input:hover ~ &': {
		backgroundColor: '#106ba3',
	},
});

function StyledRadio(props: RadioProps) {
	return (
		<Radio
			disableRipple
			color='default'
			checkedIcon={<BpCheckedIcon />}
			icon={<BpIcon />}
			{...props}
		/>
	);
}
const RadioButtons: React.FC<IProps> = (props) => {
	return (
		<FormControl className={props.className}>
			<FormLabel id={props.id} sx={{ mb: 1 }}>
				Выберите способ оплаты
			</FormLabel>
			<RadioGroup
				aria-labelledby={props.ariaLabel}
				name={props.name}
				value={props.value}
				onChange={props.onChange}
			>
				{props.values.map((item) => (
					<FormControlLabel
						key={item.key}
						value={item.key}
						control={<StyledRadio required={true} />}
						label={item.value}
					/>
				))}
			</RadioGroup>
			<FormHelperText
				sx={{
					height: '20px',
					marginBottom: 3,
					color: '#FB6E07',
				}}
			>
				{props.error}
			</FormHelperText>
		</FormControl>
	);
};

export default RadioButtons;
