
import UserInputDataStore from 'app/store/UserInputDataStore'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import styles from './CalculationSort.module.scss'

export const CalculationSort = observer(() => {

	const [openModal, setOpenModal] = useState(false)

	const sortDisplay = UserInputDataStore.sortType;
	const orderBy = UserInputDataStore.orderBy;

	const handleModal = () => {
		setOpenModal(openModal => openModal = !openModal)
	}

	const handleSort = (sortName: string) => {
		setOpenModal(false);
		UserInputDataStore.sortType = sortName;
	}

	const handleOrder = () => {
		if (orderBy === 'ASC') {
			UserInputDataStore.orderBy = 'DESC'
		}
		if (orderBy === 'DESC') {
			UserInputDataStore.orderBy = 'ASC'
		}
	}

	return (
		<div className={styles['calculationSort']}>
			<span>Отсортировать по: <span className={styles['calculationSort-display']} onClick={handleModal}>{sortDisplay}</span></span>
			{
				openModal && <ul className={styles['calculationSort-modal']}>
					<li onClick={() => handleSort('По порядку')}>По порядку</li>
					<li onClick={() => handleSort('По значению')}>По значению</li>
				</ul>
			}
			<span className={styles['calculationSort-display']} onClick={handleOrder}>{orderBy === 'ASC' ? '🔼' : '🔽'}</span>
		</div>
	)
})
