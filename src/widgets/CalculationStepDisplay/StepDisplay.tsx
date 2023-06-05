import UserCalculationStepStore from "app/store/UserPaginationStore";
import UserStore from "app/store/UserStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styles from './StepDisplay.module.scss';
export const StepDisplay = observer(() => {

	const user = UserStore.user
	const maskedEmail = user && user.email.replace(/(?<=@.{1}).*?(?=\.[^.]*$)/g, (match) => '*'.repeat(match.length));
	const step = UserCalculationStepStore.step

	const renderTextByStep = () => {
		switch (step) {
			case 0:
				return 'Ввод данных'
			case 1:
				return 'Подтверждение данных'
			case 2:
				return 'Расчет'
			case 3:
				return 'Результат'
			default:
				return 'calculation'
		}
	}

	useEffect(() => {
		document.title = renderTextByStep();
	}, [step])

	return (
		<div className={styles['stepdisplay']}>
			<p>Привет, {maskedEmail}</p>
			<p className={styles['stepdisplay-state']}>{renderTextByStep()}</p>
		</div>
	)
})
