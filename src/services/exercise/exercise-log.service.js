import { $axios } from '../../api'

import { EXERCISES } from './exercise.service'

const LOG = `${EXERCISES}/log`

class ExerciseLogService {
	async getById(id) {
		return $axios.get(`${LOG}/${id}`)
	}

	async create(exerciseId) {
		return $axios.post(`${LOG}/${exerciseId}`)
	}

	async updateTime(timeId, body) {
		return $axios.put(`${LOG}/time/${timeId}`, body)
	}

	async complete(id, body) {
		return $axios.patch(`${LOG}/complete/${id}`, body)
	}
}

export default new ExerciseLogService()
