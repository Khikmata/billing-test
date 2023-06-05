import UserInputDataStore from "app/store/UserInputDataStore";
import UserPaginationStore from "app/store/UserPaginationStore";
import { observer } from "mobx-react-lite";
import styles from './CalculationRenderList.module.scss';

export const CalculationRenderList = observer(() => {
	const dataItem = UserInputDataStore.inputValues;
	const sortType = UserInputDataStore.sortType;
	const orderType = UserInputDataStore.orderBy;
	const step = UserPaginationStore.step;

	const sortedDataItem = [...dataItem]
		.filter((item) => item)
		.map((item) => Number(item))
		.sort((a, b) => {
			switch (sortType) {
				case 'По порядку':
					return 0;
				case 'По значению':
					if (orderType === 'DESC') {
						return b - a;
					} else {
						return a - b;
					}
				default:
					return 0;
			}
		})

	return (
		<>
			{sortedDataItem.map((item, index) => (
				<div
					className={[
						styles['calculationRenderList'],
						styles[item > 10 && step === 3 ? 'highligted' : ''],
					].join(' ')}
					key={index}
				>
					<b>{index + 1}.</b>
					{item}
				</div>
			))}
		</>
	);
});
