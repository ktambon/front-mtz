import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8080',
})

http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  // N'ajoute le header QUE si le token existe et ressemble à un JWT
  if (token && token !== 'undefined' && token !== 'null' && token.includes('.')) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default http
