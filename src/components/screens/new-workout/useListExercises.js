import { useQuery } from '@tanstack/react-query'
import ExerciseService from '../../../services/exercise/exercise.service'

export const useListExercises = () =>
	useQuery({
		queryKey: ['list exercises'],
		queryFn: () => ExerciseService.getAll(),

		select: res => res.data
	})
