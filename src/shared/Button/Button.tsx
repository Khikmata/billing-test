import React from 'react';
import styles from './Button.module.scss';

interface buttonProps {
	children: React.ReactNode;
	onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
	variation: 'primary' | 'secondary';
	isDisabled?: boolean;
	isInvisible?: boolean;
	place?: 'left' | 'right';
}

export const Button: React.FC<buttonProps> = ({ children, onClick, variation, isDisabled, isInvisible, place }) => {
	return (
		<button
			disabled={isDisabled}
			className={[styles['button'], styles[variation === 'primary' ? 'primary' : 'secondary'], styles[isInvisible ? 'invisible' : '']].join(' ')}
			onClick={onClick}
			style={{ float: place }}>
			{children}
		</button>
	)
}
