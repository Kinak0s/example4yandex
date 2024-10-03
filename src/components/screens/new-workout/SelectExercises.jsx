import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import Loader from '../../ui/Loader'
import { useListExercises } from './useListExercises'

const SelectExercises = ({ control }) => {
	const { data, isLoading } = useListExercises()

	if (isLoading) return <Loader />

	if (!Array.isArray(data)) {
		console.error('Expected data to be an array but got:', data)
		return <div>No exercises available.</div>
	}

	return (
		<Controller
			name='exerciseIds'
			control={control}
			render={({ field: { value, onChange } }) => {
				return (
					<ReactSelect
						classNamePrefix='select2-selection'
						placeholder='Exercises...'
						title='Exercises'
						options={data.map(exercise => ({
							value: exercise.id,
							label: exercise.name
						}))}
						value={value}
						onChange={onChange}
						isMulti
					/>
				)
			}}
		/>
	)
}

export default SelectExercises
