import { Link } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Alert from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/Loader'
import SelectExercises from './SelectExercises'
import { useNewWorkout } from './useNewWorkout'

const NewWorkout = () => {
	const {
		register,
		handleSubmit,
		errors,
		isSuccess,
		error,
		isLoading,
		onSubmit,
		control
	} = useNewWorkout()

	return (
		<>
			<Layout
				bgImage='/images/new-Workout-bg.jpg'
				heading='Create new Workout'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert type='Workout created successfully' />}
				{isLoading && <Loader />}

				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'Name is required!'
						}}
						type='text'
						placeholder='Enter name'
					/>

					<Link to='/new-exercise' className='dark-link'>
						Add new exercise
					</Link>

					<SelectExercises control={control} />

					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}

					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewWorkout
