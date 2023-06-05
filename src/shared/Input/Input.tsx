import React from 'react';
import styles from './Input.module.scss';


interface inputProps {
	changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type: 'password' | 'text' | 'numeric' | 'email' | 'tel' | 'number';
	value?: string;
	register?: any;
	label?: any;
	required?: any;
	pattern?: string;
}

export const Input: React.FC<inputProps> = ({ label, changeHandler, type, value, required, pattern }) => {
	return (
		<>
			<label>{label}</label>
			<input className={styles['input']} onChange={changeHandler} type={type} value={value} required={required} pattern={pattern} />
		</>
	)
}
