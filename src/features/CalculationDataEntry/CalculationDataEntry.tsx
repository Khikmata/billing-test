import UserInputData from 'app/store/UserInputDataStore';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Input } from 'shared/Input';
import styles from './CalculationDataEntry.module.scss';

export const CalculationDataEntry = observer(() => {

	const [mounted, setMounted] = useState(false);

	const inputValues = UserInputData.inputValues;
	const setInput = UserInputData.setInput;

	const handleInputChange = (index: number, value: string) => {
		const newInputValues = [...inputValues];
		newInputValues[index] = value;

		// Если мы опустошаем инпут - все последующие за ним инпуты исчезают
		if (value.length === 0 && index < inputValues.length - 1 && index !== 0 && index !== 1) {
			setInput(newInputValues.slice(0, index + 1));
			return;
		}

		setInput(newInputValues);

		// Если мы вводим символ в последний инпут - появляется новый
		if (value.length > 0 && index === inputValues.length - 1) {
			setInput([...newInputValues, '']); // Use the updated newInputValues array
		}
	};

	useEffect(() => {

		setMounted(true);
		return () => {
			setMounted(false)
		}
	}, [])

	return (

		<div className={[styles['calculationDataEntry'], styles[mounted ? 'animation' : '']].join(' ')}>
			{inputValues.map((value, index) => (
				<div key={index}>
					<label>Введите {index + 1} число</label>
					<Input
						pattern="[0-9]{10}"
						type="tel"
						value={value}
						changeHandler={(e) => handleInputChange(index, e.target.value.replace(/[^0-9]/g, ""))}
						required={index < 2}
					/>
				</div>
			))}
		</div>
	)
})
