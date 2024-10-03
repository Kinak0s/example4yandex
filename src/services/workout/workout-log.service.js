import { $axios } from '../../api'
import { WORKOUTS } from './workout.service'

const LOG = `${WORKOUTS}/log`

class WorkoutLogService {
	async getById() {
		return $axios.get(`${LOG}/${id}`)
	}

	async create(exerciseId) {
		return $axios.post(`${LOG}/${exerciseId}`)
	}

	async complete(id) {
		return $axios.patch(`${LOG}/complete/${id}`)
	}
}

export default new WorkoutLogService()
