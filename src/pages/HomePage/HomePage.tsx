import { GreetingBlock } from 'widgets/GreetingBlock';
import styles from './HomePage.module.scss';

export const HomePage = () => {
	return (
		<div className={styles['homepage']}>
			<GreetingBlock />
		</div>
	)
}
