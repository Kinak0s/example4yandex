import cn from 'clsx'
import styles from './Button.module.scss'
const Button = ({ children, clickHandler, type }) => {
	return (
		<div className={styles.wrapper}>
			<button
				className={cn(styles.button, styles[type])}
				onClick={clickHandler}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
