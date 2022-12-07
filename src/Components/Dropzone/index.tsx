import React, { Dispatch, useCallback } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import './style.scss';

const CustomDropzone: React.FC<{
	setFiles: Dispatch<any>;
}> = ({ setFiles }) => {
	const onDrop = useCallback(
		(acceptedFiles: FileWithPath[]) => {
			setFiles(acceptedFiles);
		},
		[setFiles]
	);
	const { getRootProps, getInputProps, isDragReject } = useDropzone({
		onDrop,
		accept: {
			'image/*': ['.png', '.jpeg', '.jpg', '.svg'],
			'application/octet-stream': ['.pdf'],
		},
		multiple: true,
	});

	return (
		<>
			<div {...getRootProps()} className='dropzone' id={id}>
				<input {...getInputProps()} />
				{isDragReject ? (
					<p className='error'>
						Недопустимый формат файла. Загрузите изображение или .pdf
					</p>
				) : (
					<>
						<p className='dropzone__text-basic'>Добавить файл</p>
					</>
				)}
			</div>
		</>
	);
};

export default CustomDropzone;
