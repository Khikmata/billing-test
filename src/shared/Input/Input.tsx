import React from 'react';
import styles from './Input.module.scss';


interface inputProps {
	changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type: 'password' | 'text' | 'numeric' | 'email' | 'tel' | 'number';
	value?: string;
	label?: string;
	required?: boolean;
	pattern?: string;
	placeHolder?: string;
}

export const Input: React.FC<inputProps> = ({ label, changeHandler, type, value, required, pattern, placeHolder }) => {
	return (
		<>
			<label>{label}</label>
			<input className={styles['input']} onChange={changeHandler} type={type} value={value} required={required} pattern={pattern} placeholder={placeHolder} />
		</>
	)
}
