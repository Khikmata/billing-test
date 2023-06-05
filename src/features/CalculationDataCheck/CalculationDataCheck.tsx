import { CalculationRenderList } from 'entities/CalculationRenderList';
import { CalculationSort } from 'entities/CalculationSort';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import styles from './CalculationDataCheck.module.scss';

export const CalculationDataCheck = observer(() => {

	const [mounted, setMounted] = useState(false);

	useEffect(() => {

		setMounted(true);

		return () => {
			setMounted(false)
		}
	}, [])

	return (
		<div className={[styles['calculationDataCheck'], styles[mounted ? 'animation' : '']].join(' ')}>
			<CalculationSort />
			<CalculationRenderList />
		</div >
	)
})
