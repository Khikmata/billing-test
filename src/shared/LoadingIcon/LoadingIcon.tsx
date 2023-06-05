import styles from './LoadingIcon.module.scss'

export const LoadingIcon = () => {
	return (
		<div className={styles["loader-container"]}>
			<div className={styles["spinner"]}></div>
		</div>
	)
}
