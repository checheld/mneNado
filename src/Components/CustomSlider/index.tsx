import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface ISliderProps {
	marks: any[];
	name: string;
	value: number;
	step: number;
	className?: string;
}

function valuetext(value: number) {
	return `${value}₽`;
}

const CustomSlider: React.FC<ISliderProps> = ({
	marks,
	name,
	value,
	step,
	className,
}) => {
	return (
		<Box>
			<Slider
				name={name}
				value={value}
				getAriaValueText={valuetext}
				step={step}
				valueLabelDisplay='auto'
				marks={marks}
				className={className}
			/>
		</Box>
	);
};

export default CustomSlider;
