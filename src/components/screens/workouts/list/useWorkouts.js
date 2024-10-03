import { useMutation, useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import WorkoutLogService from '../../../../services/workout/workout-log.service'
import WorkoutService from '../../../../services/workout/workout.service'

export const useWorkouts = () => {
	const { data, isSuccess } = useQuery({
		queryKey: ['get workouts'],
		queryFn: () => WorkoutService.getAll(),

		select: ({ data }) => data
	})

	const navigate = useNavigate()

	const {
		mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation({
		mutationKey: ['Create new workout log'],
		mutationFn: workoutId => WorkoutLogService.create(workoutId),

		onSuccess({ data }) {
			navigate(`/workout/${data.id}`)
		}
	})

	return useMemo(
		() => ({
			data,
			isSuccess,
			error,
			isLoading,
			isSuccessMutate,
			mutate
		}),
		[error, isLoading]
	)
}
