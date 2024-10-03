import Loader from '../../ui/Loader'
import Alert from '../../ui/alert/Alert'

import { useCompleteLog } from './hooks/useCompleteLog'
import { useExerciseLog } from './hooks/useExerciseLog'

import ExerciseError from './ExerciseError'
import styles from './ExerciseLog.module.scss'
import HeaderExerciseLog from './HeaderExerciseLog'
import TableHeader from './table/TableHeader'
import TableRow from './table/TableRow'

const ExerciseLog = () => {
	const {
		exerciseLog,
		isLoading,
		isSuccess,
		errorChange,
		getState,
		onChangeState,
		toggleTime
	} = useExerciseLog()

	const { completeLog, errorCompleted } = useCompleteLog()

	return (
		<>
			<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<ExerciseError errors={[errorChange, errorCompleted]} />
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeader />
						{exerciseLog?.times.map(item => (
							<TableRow
								getState={getState}
								onChangeState={onChangeState}
								toggleTime={toggleTime}
								item={item}
								key={item.id}
							/>
						))}
					</div>
				)}

				{isSuccess && exerciseLog?.times?.length === 0 && (
					<Alert type='warning' text='Times not found' />
				)}
			</div>
		</>
	)
}

export default ExerciseLog
