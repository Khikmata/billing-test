
import UserStore from 'app/store/UserStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { CalculationPanel } from 'widgets/CalculationPanel/CalculationPanel';
import { StepDisplay } from 'widgets/CalculationStepDisplay';
import styles from './CalculationPage.module.scss';



export const CalculationPage = () => {

	const navigate = useNavigate();

	const redirectIfUser = () => {
		if (!UserStore.user) {
			navigate('/login')
		}
	}

	useEffect(() => {
		redirectIfUser();
	}, [])

	return (
		<div className={styles['calculationpage']}>
			<StepDisplay />
			<CalculationPanel />
		</div>
	)
}
