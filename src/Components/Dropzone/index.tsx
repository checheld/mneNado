import React, { Dispatch, useCallback } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import './style.scss';

interface IDropzoneProps {
	setFiles: Dispatch<any>;
	id?: string;
}

const CustomDropzone: React.FC<IDropzoneProps> = ({ setFiles, id }) => {
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
			'application/pdf': ['.pdf'],
		},
		multiple: true,
	});

	return (
		<>
			<div {...getRootProps({ id })} className='dropzone'>
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
