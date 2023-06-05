import UserInputData from 'app/store/UserInputDataStore';
import UserCalculationStepStore from 'app/store/UserPaginationStore';
import { CalculationComputing } from 'features/CalculationComputing';
import { CalculationDataCheck } from 'features/CalculationDataCheck';
import { CalculationDataEntry } from 'features/CalculationDataEntry';
import { CalculationResult } from 'features/CalculationResult';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Block } from 'shared/Block';
import { Pagination } from 'widgets/Pagination';
import styles from './CalculationPanel.module.scss';

export const CalculationPanel = observer(() => {

	const [validationComplete, setValidationComplete] = useState(false)

	const step = UserCalculationStepStore.step;
	const inputValues = UserInputData.inputValues;

	const displayCurrentStep = () => {
		return (
			<>
				{
					(step === 0 && <CalculationDataEntry />)
				}
				{
					(step === 1 && <CalculationDataCheck />)
				}
				{
					step === 2 && <CalculationComputing />
				}
				{
					step === 3 && <CalculationResult />
				}
				<Pagination isAvailable={validationComplete} />
			</>
		)
	}

	console.log(validationComplete)

	useEffect(() => {
		if (inputValues[0].length > 0 && inputValues[1].length > 0) {
			setValidationComplete(true)
		} else {
			setValidationComplete(false)
		}
	}, [inputValues])

	return (
		<div className={styles['calculationPanel']}>
			<Block justifyBy='center'>
				<div>
					{displayCurrentStep()}
				</div>
			</Block>
		</div>
	)
})

