import styles from '../ExerciseLog.module.scss'

const arr = ['Previous', 'Weight & Repeat', 'Completed']

const TableHeader = () => {
	return (
		<div className={styles.row}>
			{arr.map(el => (
				<span>{el}</span>
			))}
		</div>
	)
}

export default TableHeader
