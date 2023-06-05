import UserInputDataStore from 'app/store/UserInputDataStore'
import styles from './CalculationDataSum.module.scss'
export const CalculationDataSum = () => {

	const inputValues = UserInputDataStore.inputValues


	return (
		<p className={styles['calculationDataSum']}>
			<span>Результат: </span>
			{
				<span className={styles['calculationDataSum-result']}>
					{inputValues
						.map(item => Number(item))
						.reduce((total, step) => total + step, 0)}
				</span>
			}
		</p>
	)
}
