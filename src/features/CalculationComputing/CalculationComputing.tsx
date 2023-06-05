import UserCalculationStepStore from "app/store/UserPaginationStore";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { LoadingIcon } from "shared/LoadingIcon";
import styles from './CalculationComputing.module.scss';

export const CalculationComputing = observer(() => {

	const [mounted, setMounted] = useState(false);

	const computeData = () => {
		setTimeout(() => {
			UserCalculationStepStore.setStep(3)
		}, 5000);
	}

	useEffect(() => {

		setMounted(true);

		computeData();

		return () => {
			setMounted(false)
		}
	}, [])


	return (
		<div className={[styles['calculationComputing'], styles[mounted ? 'animation' : '']].join(' ')}>
			<LoadingIcon />
			<p className={styles['calculationComputing-text']}>Производится расчет...</p>
		</div>
	)
})
