import React, { Dispatch, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './style.scss';

const CustomDropzone: React.FC<{
	setFile: Dispatch<any>;
	openModal: () => void;
}> = ({ setFile, openModal }) => {
	const onDrop = useCallback(
		(acceptedFiles: any[]) => {
			setFile(acceptedFiles[0]);
			openModal();
		},
		[setFile, openModal]
	);
	const { getRootProps, getInputProps, isDragReject } = useDropzone({
		onDrop,
		accept: {
			'image/*': ['.png', '.jpeg', '.jpg'],
			'application/*': ['pdf'],
		},
		multiple: false,
	});

	return (
		<>
			<div {...getRootProps()} className='dropzone'>
				<input {...getInputProps()} />
				{isDragReject ? (
					<p className='error'>Sorry, we accept only images and .pdf</p>
				) : (
					<>
						<p className='dropzone__text-basic'>
							Drag &amp;&nbsp;Drop your file here
						</p>
						<p className='dropzone__text-basic'>or</p>
						<p className='dropzone__text'>Choose file from computer</p>
					</>
				)}
			</div>
		</>
	);
};

export default CustomDropzone;
