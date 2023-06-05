import { AuthBlock } from 'widgets/AuthBlock'
import styles from './LoginPage.module.scss'
export const LoginPage = () => {
	return (
		<div className={styles['loginpage']}>
			<AuthBlock />
		</div>
	)
}
