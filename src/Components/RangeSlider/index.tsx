import { Box, Stack, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { formatMoney } from '../../utils/functions';
import './style.sass';

interface IProps {
	min: number;
	middle: number | number[];
	max: number;
	onChange: any;
}

const RangeSlider: React.FC<IProps> = ({ min, middle, max, onChange }) => {
	const [minVal, setMinVal] = useState(min);
	const [maxVal, setMaxVal] = useState(max);
	const minValRef = useRef<any>(null);
	const maxValRef = useRef<any>(null);
	const range = useRef<any>(null);
	const bubble = useRef<HTMLDivElement>(null);

	// Convert to percentage
	const getPercent = useCallback(
		(value: number) => Math.round(((value - min) / (max - min)) * 100),
		[min, max]
	);

	// Set width of the range to decrease from the left side
	useEffect(() => {
		if (maxValRef.current) {
			const minPercent = getPercent(minVal);
			const maxPercent = getPercent(+maxValRef.current!.value);

			if (range.current) {
				range.current.style.left = `${minPercent}%`;
				range.current.style.width = `${maxPercent - minPercent}%`;
				bubble!.current!.style.left = `${minPercent - 9}%`;
			}
		}
	}, [minVal, getPercent]);

	// Set width of the range to decrease from the right side
	useEffect(() => {
		if (minValRef.current) {
			const minPercent = getPercent(+minValRef.current?.value);
			const maxPercent = getPercent(maxVal);

			if (range.current) {
				range.current.style.width = `${maxPercent - minPercent}%`;
			}
		}
	}, [maxVal, getPercent]);

	// Get min and max values when their state changes
	useEffect(() => {
		onChange({ min: minVal, max: maxVal });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [minVal, maxVal]);

	return (
		<Stack
			justifyContent='center'
			alignItems='center'
			className='slider-container'
		>
			<input
				type='range'
				min={min}
				max={max}
				step={100}
				value={minVal}
				ref={minValRef}
				onChange={(event) => {
					const value = Math.min(+event.target.value, maxVal - 100);
					setMinVal(value);
					event.target.value = value.toString();
				}}
				className='thumb thumb--zindex-3'
			/>
			<input
				type='range'
				min={min}
				max={max}
				step={100}
				value={maxVal}
				ref={maxValRef}
				onChange={(event) => {
					const value = Math.max(+event.target.value, minVal + 100);
					setMaxVal(value);
					event.target.value = value.toString();
				}}
				className='thumb thumb--zindex-4'
			/>

			<Box className='slider'>
				<div className='slider__track' />
				<div ref={range} className='slider__range' />
				<Box className='slider__bubble' ref={bubble}>
					{formatMoney(minVal)}₽&nbsp;&mdash;&nbsp;{formatMoney(maxVal)}₽
				</Box>
				<Typography className='slider__left-value' component='p'>
					{formatMoney(min)}₽
				</Typography>
				{Array.isArray(middle) ? (
					<>
						{middle.map((el, i) => (
							<Typography
								className={`slider__value slider__value-${i + 1}`}
								component='p'
							>
								{formatMoney(el)}₽
							</Typography>
						))}
					</>
				) : (
					<Typography className='slider__middle-value' component='p'>
						{formatMoney(middle)}₽
					</Typography>
				)}
				<Typography className='slider__right-value' component='p'>
					{formatMoney(max)}₽
				</Typography>
			</Box>
		</Stack>
	);
};

export default RangeSlider;
