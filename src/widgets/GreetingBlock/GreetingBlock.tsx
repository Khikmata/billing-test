import { Link } from 'react-router-dom'
import { Block } from 'shared/Block'
import styles from './GreetingBlock.module.scss'
export const GreetingBlock = () => {
	return (

		<Block justifyBy='center'>
			<div className={styles['greeting-block-title']}>
				<h1>Calculate App</h1>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente quasi libero corrupti, sit iusto, fugit quidem perferendis voluptas, ex deserunt magnam eum porro totam rerum explicabo sed dignissimos natus.</p>
			</div>
			<div className={styles['greeting-block-action']}>
				<Link to={'/login'}>Вперед</Link>
			</div>
		</Block>
	)
}
