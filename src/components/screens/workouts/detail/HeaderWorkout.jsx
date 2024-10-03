import cn from 'clsx'
import Header from '../../../layout/header/Header'
import stylesLayout from '../../../layout/Layout.module.scss'
import styles from './Workout.module.scss'

const HeaderWorkout = ({ isSuccess, workoutLog }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{ backgroundImage: `url('/images/workout-bg.jpg')`, height: 300 }}
		>
			<Header backLink='/workouts' />

			{isSuccess && (
				<div>
					<time className={styles.time}>{workoutLog.minute + 'min.'}</time>
					<h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderWorkout
