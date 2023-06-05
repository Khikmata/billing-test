import React from 'react';
import styles from './Block.module.scss';

interface blockProps {
	children: React.ReactNode;
	justifyBy: 'flex-start' | 'center' | 'flex-end' | 'flex-between';
}

export const Block: React.FC<blockProps> = ({ children, justifyBy }) => {
	return (
		<div className={styles['block']} style={{ justifyContent: justifyBy }}>
			{children}
		</div>
	)
}
