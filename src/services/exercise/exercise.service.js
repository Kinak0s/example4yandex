import { $axios } from '../../api'

export const EXERCISES = '/api/exercises'

class ExerciseService {
	async getAll() {
		return $axios.get('/api/exercises')
	}

	async create(body) {
		return $axios.post('/api/exercises', body)
	}

	async update(id, body) {
		return $axios.put(`${'/api/exercises'}/${id}`, body)
	}

	async delete(id) {
		return $axios.delete(`${'/api/exercises'}/${id}`)
	}
}

export default new ExerciseService()
