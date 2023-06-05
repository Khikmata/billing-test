import UserInputDataStore from "app/store/UserInputDataStore";
import UserCalculationStepStore from "app/store/UserPaginationStore";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Button } from "shared/Button";
import styles from './Pagination.module.scss';


interface PaginationProps {
	isAvailable: boolean;
}

export const Pagination: React.FC<PaginationProps> = observer(({ isAvailable }) => {

	const { step, maxStep, setStep } = UserCalculationStepStore;
	const [calculating, setCalculating] = useState(false);


	const handleBack = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (step === 0) {
			return
		} else if (step === 3) {
			setStep(0);
		} else {
			setStep(step - 1);
		}
		UserInputDataStore.setInput(['', '']);
	};


	const handleContinue = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (step === maxStep) {
			setStep(0);
		} else {
			setStep(step + 1);
		}
	}

	console.log(step, maxStep)

	useEffect(() => {
		if (step === 2) {
			setCalculating(true);
		} else {
			setCalculating(false)
		}

	}, [step])


	return (
		<div className={styles['pagination']}>
			<Button onClick={handleBack} isDisabled={step === 0} isInvisible={calculating} place="left" variation="secondary">
				{step === 3 ? 'Вернутся к вводу данных' : 'Назад'}
			</Button>
			<Button onClick={handleContinue} isDisabled={!isAvailable} isInvisible={step === maxStep || calculating} variation="primary" place="right">
				Продолжить
			</Button>
		</div>
	)
})