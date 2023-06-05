import { CalculationDataSum } from 'entities/CalculationDataSum';
import { CalculationDataCheck } from 'features/CalculationDataCheck';
import { useEffect, useState } from 'react';
import styles from './CalculationResult.module.scss';
export const CalculationResult = () => {

	const [mounted, setMounted] = useState(false);

	useEffect(() => {

		setMounted(true);

		return () => {
			setMounted(false)
		}
	}, [])

	return (
		<div className={[styles['calculationResult'], styles[mounted ? 'animation' : '']].join(' ')}>
			<CalculationDataSum />
			<CalculationDataCheck />
		</div>
	)
}
