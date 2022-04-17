import http from '../http-common'

class TutorialDataService {
  getAll () {
    return http.get(`tutorials`)
  }
  get (id) {
    return http.get(`/tutorial/${id}`)
  }
  create (data) {
    return http.post('/tutorials', data)
  }
  update (id, data) {
    return http.put(`/tutorials/${id}`, data)
  }
  delete (id) {
    return http.delete(`/tutorials/${id}`)
  }
  deleteAll () {
    return http.delete(`/tutorials`)
  }
  findbyTitle (title) {
    return http.get(`/tutorials?title=${title}`)
  }
}

export default new TutorialDataService()
